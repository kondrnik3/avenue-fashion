import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

let Header = () => {
    return (
        <header className="header">
            <HeaderTop/>
            <div className="inner">
                <div className="wrapper">
                    <HeaderBottom/>
                </div>
            </div>
        </header>
    );
}

export default Header