

import  { useState } from "react";
import { PiFlowerThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { VscHeart } from "react-icons/vsc";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";
import HeaderEle from "./HeaderEle";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const handleClick = () => setMenu(!menu);

    let menuItem = [
        {
            id: 1,
            name: "SHOP",
        },
        {
            id: 2,
            name: "SKILLS",
        },
        {
            id: 3,
            name: "STORIES",
        },
        {
            id: 4,
            name: "ABOUT",
        },
        {
            id: 5,
            name: "CONTACT US",
        },
    ];

    return (
        <div className="container">
            <div className="header">
                <div
                    onClick={handleClick}
                    className="menu-icon"
                >
                    {menu ? <FaTimes className="fatimes" size={30} /> : <FaBars size={30} />}
                    <PiFlowerThin className="logo-icon" />
                </div>

                <h1 className="logo">Logo</h1>
                <div className="icons">
                    <CiSearch className="search" />
                    <VscHeart className="heart" />
                    <IoBagRemoveOutline className="outline" />
                    <IoPersonOutline className="outline" />
                    <select style={{ border: "none" }}>
                        <option value="eng">ENG</option>
                        <option value="ind">IND</option>
                    </select>
                </div>
            </div>

            <ul className={`menu ${menu ? "show" : ""}`}>
                {menuItem.map((item) => (
                    <li className="menu-item" key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>

            <hr />

            <HeaderEle />
        </div>
    );
};

export default Header;
