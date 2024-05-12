


import  { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";
import Footer from "./Footer";
import "./sidebar.css";

const Sidebar = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [arrow, setArrow] = useState(false);

    const handleArrow = () => setArrow(!arrow);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const products = await response.json();
                setData(products);
                // Extract categories from products
                const uniqueCategories = [...new Set(products.map((product) => product.category))];
                setCategories(uniqueCategories);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);

        
    };

    const filteredData = selectedCategory ? data.filter((product) => product.category === selectedCategory) : data;

    
    const updateCheckbox = (i) => {
      let   updateCategory = [...categories]
        updateCategory(i)
}

    return (
        <div className="sidebar-container">
            <div className="visible">
            <div className="product">

                <div className="sidebar-menu">
                    
                    <div className="menu-section">
                        <div className="section-header">
                            <input type="checkbox" />
                            <p>CATEGORY</p>
                        </div>
                        <hr />
                        <div className="content">
                            {categories.map((category, index) => (
                                <div key={index} className="categories" onClick={() => filterByCategory(category)}>
                                    <input type="checkbox" onChange={() => updateCheckbox(index)} />
                                    <p>{category}</p>
                                </div>
                            ))}
                        </div>

                        <hr/>
                        <div className="section-content">
                            <div className="arrow-section" onClick={handleArrow}>
                                <p>IDEAL FOR</p>
                                {arrow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                            {arrow && (
                                <div className="sub-categories">
                                    <div className="sub-category">
                                        <input type="checkbox" />
                                        <p>Men</p>
                                    </div>
                                    <div className="sub-category">
                                        <input type="checkbox" />
                                        <p>Women</p>
                                    </div>
                                    <div className="sub-category">
                                        <input type="checkbox" />
                                        <p>Children</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <hr />

                        <div >
                            <div style={{ display: "flex", gap: "100px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                                <p>OCCASION</p>
                                {<MdKeyboardArrowDown />}
                            </div>
                            <p>All</p>
                            <hr style={{ width: "200px" }} />


                            <div style={{ display: "flex", gap: "135px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                                <p>WORK</p>
                                {<MdKeyboardArrowDown />}
                            </div>
                            <p>All</p>
                            <hr style={{ width: "200px" }} />


                            <div style={{ display: "flex", gap: "125px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                                <p>FABRIC</p>
                                {<MdKeyboardArrowDown />}
                            </div>
                            <p>All</p>
                            <hr style={{ width: "200px" }} />


                            <div style={{ display: "flex", gap: "110px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                                <p>SEGMENT</p>
                                {<MdKeyboardArrowDown />}
                            </div>
                            <p>All</p>
                            <hr style={{ width: "200px" }} />


                            <div style={{ display: "flex", gap: "75px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                                <p>SUITABLE FOR</p>
                                {<MdKeyboardArrowDown />}
                            </div>
                            <p>All</p>
                            <hr style={{ width: "200px" }} />

                            <div style={{ display: "flex", gap: "60px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                                <p>RAW MATERIALS</p>
                                {<MdKeyboardArrowDown />}
                            </div>
                            <p>All</p>
                            <hr style={{ width: "200px" }} />


                            <div style={{ display: "flex", gap: "110px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                                <p>PATTERN</p>
                                {<MdKeyboardArrowDown />}
                            </div>
                            <p>All</p>
                            <hr style={{ width: "200px" }} />
                        </div>

                    </div>
                        <hr />
                    </div>
                

            <div className="product-grid">
                {filteredData.map((item, id) => (
                    <div key={id} className="product-item">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <div className="price-section">
                            <p>{item.price}</p>
                            <VscHeart />
                        </div>
                    </div>
                ))}
                </div>
                </div>
            <Footer />
            </div>
            </div>
    );
};

export default Sidebar ;





