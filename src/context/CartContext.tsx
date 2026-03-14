import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { apiCall } from '@/lib/api';
import { toast } from 'sonner';

export interface CartItem {
  courseId: string;
  courseName: string;
  price: number;
  discountedPrice?: number;
  image?: string;
  plan?: 'Basic' | 'Premium';
}

/**
 * Payload sent to addToCart.
 * All fields except `courseName` are optional dummy/display data.
 * When the course DB is ready, the backend will look up by courseId/courseName
 * and override price/image with real values.
 */
export interface AddToCartPayload {
  courseName: string;
  courseId?: string;
  price?: number;
  discountedPrice?: number;
  image?: string;
  plan?: 'Basic' | 'Premium';
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  loading: boolean;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (payload: AddToCartPayload) => Promise<void>;
  removeFromCart: (courseId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  fetchCart: () => Promise<void>;
  isInCart: (courseIdentifier: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Local storage for plans since we can't touch the backend
  const [localPlans, setLocalPlans] = useState<Record<string, { plan: 'Basic' | 'Premium', discountedPrice: number }>>(() => {
    const saved = localStorage.getItem('cart_plans');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('cart_plans', JSON.stringify(localPlans));
  }, [localPlans]);

  const mapCartItem = useCallback((item: any): CartItem => {
    const id = String(item.id || item.courseId);
    const lp = localPlans[id];
    
    return {
      courseId: id,
      courseName: item.courseName || item.name,
      price: item.price || item.pricing?.original || 0,
      discountedPrice: lp?.discountedPrice || item.discountedPrice || item.pricing?.discounted || 0,
      image: item.image,
      plan: lp?.plan || item.plan || 'Basic'
    };
  }, [localPlans]);

  const fetchCart = useCallback(async () => {
    try {
      const response = await apiCall('/user/cart', { method: 'GET' });
      if (response.success && response.data) {
        setCart(response.data.map(mapCartItem));
      }
    } catch (error) {
      console.warn('Cart fetch failed:', error);
    }
  }, [mapCartItem]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (payload: AddToCartPayload) => {
    const { courseName, courseId, price, discountedPrice, image, plan } = payload;
    
    // Save plan locally
    if (courseId && plan) {
      setLocalPlans(prev => ({
        ...prev,
        [courseId]: { plan, discountedPrice: discountedPrice || 0 }
      }));
    }

    setLoading(true);
    try {
      const response = await apiCall('/user/cart/add', {
        method: 'POST',
        data: { courseId, courseName, price, discountedPrice, image, plan },
      });
      if (response.success) {
        // If data is returned, map it. Otherwise refetch.
        if (response.data) {
           setCart(response.data.map(mapCartItem));
        } else {
           await fetchCart();
        }

        const key = courseId || courseName;
        const alreadyInCart = cart.some(item => String(item.courseId) === String(key) || item.courseName === courseName);

        if (!alreadyInCart) {
          toast.success(`"${courseName}" added to cart! 🛒`);
        }
      }
    } catch (error: any) {
      toast.error('Failed to add to cart');
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (courseId: string) => {
    setLoading(true);
    try {
      const response = await apiCall(`/user/cart/${courseId}`, {
        method: 'DELETE',
      });
      if (response.success) {
        setCart((response.data || []).map(mapCartItem));
        toast.success('Course removed from cart.');
      }
    } catch (error: any) {
      toast.error('Failed to remove course');
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      const response = await apiCall('/user/cart/clear', {
        method: 'POST',
      });
      if (response.success) {
        setCart([]);
        setLocalPlans({});
        toast.success('Cart cleared.');
      }
    } catch (error: any) {
      toast.error('Failed to clear cart');
    } finally {
      setLoading(false);
    }
  };

  const isInCart = (courseIdentifier: string) =>
    cart.some(
      item => String(item.courseId) === String(courseIdentifier) || item.courseName === courseIdentifier
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.length,
        loading,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
        fetchCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
