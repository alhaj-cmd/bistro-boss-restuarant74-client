// import React from 'react';

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular")
                setMenu(popularItems);
            })
    }, [])
    return (
        <div className="mb-8">
            <SectionTitle
                heading="From Our Menu"
                subHeading="popular Itmes"
            >

            </SectionTitle>

         <div className="grid md:grid-cols-2  gap-8">
         {
                menu.map(item =>
                    <MenuItem
                        key={item.id}
                        item={item}
                    ></MenuItem>)
            }
         </div>
           <div className="text-center">
           <button className="btn btn-outline border-0  border-b-4 mt-4">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;