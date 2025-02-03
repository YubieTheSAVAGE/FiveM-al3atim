import React from "react";
import Card from "@/components/Card";
import { Card as CardType } from "@/types/Card";
import Image from "next/image";

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
    return (
        <div className="h-screen pt-[20vh] bgimg bg-cover bg-center ">
            <div className="flex bg-white bg-opacity-30 backdrop-blur-lg w-[70vw] h-[60vh] mx-auto rounded-lg shadow-2xl overflow-hidden">
                <aside className="w-1/4 bg-[#EEEEEE] bg-opacity-90 p-4 flex flex-col justify-between">
                    <h2 className="text-xl font-bold text-center mb-4">القائمة</h2>
                    <ul className="flex-1 overflow-y-auto no-scrollbar space-y-2">
                        {cards.map((card) => (
                            <li
                                key={card.id}
                                className="flex items-center justify-between p-2 bg-white rounded-lg shadow hover:bg-gray-200 transition"
                            >
                                <span className="text-sm font-medium">{card.title}</span>
                                <span className="text-sm font-bold text-red-500">{card.price} ريال</span>
                            </li>
                        ))}
                    </ul>
        
                    <div className="mt-4 p-2 bg-gray-100 rounded-lg flex justify-between items-center">
                        <span className="font-bold text-lg">الإجمالي</span>
                        <span className="font-bold text-lg text-green-600">$171</span>
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
                    <main className="flex-1 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto no-scrollbar">
                        {cards.map((card) => (
                            <Card key={card.id} {...card} />
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}