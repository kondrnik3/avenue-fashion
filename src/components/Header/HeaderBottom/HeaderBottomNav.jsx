import React from "react";
import {Link} from "react-router-dom";

let HeaderBottomNav = () => {
    return (
        <div className="header_bottom-nav">
            <div className="header_bottom-link active--item"><Link to="/">men's</Link></div>
            <div className="header_bottom-link"><Link  to="/">women's</Link ></div>
            <div className="header_bottom-link"><Link to="/brand" href="#">the brand</Link ></div>
            <div className="header_bottom-link"><Link to="/lookbook">look book</Link></div>
        </div>
    );
}

export default HeaderBottomNav