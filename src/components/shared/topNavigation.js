import React, { useEffect, useState } from 'react'
import logo from './../../assets/images/logos/FullLogoTransparent.png';
import { FiArrowRight } from 'react-icons/fi';
import SlideButton from './utils/SlideButton';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const TopNavigation = () => {

  const [scrolling, setScrolling] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <nav className={`topNav ${scrolling ? 'navOnScroll' : ''}`}>
        <div className='nav-container'>
          <div className='topNavPart'>
            <Link to={'/'}>
              <img className='navLogo' src={logo} />
            </Link>
          </div>
          <div className='topNavPart topNavCenter'>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li className='dotLi'><span></span></li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li className='dotLi'><span></span></li>
              <li>
                <Link to={'/services'}>Services</Link>
              </li>
              <li className='dotLi'><span></span></li>
              <li>
                <Link to={'/portfolio'}>Portfolio</Link>
              </li>
              {/* <li className='dotLi'><span></span></li> */}
              {/* <li>
                <Link to={'/pricing'}>Pricing</Link>
              </li> */}
              <li className='dotLi'><span></span></li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='topNavPart topNavRight'>
            <button className="btnMblMenu" onClick={() => setOpenMobileNav(true)}>
              <span>
                <MdOutlineMenu />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <nav className={`mblNav ${openMobileNav ? 'mblNavActive' : ''}`}>
        <div className="mblNavHead">
          <button onClick={() => setOpenMobileNav(false)}>
            <span>
              <IoMdClose />
            </span>
          </button>
        </div>
        <div className="mblNavItemBox">
          <ul>
            <li>
              <Link to={'/'} onClick={() => setOpenMobileNav(false)}>Home</Link>
            </li>
            <li>
              <Link to={'/about'} onClick={() => setOpenMobileNav(false)}>About</Link>
            </li>
            <li>
              <Link to={'/services'} onClick={() => setOpenMobileNav(false)}>Services</Link>
            </li>
            <li>
              <Link to={'/portfolio'} onClick={() => setOpenMobileNav(false)}>Portfolio</Link>
            </li>
            <li>
              <Link to={'/pricing'} onClick={() => setOpenMobileNav(false)}>Pricing</Link>
            </li>
            <li>
              <Link to={'/contact'} onClick={() => setOpenMobileNav(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default TopNavigation