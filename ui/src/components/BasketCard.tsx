import React from "react";
import Image from "next/image";

interface BasketCardProps {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
}

const BasketCard: React.FC<BasketCardProps> = ({ id, image, title, price, quantity }) => {
    return (
        <div className="w-full h-auto space-y-1 rounded-tr-2xl rounded-bl-2xl shadow-xl p-1 pl-0 bg-white hover:shadow-2xl transition flex items-center justify-between">
            <div className="flex flex-row justify-start items-center">
                <Image src={image} width={48} height={48} alt="coca cola" />
                <div className="space-y-1 ml-2">
                    <h1 className="text-xs font-extrabold">{title}</h1>
                    <span className="flex items-center space-x-2 text-[10px] font-medium">
                        <p className="bg-[#D9D9D9] py-0.5 w-full text-center">{price} sr</p>
                        <p className="bg-[#D9D9D9] py-0.5 w-6 text-center">x{quantity}</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-1">
                <button className="w-6 h-6 relative bg-[#121223] text-white rounded-[5px] hover:scale-105 transition">
                    <span className="text-sm absolute top-0.5 left-[9px]">+</span>
                </button>
                <button className="w-6 h-6 relative bg-[#121223] text-white rounded-[5px] hover:scale-105 transition">
                    <span className="text-sm absolute top-0.5 left-[9px]">-</span>
                </button>
                <button className="w-6 h-6 relative bg-red-700 text-white rounded-[5px] hover:scale-105 transition">
                    <span className="text-sm absolute top-0.5 left-[9px]">x</span>
                </button>
            </div>
        </div>
    );
}

export default BasketCard;