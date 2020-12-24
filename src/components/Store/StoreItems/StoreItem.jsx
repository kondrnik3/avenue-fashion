import React from 'react';
import photoStore01 from "../../assets/img/store_photo01.jpg";
import photoStore03 from "../../assets/img/store_photo03.jpg";

import cart from '../../assets/img/store-cart.svg'
import heart from '../../assets/img/store-heart.svg'
import info from '../../assets/img/store-info.svg'

let StoreItem = () => {
    return (
        <>
            <div className="store_items-inner">
                <div className="store_item">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore01} alt=""/>

                    </div>
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
                </div>

                <div className="store_item">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore01} alt=""/>

                    </div>
                    <div className="store_item-block-popup">a</div>
                </div>

                <div className="store_item big--item">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore03} alt=""/>

                    </div>
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
                </div>

            </div>
            <div className="store_items-inner">
                <div className="store_item big--item-1">
                    <div className="store_item-block">
                        <div className="store_item-block-price "><sup>£</sup>89.99</div>
                        <img src={photoStore03} alt=""/>

                    </div>
                    <div className="store_item-block-popup">a</div>
                </div>

                <div className="store_item">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore01} alt=""/>

                    </div>
                    <div className="store_item-block-popup">a</div>
                </div>

                <div className="store_item ">
                    <div className="store_item-block">
                        <div className="store_item-block-price"><sup>£</sup>89.99</div>
                        <img src={photoStore01} alt=""/>

                    </div>
                    <div className="store_item-block-popup">a</div>
                </div>

            </div>


        </>
    );
}
export default StoreItem;