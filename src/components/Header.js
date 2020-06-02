import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const handleClickOutside = e => {
        if (e.target.classList.contains("overlay")) {
            setIsOpenSidebar(false);
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link 
                to="home"
                href="#home"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}>
                    <span className="logo-title"> f.djido </span>
                </Link>
                <div className="header-mobile">
                    <div onClick={() => setIsOpenSidebar(true)}>
                        <FaBars />
                    </div>
                </div>
                {isOpenSidebar && <div className="overlay"></div>}
                <div className={`header-right ${isOpenSidebar ? "sidebar-open" : ""}`}>
                    <ul className="header-nav">
                    <li>
                            <Link
                                to="home"
                                href="#home"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}>
                                Home
                            </Link>
                        </li>
                            <li>
                            <Link
                                to="about"
                                href="#about"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="skills"
                                href="#skills"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projects"
                                href="#projects"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                href="#contact"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
