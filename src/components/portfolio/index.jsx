import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

import thumb1 from "../../images/portfolio/project1.jpg";
import thumb2 from "../../images/portfolio/project2.jpg";
import thumb3 from "../../images/portfolio/project3.jpg";
import thumb4 from "../../images/portfolio/project4.jpg";



const projectsData = [
    {
        id: 1,
        name: "METSLAB.COM",
        tags: ["web-site"],
        media: {
            thumbnail: thumb2,
        },
        link: "https://metslab.com/", 
    },
    {
        id: 2,
        name: "AAADUBAI.COM",
        tags: ["web-site"],
        media: {
            thumbnail: thumb1,
        },
        link: "https://aaadubai.com/",     
    },
    {
        id: 3,
        name: "YACHTEVENTS DUBAI.COM",
        tags: ["web-site"],
        media: {
            thumbnail: thumb3,
        },
        link: "https://yachteventsdubai.com/", // Add project link
    },
    {
        id: 4,
        name: "AKINCO.AE",
        tags: ["web-site"],
        media: {
            thumbnail: thumb4,
        },
        link: "https://akinco.ae/", // Add project link
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
