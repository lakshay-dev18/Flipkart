// import { createContext, useState, useContext, ReactNode } from 'react';


// export type Product = {
//   id: string | number; 
//   name: string;
//   price: string | number; 
//   // [key: string]: string | number | boolean; 
//   [key: string]: any; 
// }


// interface CartContextType {
//   cartItems: Product[]; 
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string | number) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);


// export const CartProvider = ({ children }: { children: ReactNode }) => {

//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   const removeFromCart = (productId: string | number) => {
//     setCartItems((prevItems) => 
//      prevItems.filter((item) => item.id !== productId)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart , removeFromCart}}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };






import { createContext, useState, useContext, ReactNode } from 'react';

export type Product = {
  id: string | number; 
  name: string;
  price: string | number; 
  images?: string[];
  [key: string]: any; 
}

interface CartContextType {
  cartItems: Product[]; 
  wishlistItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
  toggleWishlist: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: string | number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };


  const toggleWishlist = (product: Product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (exists) {
        return prevItems.filter((item) => item.id !== product.id); 
      }
      return [...prevItems, product]; 
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, wishlistItems, addToCart, removeFromCart, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
