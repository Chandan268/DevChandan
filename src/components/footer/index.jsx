import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <h3 style={{ color: "white", fontWeight: "bold" }}>Neeraj Sharma</h3>

                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>

                    <li
                        className="footer-menu-item"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    {/* <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://www.youtube.com/@studyfact17/"
                    /> */}

                    {/* <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/Chandan268/"
                    /> */}
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/neeraj-msharma/"
                    />
                    {/* <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                    /> */}
                    {/* <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                    /> */}
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright {new Date().getFullYear()} | All Rights Reserved
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default Footer;
