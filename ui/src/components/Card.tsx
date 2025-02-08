import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface CardProps {
    id: number;
    image: string;
    title: string;
    stock: number;
    experience: number;
    oldPrice: number;
    price: number;
}

const Card: React.FC<CardProps> = ({ id, image, title, stock, experience, oldPrice, price }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, image, title, price, quantity: 1, stock }, stock);
    };

    return (
        <div className="w-full h-auto space-y-2 rounded-lg shadow-lg p-4 bg-white hover:shadow-2xl transition">
            <div className="h-32 flex items-center justify-center relative">
                <Image src={image} width={80} height={80} alt="coca cola" />
                <Image
                    src="/piece.png"
                    width={20}
                    height={20}
                    alt="piece"
                    className="absolute bottom-2 right-2"
                 />
            </div>
            <div className="h-0.5 w-9/12 m-auto bg-gradient-to-r from-white via-red-700 to-white"></div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-sm font-extrabold">{title}</h1>
                    <p className="text-xs font-medium">المخزون : {stock}</p>
                    <p className="text-xs font-medium">الخبرة : {experience}</p>
                </div>
                <div className="text-right font-bold text-white flex flex-col items-end">
                    <div className="text-xs bg-[#95BF3B] py-0.5 rounded-tr-xl rounded-bl-xl w-min relative">
                        <span className="border border-[#F21D2F] absolute h-7 rotate-[60deg] right-1/2 -top-1"></span>
                        {oldPrice}.<span className="text-[8px]">00</span>
                    </div>
                    <div className="bg-[#F21D2F] rounded-tl-xl rounded-br-xl text-xl leading-none py-0.5 px-1">
                        <p className="text-[6px]">SR ريال</p>
                        {price}.00
                    </div>
                </div>
            </div>
            <button className="w-full bg-green-500 text-white font-bold py-1 rounded-lg hover:bg-green-600 transition" onClick={handleAddToCart}>
                شراء
            </button>
        </div>
    );
};

export default Card;