"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import Cart from "@/components/Cart";

import { products } from "@/data/products";

import { Product } from "@/types/product";
import { CartItem } from "@/types/cartItem";


export default function Home() {

    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {

        const existing = cart.find(
            item => item.id === product.id
        );

        if (existing) {

            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity + 1
                          }
                        : item
                )
            );

            return;
        }

        setCart([
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ]);
    };

    const removeFromCart = (id: number) => {
    setCart(
        cart
            .map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity:
                              item.quantity - 1,
                      }
                    : item
            )
            .filter(
                (item) => item.quantity > 0
            )
    );
};

    const total = cart.reduce(
        (sum, item) =>
            sum +
            item.price * item.quantity,
        0
    );

    const voidCart = () => {
        setCart([]);
    };

    return (
        <main className="h-screen flex bg-white text-black">

            <aside className="w-64 border-r border-[#ECE8E3] bg-[#FFF7F2]">
                <Sidebar />
            </aside>

            <section className="flex-1 overflow-auto">

                <ProductGrid
                    products={products}
                    addToCart={addToCart}
                />

            </section>

            <aside className="w-96 border-l">

                <Cart
                    cart={cart}
                    total={total}
                    voidCart={voidCart}
                    removeFromCart={removeFromCart}
                    
                />

            </aside>

        </main>
    );
}