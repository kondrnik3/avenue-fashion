import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottomHome from "./HeaderBottom/HeaderBottomHome";

let HeaderHome = () => {
    return (
        <header className="header">
            <HeaderTop/>
            <div className="inner">
                <div className="wrapper">
                    <HeaderBottomHome/>
                </div>
            </div>
        </header>
    );
}

export default HeaderHome