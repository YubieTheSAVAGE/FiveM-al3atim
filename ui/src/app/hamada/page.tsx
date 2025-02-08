"use client";
import React from "react";
import Card from "@/components/Card";
import BasketCard from "@/components/BasketCard";
import { Card as CardType } from "@/types/Card";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

console.log("useCart imported:", useCart); // Debugging log


const cards: CardType[] = [
    {
        id: 1,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00    
    },
    {
        id: 2,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00
    },
    {
        id: 3,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00
    },
    {
        id: 4,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00
    },
    {
        id: 5,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00
    },
    {
        id: 6,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00
    },
    {
        id: 7,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00
    },
    {
        id: 8,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00
    },
    {
        id: 9,
        image: "/coce.png",
        title: "كاس كوكا باريد",
        stock: 10,
        experience: 10,
        oldPrice: 120.00,
        price: 99.00
    },
];

export default function Hamada() {
    const { cartItems } = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="h-screen pt-[20vh] bgimg bg-cover bg-center ">
            <div className="flex bg-white bg-opacity-30 backdrop-blur-lg w-[70vw] h-[60vh] mx-auto rounded-lg rounded-bl-[60px] shadow-2xl overflow-hidden">
                <aside className="w-2/5 bg-[#EEEEEE] bg-opacity-90 p-4 flex flex-col justify-between rounded-tr-[60px] rounded-bl-[60px] m-3">
                    <div className="flex items-center justify-center mb-4">
                        <svg width={24} height={24} fill="#000000" viewBox="0 0 512 512" enable-background="new 0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_1"></g> <g id="Layer_2"> <g> <path d="M423.9,232.9c0-12.8-10.4-23.2-23.2-23.2h-20.1c-0.5-1.1-1-2.2-1.7-3.2l-45.8-71.3c-3.3-5.1-8.4-8.7-14.3-10 c-6-1.3-12-0.2-17.2,3.1c-10.6,6.8-13.6,20.9-6.8,31.5l32,49.8H185.3l32-49.8c2.4-3.7,3.6-7.9,3.6-12.3c0-7.8-3.9-15-10.5-19.2 c-5.1-3.3-11.2-4.4-17.2-3.1c-5.9,1.3-11,4.8-14.3,10l-45.8,71.3c-0.7,1-1.2,2.1-1.7,3.2h-20.1c-12.8,0-23.2,10.4-23.2,23.2v1.5 c0,12.8,10.4,23.2,23.2,23.2h2.2l38.1,124.3c1,3.2,3.9,5.3,7.2,5.3h194.2c3.3,0,6.2-2.2,7.2-5.3l38.1-124.3h2.2 c12.8,0,23.2-10.4,23.2-23.2V232.9z M307.3,151.8c-2.3-3.6-1.3-8.4,2.3-10.8c1.8-1.1,3.8-1.5,5.9-1.1c2,0.4,3.8,1.6,4.9,3.4 l42.6,66.3h-18.5L307.3,151.8z M191.6,143.3c1.1-1.8,2.9-3,4.9-3.4c2-0.4,4.1-0.1,5.9,1.1c2.2,1.4,3.6,3.9,3.6,6.6 c0,1.5-0.4,2.9-1.2,4.2l-37.2,57.9h-18.5L191.6,143.3z M347.6,372.2H164.4l-35.2-114.6h253.5L347.6,372.2z M408.9,234.4 c0,4.5-3.7,8.2-8.2,8.2h-7.7c0,0-0.1,0-0.1,0H119.2c0,0-0.1,0-0.1,0h-7.7c-4.5,0-8.2-3.7-8.2-8.2v-1.5c0-4.5,3.7-8.2,8.2-8.2H137 c0,0,0.1,0,0.1,0h34.4c0,0,0,0,0,0c0,0,0,0,0,0h168.8c0,0,0,0,0,0c0,0,0,0,0,0h34.4c0,0,0,0,0.1,0h25.7c4.5,0,8.2,3.7,8.2,8.2 V234.4z"></path> <path d="M208.9,342.8c4.1,0,7.5-3.4,7.5-7.5v-40.8c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5v40.8 C201.4,339.5,204.8,342.8,208.9,342.8z"></path> <path d="M256,342.8c4.1,0,7.5-3.4,7.5-7.5v-40.8c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5v40.8C248.5,339.5,251.9,342.8,256,342.8z "></path> <path d="M303.1,342.8c4.1,0,7.5-3.4,7.5-7.5v-40.8c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5v40.8 C295.6,339.5,298.9,342.8,303.1,342.8z"></path> </g> </g> </g></svg>
                        <h2 className="text-xl font-bold">السلة</h2>
                    </div>
                    <ul className="flex-1 overflow-y-auto no-scrollbar space-y-1">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <BasketCard key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} quantity={item.quantity} stock={item.stock}/>
                            ))
                        ) : (
                            <li className="text-center text-gray-500">السلة فارغة</li>
                        )}
                    </ul>
        
                    <div className="mt-4 p-2 rounded-lg flex justify-between items-center">
                        <div className="flex flex-col space-y-0 text-center">
                            <span className="font-normal text-xs">إجمالي الفاتورة</span>
                            <span className="text-2xl font-extrabold">{totalPrice}sr</span>
                        </div>
                        <button className="w-24 py-2 flex flex-row justify-center items-center space-x-1 bg-black text-white rounded-full hover:shadow-xl transition">
                            <span>
                                دفع
                            </span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </aside>
                <div className="w-full flex flex-col">
                    <header className="">
                        <Image
                            src="/othaim.svg"
                            width={1000}
                            height={500}
                            alt="Othaim Logo"
                            className="mx-auto w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1400px] 2xl:max-w-[1920px] h-auto"
                        />
                        <h1 className="font-extrabold text-xl text-center 2xl:text-md">متجر اسماعيل الزامل</h1>
                    </header> 
                    <span className="w-full h-0.5 mt-2 bg-gradient-to-r from-transparent via-red-700 to-transparent"></span> 
                        {cards.length > 0 ? (
                            <main className="flex-1 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto no-scrollbar">
                                {cards.map((card) => (
                                    <Card key={card.id} {...card} />
                                ))}
                            </main> 
                        ) : (
                            <h3 className="text-center text-black h-full mt-[20vh]">متجر فارغ</h3>
                        )}
                        
                </div>
            </div>
        </div>
    );
}