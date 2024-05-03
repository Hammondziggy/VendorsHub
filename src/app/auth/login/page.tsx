import React from 'react';
import OuterEllipse from '../../../../public/images/outerEllipse.png';
import InnerEllipse from '../../../../public/images/innerEllipse.png';
import { Login } from './Login';

const UserLogin = () => {
    return (
        <div className="w-full h-screen relative">
            <img src={OuterEllipse.src} alt="Outer Ellipse" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }} /> 
            <img 
                src={InnerEllipse.src} 
                alt="Inner Ellipse" 
                style={{
                    position: 'absolute',
                    top: '55%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '85%', 
                    maxHeight: '85%',
                }} 
            />
            <Login logo="VendorsHub" title="Sign In" />        
        </div>
    );
}

export default UserLogin;
