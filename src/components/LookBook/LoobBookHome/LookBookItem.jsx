import React from 'react';
import lookBook01 from "../../../assets/img/look-book01.jpg";
import lookBook02 from "../../../assets/img/look-book02.jpg";
import lookBook03 from "../../../assets/img/look-book03.jpg";

let LookBookItem = () => {
    return (
        <>
            <div className="look_book-item">
                <div className="look_book-item_block">
                    <img src={lookBook01} alt=""/>
                    <div className="look_book-item_block-inner">
                        <div className="look_book-item_block-title">
                            <span>Men's</span> LookBook
                        </div>
                        <div className="look_book-item_block-text">
                            Lorem ipsum dolor sit amet eras facilisis
                            consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
                            Elementum metus facilisis ut phasellu.

                        </div>
                        <div className="look_book-item_block-button button">
                            <a href="#">view now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="look_book-item">
                <div className="look_book-item_block">
                    <img src={lookBook02} alt=""/>
                    <div className="look_book-item_block-inner">
                        <div className="look_book-item_block-title">
                            <span>Women's</span> LookBook
                        </div>
                        <div className="look_book-item_block-text">
                            Lorem ipsum dolor sit amet eras facilisis
                            consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
                            Elementum metus facilisis ut phasellu.

                        </div>
                        <div className="look_book-item_block-button button">
                            <a href="#">view now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="look_book-item">
                <div className="look_book-item_block">
                    <img src={lookBook03} alt=""/>
                    <div className="look_book-item_block-inner">
                        <div className="look_book-item_block-title">
                            <span>Your</span> LookBook
                        </div>
                        <div className="look_book-item_block-text">
                            See an item you like and click the  button to add it to your lookbook where you can create your own perfect look.
                            It’s like your own boutique!

                        </div>
                        <div className="look_book-item_block-button button">
                            <a href="#">view now</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}
export default LookBookItem;