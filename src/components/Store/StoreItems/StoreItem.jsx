import React from 'react';
import photoStore01 from "../../../assets/img/store_photo01.jpg";
import photoStore02 from "../../../assets/img/store_photo02.jpg";
import photoStore03 from "../../../assets/img/store_photo03.jpg";
import photoStore04 from "../../../assets/img/store_photo04.jpg";
import photoStore05 from "../../../assets/img/store_photo05.jpg";
import photoStore06 from "../../../assets/img/store_photo06.jpg";


import Popup from "./Popup";

let StoreItem = () => {
    return (
        <>
            <div className="store_items-inner">
                <div className="store_item">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore01} alt=""/>

                    </div>
                   <Popup/>
                </div>

                <div className="store_item">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore02} alt=""/>

                    </div>
                    <Popup/>
                </div>

                <div className="store_item big--item">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore03} alt=""/>

                    </div>
                    <Popup/>
                </div>

            </div>
            <div className="store_items-inner">
                <div className="store_item big--item-1">
                    <div className="store_item-block">
                        <div className="store_item-block-price "><sup>£</sup>89.99</div>
                        <img src={photoStore04} alt=""/>

                    </div>
                    <Popup/>
                </div>

                <div className="store_item">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore06} alt=""/>

                    </div>
                    <Popup/>
                </div>

                <div className="store_item ">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore06} alt=""/>

                    </div>
                    <Popup/>
                </div>

            </div>


        </>
    );
}
export default StoreItem;