import React from 'react';
import Signup from './Signup';

const UserSignup = () => {
    return (
        <div className="w-full h-screen relative">
            <img 
                src="/images/outerEllipse.png" 
                alt="Outer Ellipse" 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }} 
            /> 
            <img 
                src="/images/innerEllipse.png" 
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
            <Signup logo="VendorsHub" title="Create an Account" />         
        </div>
    );
}

export default UserSignup;
