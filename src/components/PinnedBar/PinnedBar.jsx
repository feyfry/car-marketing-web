import { useEffect, useState, useCallback } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './Pinnedbar.css';  // Import CSS untuk styling

const Pinned = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setVisible(false); // Hide when scrolling down
        } else {
            setVisible(true);  // Show when scrolling up
        }
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={`pinned-bar ${visible ? 'visible' : 'hidden'}`}>
            <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon instagram" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon facebook" />
                </a>
                <a href="https://wa.me/6288210047775" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="icon whatsapp" />
                </a>
            </div>
        </div>
    );
};

export default Pinned;