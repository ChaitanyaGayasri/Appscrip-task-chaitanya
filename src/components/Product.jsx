


//import React from 'react'
import "./product.css"
import { MdKeyboardArrowLeft } from "react-icons/md";
import Sidebar from "./Sidebar";

const Product = () => {
    return (
        <div className="product-container">
            <div className="product-header">
                <hr />
                <div className="header-content">
                    <div className="header-left">
                        <p className="number">3245 Items</p>
                        <div className="hide-filter">
                            <MdKeyboardArrowLeft />
                            <h1>Hide Filter</h1>
                        </div>
                    </div>
                    <select className="select-box">
                        <option style={{ color: "black", fontWeight: "bold" }}>Recommended</option>
                        <option>New First</option>
                        <option>Popular</option>
                        <option>Price: High To Low</option>
                        <option>Price: Low to High</option>
                    </select>
                </div>
                <hr />
            </div>
            <Sidebar  />
        </div>
    )
}

export default Product;

