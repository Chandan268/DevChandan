import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

import thumb1 from "../../images/portfolio/project1.png";
import thumb2 from "../../images/portfolio/project2.jpg";
import thumb3 from "../../images/portfolio/project3.png";


const projectsData = [
    {
        id: 1,
        name: "INNOTIME",
        tags: ["mobile-app"],
        media: {
            thumbnail: thumb2,
        },
        link: "https://example.com/innotime", // Add project link
    },
    {
        id: 2,
        name: "INNOBT",
        tags: ["web-app"],
        media: {
            thumbnail: thumb1,
        },
        link: "https://example.com/innobt", // Add project link
    },
    {
        id: 3,
        name: "SUDS-2-U",
        tags: ["mobile-app"],
        media: {
            thumbnail: thumb3,
        },
        link: "https://play.google.com/store/apps/details?id=com.suds_2_u_new", // Add project link
    },
];



const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
