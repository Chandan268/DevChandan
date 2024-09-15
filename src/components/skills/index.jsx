import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/Chandan Resume Innovative_New.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, NodeJS,"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        As a passionate software developer, I have developed expertise in several
                        key technologies:
                        <ul>
                            <li>JavaScript (React JS, React Native, Node js, MongoDB)</li>
                            <li>Redux Toolkit, Redux</li>
                            <li>HTML5, CSS3, Bootstrap, Material UI, Ant Design</li>
                            <li>PHP (Laravel Framework)</li>
                            <li>MySQL, Database Management</li>
                            <li>API Integration (RESTful)</li>
                            <li>AWS (Cloud Services)</li>
                            <li>Version Control (Git, GitHub, SVN)</li>
                        </ul>
                        With a strong foundation in full-stack development, I am always looking to
                        expand my knowledge and build dynamic, user-friendly applications.
                    </p>


                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
