import React, { useState } from "react";

import "./style.scss";

const filtersData = [
    {
        name: "All",
        id: "all",
    },


    {
        name: "Website",
        id: "web-site",
    },
   
];

const Filters = ({ filterProjects }) => {
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };

    return (
        <ul className="filters-menu-items">
            {filtersData.map((item) => (
                <li
                    key={item.id}
                    className={`filter-menu-item ${active === item.id ? "active" : ""
                        }`}
                    onClick={() => clickHandler(item.id)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Filters;
