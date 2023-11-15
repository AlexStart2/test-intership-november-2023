
import React from 'react';
import './Footer.css';



function Footer() {

    let a="{{";
    let b="}}";

    return (
        <>
            <div className='Footer'>
                <div className='FootElement'>Created by: {a}Gheorghiu Alexandru{b}</div>
                <div className='FootElement'>Intership 2023</div>
            </div>
        </>
    );
}

export default Footer;
