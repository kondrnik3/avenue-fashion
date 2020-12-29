import React from 'react'

let HeaderTop = () => {
    return (
        <div className="top_header-inner">
            <div className="header_footer-wrapper">
                <div className="header_top">
                    <div className="header_top-register">
                        <a href="#" className="">Register</a>
                    </div>
                    <div className="header_top-sign">
                        <a href="#" className="">Sing in</a>
                    </div>
                    <div className="header_top-cart">
                        <a href="#">empty</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeaderTop;