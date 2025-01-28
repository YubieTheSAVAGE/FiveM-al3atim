import React from "react";
import Image from "next/image";

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
    return (
        <div className="w-[220px] h-[280px] space-y-2 rounded-lg shadow-2xl p-2 bg-white">
            <div className="h-3/5 flex items-center justify-center relative">
                <Image
                    src="/coce.png"
                    width={100}
                    height={100}
                    alt="coca cola"
                />
                <Image
                    src="/piece.png"
                    width={30}
                    height={30}
                    alt="piece"
                    className="bottom-0 right-0 absolute"
                />
            </div>
            <div className="h-0.5 w-9/12 m-auto bg-gradient-to-r from-white via-red-700 to-white"></div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-sm font-extrabold">كاس كوكا باريد</h1>
                    <p className="text-xs font-medium">المخزون : 10</p>
                    <p className="text-xs font-medium">الخبرة : 10</p>
                </div>
                <div className="text-right font-bold text-white flex flex-col items-end">
                    <div className="text-xs bg-[#95BF3B] py-0.5 rounded-tr-xl rounded-bl-xl w-min relative">
                        <span className="border border-[#F21D2F] absolute h-7 rotate-[60deg] right-1/2 -top-1"></span>
                        120.<span className="text-[8px]">00</span>
                    </div>
                    <div className="bg-[#F21D2F] rounded-tl-xl rounded-br-xl text-xl leading-none py-0.5 px-1">
                        <p className="text-[6px]">SR ريال</p>
                        99.00
                    </div>
                </div>
            </div>
            <button className="w-full rounded-full bg-[#95BF3B] font-bold text-xs p-1 hover:bg-[#8ab137] duration-75">شراء</button>
        </div>
    );
}

export default Card;