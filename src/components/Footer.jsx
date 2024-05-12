

// import React from 'react';
import "./footer.css"
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RxRadiobutton } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePay, FaCcMastercard, FaCcPaypal, FaCcAmex, FaApplePay } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <div className="subscribe-section">
                    <h1>BE THE FIRST TO KNOW</h1>
                    <p>Sign Up for updates from Meta & muse</p>
                    <input placeholder="Enter Your Email" />
                    <button style={{ border:"none",}}>SUBSCRIBE</button>
                </div>
                <div className="contact-section">
                    <div>
                        <h1>CONTACT US</h1>
                        <p>+44211335360</p>
                        <p>customercare@mettamuse.com</p>
                    </div>
                    <div>
                        <h1>CURRENCY</h1>
                        <div className="usd">
                            <LiaFlagUsaSolid />
                            <p>*USD</p>
                        </div>
                        <p>Sign Up for updates from Meta & museSign Up for updates from Meta & muse</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="meta-muse-section">
                    <h1>Meta Muse</h1>
                    <p>About Us</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliance Docs</p>
                </div>
                <div className="quick-links-section">
                    <h1>Quick Links</h1>
                    <p>Orders & Shipping</p>
                    <p>Join/Login As A Seller</p>
                    <p>Payments & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQS</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="follow-us-section">
                    <h1>FOLLOW US</h1>
                    <div>
                        <button><RxRadiobutton /></button>
                        <button><FaLinkedin /></button>
                    </div>
                    <h1>Meta muse Accepts</h1>
                    <div>
                        <button><FaGooglePay /></button>
                        <button><FaCcMastercard /></button>
                        <button><FaCcPaypal /></button>
                        <button><FaCcAmex /></button>
                        <button><FaApplePay /></button>
                        <button><MdOutlinePayment /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;


