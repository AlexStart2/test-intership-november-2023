
import React from 'react';
import './Header.css';
import logo from './Images/logo.jpg';
import { useNavigate } from 'react-router-dom';



function Header() {
    const navigate=useNavigate();

    const HeadElement = 'HeadElement';
    return (
        <>
            <div className='Header'>
                <img src={logo} alt='logo'  className='logo'/>
                <div className='Elements'>
                    <div className={HeadElement} onClick={()=>navigate('/')}>Home</div>
                    <div className={HeadElement} onClick={()=>navigate('/about-us')}>About</div>
                    <div className={HeadElement} onClick={()=>navigate('/contact')}>Contact</div>
                </div>

            </div>
        </>
    );
}

export default Header;
