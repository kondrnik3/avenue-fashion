import React from 'react';
import facebookLogo from "../../assets/img/facebook-logo.png";
import twitterLogo from "../../assets/img/twitter-logo.png";
import instagramLogo from "../../assets/img/instagram-logo.png";
import telegramLogo from "../../assets/img/telegram-logo.png";

let FootBlocks = () => {
    return (
        <div className="footer_blocks">

            <a href="#" className="footer_blocks-item">
                <div className="title">award winner</div>
                <div className="subtitle">fashion awards 2016</div>
            </a>
            <div className="footer_blocks-item">
                <a href=""><img src={facebookLogo} alt=""/></a>
                <a href=""><img src={twitterLogo} alt=""/></a>
                <a href=""><img src={instagramLogo} alt=""/></a>
                <a href=""><img src={telegramLogo} alt=""/></a>
            </div>

        </div>
    );
}
export default FootBlocks