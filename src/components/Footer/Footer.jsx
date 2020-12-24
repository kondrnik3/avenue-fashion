import React from 'react';
import facebookLogo from "../../assets/img/facebook-logo.png";
import twitterLogo from "../../assets/img/twitter-logo.png";
import instagramLogo from "../../assets/img/instagram-logo.png";
import telegramLogo from "../../assets/img/telegram-logo.png";
import FooterInfo from "./FooterInfo";
import FootBlocks from "./FooterBlocks";
import FotterBottom from "./FooterBottom";

let Footer = () => {
    return (
        <footer className="footer">
            <div className="header_footer-wrapper">
                <FooterInfo/>
                <FootBlocks/>
            </div>
            <FotterBottom/>
        </footer>
    );
}
export default Footer