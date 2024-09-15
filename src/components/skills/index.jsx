import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/SEO.jpeg";
import Section from "../shared/section";
import Resume from "../../download/Neeraj.pdf";

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

                        <ul>
                            <h4 className="headingh">Technical SEO:</h4>
                            <li>
                                Structured Data Schema Markup Creation</li>
                            <li>
                                Site Performance & Page Performance Optimization

                            </li>
                            <li>
                                Crawl Errors Handling

                            </li>
                            <li>
                                W3C Compliance Validate

                            </li>

                            <h4 className="headingh"> ON-Page Optimization:</h4>

                            <li>Website Audit Report Creation including Priority List</li>
                            <li>Website Architecture Recommendation</li>
                            <li>URL Structure Recommendation</li>
                            <li>Title-Meta Tag Creation, H1 - H2 Tag Optimization, Anchor Tag Optimization</li>
                            <li>Content Optimization</li>
                            <li>Image Optimization</li>
                            <li>Breadcrumb Optimization</li>
                            <li>Robots.txt & Canonical Tag Optimization</li>
                            <li>HTML Sitemap Recommendation</li>
                            <li>XML Sitemap Recommendation for Web Pages, Images, and Videos Optimization</li>

                            <h4 className="headingh">Analysis & Research:</h4>
                            <li>Competitor Analysis / Back Links Analysis by paid tools such as SEMRush, Majestic SEO & Ahrefs</li>
                            <li>Traffic Analysis (GA & GSC)</li>
                            <li>Keywords Research - Researching the best keywords using tools like Google Keyword Planner and Google Search Suggestions</li>


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
