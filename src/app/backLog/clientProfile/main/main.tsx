"use client";

import React from "react";
import { Dashboard } from "./dashboard";
import { Wallet } from "./modalWallet/wallet";
import { Nav } from "./nav";
import { PaymentHistory } from "./paymentHistory";
import { Profile } from "./profile";

interface MainProps {
    showModal: boolean;
    setShowModal: (state: boolean) => void;
};

export const Main: React.FC<MainProps> = ({showModal, setShowModal}) => {
    return (
        <div className="main w-screen pt-6 px-3 md:px-10 md:w-[calc(100vw-310px)]">
            <Nav />
            <Profile />
            <Dashboard />
            <PaymentHistory />
            {showModal && <Wallet setShowModal={setShowModal} />}
        </div>
    );
};