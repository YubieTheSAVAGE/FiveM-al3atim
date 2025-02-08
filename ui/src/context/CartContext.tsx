"use client";
import React, { createContext, useContext, useState } from "react";

interface CartItem {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
    stock: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem, stock: number) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number, stock: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem, stock: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                // Check if the new quantity exceeds the stock limit
                if (existingItem.quantity + 1 > stock) {
                    alert(`Cannot add more than ${stock} items of ${item.title}`);
                    return prevItems;
                }
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            // If the item is not in the cart, add it with a quantity of 1
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: number, quantity: number, stock: number) => {
        setCartItems((prevItems) =>
            prevItems.map((i) => {
                if (i.id === id) {
                    // Check if the new quantity exceeds the stock limit
                    if (quantity > stock) {
                        alert(`Cannot add more than ${stock} items of ${i.title}`);
                        return i;
                    }
                    return { ...i, quantity };
                }
                return i;
            })
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};