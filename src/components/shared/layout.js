import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './layout.css';
import Footer from './footer';
import TopNavigation from './topNavigation';
import SlideButton from './utils/SlideButton';
import HoverButton from './utils/HoverButton';
import { ImFacebook } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import FooterStrip from './footerStrip';
import Home from '../home/Home';
import QueryForm from '../home/QueryForm';
import PlanningProject from '../home/PlanningProject';
import AboutPage from '../about/About';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [showScroll, setShowScroll] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <TopNavigation />


            <Outlet />


            <PlanningProject />
            <QueryForm />
            <Footer />

            <button
                className={`scrollToTopBtn ${showScroll ? 'show' : ''}`}
                onClick={scrollTop}
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>
        </>
    )
}

export default Layout