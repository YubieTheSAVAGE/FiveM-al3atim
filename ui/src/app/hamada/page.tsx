import React from "react";
import Card from "@/components/Card";
import { Card as CardType } from "@/types/Card";

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
        <div className="h-screen pt-[15vh] bgimg ">
            <div className="flex justify-between bg-white bg-opacity-40 w-[70vw] m-auto h-[70vh] p-4 rounded-lg">
                <section className="bg-[#EEEEEE] bg-opacity-80 w-1/3 h-full rounded-tr-[80px] rounded-bl-[80px]">
                
                </section>
                <section className="grid grid-cols-4 gap-4 overflow-y-auto no-scrollbar">
                    {cards.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </section>
            </div>
        </div>
    );
}