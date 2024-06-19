"use client";

import {useState} from 'react';
import Footer from '@/components/footer';
import {Sidebar} from './sidebar/sidebar';
import { Main } from './main/main';


const ClientProfile = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="flex">
                <Sidebar setShowModal={setShowModal} />
                <Main showModal={showModal} setShowModal={setShowModal} />
            </div>
            <Footer />
        </>
    );
};

export default ClientProfile;
