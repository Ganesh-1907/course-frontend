import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, clearCart, loading, cartCount } = useCart();

  // Total calculation (always parsing the number logic or picking the property)
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.discountedPrice || item.price || 0), 0);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-slate-50 border-l border-slate-200">
        <SheetHeader className="p-6 pb-4 border-b border-slate-200 bg-white">
          <SheetTitle className="flex items-center gap-2 text-xl font-black text-slate-900">
            <ShoppingCart className="w-6 h-6 text-primary" />
            Your Cart
            <span className="ml-auto bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full text-sm font-bold">
              {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <AnimatePresence>
            {cart.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-4"
              >
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-10 h-10 text-slate-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-slate-800">Your cart is empty</h3>
                  <p className="text-sm font-medium text-slate-500 max-w-[250px] mx-auto">
                    Looks like you haven't added any courses to your cart yet.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 bg-primary hover:bg-primary-dark text-white font-black px-8"
                >
                  Explore Courses
                </Button>
              </motion.div>
            ) : (
              cart.map((item) => (
                <motion.div
                  key={item.courseId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  layout
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4 relative group"
                >
                  <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                    {item.image ? (
                      <img src={item.image} alt={item.courseName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary font-black uppercase text-2xl">
                        {item.courseName.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-sm font-black text-slate-800 leading-tight line-clamp-2 pr-6">
                        {item.courseName}
                      </h4>
                    </div>
                    
                    <div className="flex items-end justify-between mt-2">
                      <div className="flex flex-col">
                        {item.discountedPrice !== item.price && (
                          <span className="text-xs text-slate-400 line-through font-bold">
                            ₹{item.price.toLocaleString()}
                          </span>
                        )}
                        <span className="text-lg font-black text-primary leading-none">
                          ₹{(item.discountedPrice || item.price).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.courseId)}
                    disabled={loading}
                    className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-slate-200 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm font-bold text-slate-500">
                <span>Subtotal</span>
                <span>₹{calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-slate-500">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="w-full h-px bg-slate-100 my-2" />
              <div className="flex items-center justify-between text-lg">
                <span className="font-black text-slate-800">Total</span>
                <span className="font-black text-slate-900">₹{calculateTotal().toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-black rounded-xl text-[15px] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => clearCart()}
                disabled={loading}
                className="w-full font-bold text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
