'use client';

import React, { useState } from 'react';
import BankTransfer from './bankTransfer/page'; 
import ComingSoon from './comingsoon/page';
import { SideNav } from './sideNav';

const PaymentsPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <BankTransfer />;
            case 1:
            case 2:
                return <ComingSoon />; // Render the single "Coming Soon" component for both Internet Banking and Card
            default:
                return <BankTransfer />;
        }
    };

    return (
        <div className='w-[85%] mx-auto my-6 flex'>
            <aside className='w-52'>
                <SideNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </aside>
            <div className='flex-grow'>
                {renderContent()}
            </div>
        </div>
    );
};

export default PaymentsPage;
