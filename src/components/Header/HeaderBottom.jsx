import React from 'react'
import {Link} from "react-router-dom";

let HeaderBottom = () => {
    return (
        <div className="header_bottom">
            <div className="header_bottom-title">
                <Link to="/"><span>Avenue</span> Fashion</Link>
            </div>
            <div className="header_bottom-nav">
                <div className="header_bottom-link"><a href="#">men's</a></div>
                <div className="header_bottom-link"><a href="#">women's</a></div>
                <div className="header_bottom-link"><a href="#">the brand</a></div>
                <div className="header_bottom-link"><a href="#">look book</a></div>
            </div>
            <div className="header_bottom-button button">
                <a href="#">shop men's collection</a>
            </div>
        </div>
    );
}

export default HeaderBottom;