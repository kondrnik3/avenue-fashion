import React from 'react'
import HeaderBottomButton from "./HeaderBottomButton";
import HeaderBottomTitle from "./HeaderBottomTitle";
import HeaderBottomNav from "./HeaderBottomNav";


let HeaderBottomHome = () => {
    return (
        <div className="header_bottom">
          <HeaderBottomTitle/>
           <HeaderBottomNav/>
            <HeaderBottomButton/>
        </div>
    );
}

export default HeaderBottomHome;