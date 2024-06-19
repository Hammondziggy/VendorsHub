"use client";

import React from "react";
import { transactionData } from "../../utils";
import './wallet.css';


interface TransactionProps {
    item: {
      title: string;
      date: string;
      amount: string;
      event?: string;
    };
}

interface WalletProps {
    setShowModal: (state: boolean) => void;
};


export const Wallet: React.FC<WalletProps> = ({setShowModal}) => {

    const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        target.id === 'myModal' && setShowModal(false);
    };

    return (
        <div id="myModal" className={` fixed z-10 py-[50px] left-0 top-0 h-[100%] w-[100%] overflow-y-auto`} onClick={handleOverlayClick}>

            <div className="modal-content text-black w-[90vw] md:w-[50vw] h-[80vh] md:h-[80vh] px-4 md:px-6 pt-7 pb-1 rounded-md overflow-y-auto">
                <div className="head between">
                    <p className="border border-whit mr-4 md:mr-0 py-1 md:py-2 px-2 md:px-4 text-black">austinadebayo@gmail.com</p>
                    <div className="bg-red px-3 rounded-lg cursor-pointer" onClick={() => setShowModal(false)}>
                        <span className=" text-white font-bold text-[23px] md:text-lg" >&times;</span>

                    </div>
                </div>

                <p className='mt-14 mb-2 font-bold text-sm md:text-[1.5rem]'>Balance</p>
                <p className='ml-5 tracking-wider text-secondary font-bold text-md md:text-xl'># 200,000</p>

                <div className="flex space-x-6 mt-7 mb-16 md:mt-10 md:mb-16">
                    <button className='bg-black py-2 px-4 md:py- md:px-8 text-white rounded-md text-sm md:text-4'>Deposit <span className='md:text-md ml-2'>+</span></button>
                    <button className='border border-black py-2 px-4 md:py- md:px-8 text-black rounded-md text-sm md:text-4'>Withdraw <span className='md:text-md ml-2'>-</span></button>
                </div>

                <h3 className='text-secondary text-md md:text-[32px] font-bold'>Transaction History</h3>
                <div className="rounded-t-md bg-black ">
                    {
                        transactionData?.map((item, index) => (
                            <Transaction key={`item-${index}`} item={item}/>
                        ))
                    }
                </div>

                
            </div>
        </div>
    );
};


const Transaction: React.FC<TransactionProps> = ({item}) => {
    const { title, date, amount, event } = item;
    
    return (
        <div className="between text-white border-b-[1px] p-4 md:p-6">
            <div className="flex flex-col">
                <p className='text-[1rem] md:text-[25px]'>{title}</p>
                <p className='text-sm md:text-md text-transparentblack tracking-wider'>{date}</p>
                <p className='text-sm md:text-md text-transparentblack tracking-wider'>{event && event}</p>
            </div>
            <p className="text-[1rem] md:text-[25px]">{amount}</p>
        </div>
    );
};