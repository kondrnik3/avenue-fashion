import React from 'react';
import cart from "../../../assets/img/store-cart.svg";
import heart from "../../../assets/img/store-heart.svg";
import info from "../../../assets/img/store-info.svg";

let Popup = () => {
    return (
        <div className="store_item-block-popup">
            <div className="title">
                Womens burnt orange casual tee  £29.95
            </div>
            <div className="description">
                Classic casual t-shirt for women on the move.
                100% cotton.
                A hard-wearing sports t-shirt with microvent technology.
            </div>
            <div className="buttons">
                <button className="active-button"><img src={cart} alt=""/></button>
                <button><img src={heart} alt=""/></button>
                <button><img src={info} alt=""/></button>
            </div>
        </div>
    );
}

export default Popup;