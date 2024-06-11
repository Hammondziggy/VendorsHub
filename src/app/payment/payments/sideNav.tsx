import React from 'react';

export const SideNav = () => {
    return (
        <div className='w-56 h-60 card-shadow text-white rounded-sm flex flex-col justify-center items-center'>
            <ul className='space-y-8'> 
                <li>Bank Transfer</li>
                <li>Internet Banking</li>
                <li>Card</li>
            </ul>
        </div>

    );
}