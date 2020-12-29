import React from 'react';
import photoStore01 from "../../../assets/img/store_photo01.jpg";
import photoStore02 from "../../../assets/img/store_photo02.jpg";
import photoStore03 from "../../../assets/img/store_photo03.jpg";
import photoStore04 from "../../../assets/img/store_photo04.jpg";
import photoStore05 from "../../../assets/img/store_photo05.jpg";
import photoStore06 from "../../../assets/img/store_photo06.jpg";


import Popup from "./Popup";

let StoreItemElement = () => {
    return (
        <div className="store_item">
            <div className="store_item-block">
                <div className="store_item-block-price"><sup>£</sup>89.99</div>
                <img src={photoStore01} alt=""/>

            </div>
            <Popup/>
        </div>
    );
}
export default StoreItemElement;