// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Logo from '../assets/Logo1.png'
import { NavLink } from 'react-bootstrap';
import { navLinks, navRight } from '../Data/Data';
import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';

const Header = () => {
    const [isNavLinkShowing, setNavLinkShowing] = useState(false);

    if(innerWidth > 1024){
        window.addEventListener('scroll',()=>{
            document.querySelector('.nav-links').classList.add('navLinksHide');
            setNavLinkShowing(false);
        })
    }
    window.addEventListener('scroll',()=>{
        document.querySelector('nav').classList.toggle('navShadow',window.scrollY > 0);
        setNavLinkShowing(false);
    })
    return (
        <>
            <nav>
                <div className="container nav-container">
                    <div className="logo">
                        <img src={Logo} alt="Logo" className='w-100' />
                    </div>
                    <ul className={`nav-links ${isNavLinkShowing ? 'navLinksShow' : 'navLinksHide'}`}>
                        {navLinks.map(({ name, path }, index) => (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <span className="rounded-pill py-2 px-4 btncolor">Sign In</span>
                        </li>
                    </ul>

                    <div className="nav-right">
                        {
                            navRight.managements.map(({ item, index }) => {
                                return (
                                    <a href="" key={index} target='_blank' className='management-icons'>
                                        <i className=''>{item}</i>
                                    </a>
                                )
                            }
                            )
                        }
                        <div className="menu-bar">
                            <button className='menu-button btn btn-border btncolor' onClick={()=>{setNavLinkShowing(!isNavLinkShowing)}}>
                                {
                                    isNavLinkShowing ? <GrClose/> : <VscMenu />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header