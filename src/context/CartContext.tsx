import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { apiCall } from '@/lib/api';
import { toast } from 'sonner';

export interface CartItem {
  courseId: string;
  courseName: string;
  price: number;
  discountedPrice?: number;
  image?: string;
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

  const fetchCart = useCallback(async () => {
    try {
      const response = await apiCall('/user/cart', { method: 'GET' });
      if (response.success) {
        setCart(response.data || []);
      }
    } catch (error) {
      // Silently fail — session may not exist yet for new visitors
      console.warn('Cart fetch failed:', error);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (payload: AddToCartPayload) => {
    const { courseName, courseId, price, discountedPrice, image } = payload;
    setLoading(true);
    try {
      const response = await apiCall('/user/cart/add', {
        method: 'POST',
        // Send full dummy data — backend stores it directly into the session.
        // TODO: When DB is ready, backend will use courseId/courseName to look up
        //       real price/image and ignore the client-provided values.
        data: { courseId, courseName, price, discountedPrice, image },
      });
      if (response.success) {
        setCart(response.data || []);

        const key = courseId || courseName;
        const alreadyInCart = cart.some(item => item.courseId === key || item.courseName === courseName);

        if (alreadyInCart) {
          toast.info(`"${courseName}" is already in your cart.`, {
            description: 'Go to your cart to proceed.',
          });
        } else {
          toast.success(`"${courseName}" added to cart! 🛒`, {
            description: 'You can view your cart anytime.',
          });
        }
      }
    } catch (error: any) {
      toast.error('Failed to add course to cart', {
        description: error.message || 'Please try again.',
      });
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
        setCart(response.data || []);
        toast.success('Course removed from cart.');
      }
    } catch (error: any) {
      toast.error('Failed to remove course', { description: error.message });
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
        toast.success('Cart cleared.');
      }
    } catch (error: any) {
      toast.error('Failed to clear cart', { description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const isInCart = (courseIdentifier: string) =>
    cart.some(
      item => item.courseId === courseIdentifier || item.courseName === courseIdentifier
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
