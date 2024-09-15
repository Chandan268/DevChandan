import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girll.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Chandan kumar</span>
                    </h1>
                    <p className="title">
                        I am a passionate software developer with a strong background in building web and mobile applications. Over the years, I have honed my skills in modern technologies such as React, React Native, Node, and MongoDB, MySQL, crafting efficient and user-friendly solutions. Whether it's developing sleek interfaces or managing complex back-end systems, I am always eager to tackle new challenges in the tech world.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello I am Keniya Andrew"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Development Service</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            {/* <span>4k+</span> */}
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
