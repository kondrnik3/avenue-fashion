import React from 'react';
import brandPhoto01 from "../../assets/img/brand_photo01.jpg";
import brandPhoto02 from "../../assets/img/brand_photo02.jpg";
import brandPhoto03 from "../../assets/img/brand_photo03.jpg";
import brandTitle01 from "../../assets/img/brand_title01.png";
import brandTitle02 from "../../assets/img/brand_title02.png";
import brandTitle03 from "../../assets/img/brand_title03.png";

let BrandItems = () => {
    return (
        <div className="header_footer-wrapper">
            <div className="brand_items">
                <div className="brand_item">
                    <img src={brandPhoto01} alt=""/>
                    <div className="brand_item-inner">
                        <div className="brand_item-title">
                            hand designed clothing
                        </div>
                        <div className="brand_item-subtitle">established in 2013, avenue fashion Sed dictum elit vel
                            sapien luctus eras
                        </div>
                        <div className="brand_item-text">
                            Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim
                            consectetur,
                            id
                            condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient
                            montes,
                            nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales
                            nibh
                            suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec
                            pulvinar
                            tempor lorem a pretium justo interdum.
                        </div>
                    </div>
                </div>

                <div className="brand_item right--item">
                    <img src={brandPhoto02} alt=""/>
                    <div className="brand_item-title">
                        hand designed clothing
                    </div>
                    <div className="brand_item-subtitle">established in 2013, avenue fashion Sed dictum elit vel
                        sapien
                        luctus eras
                    </div>
                    <div className="brand_item-text">
                        Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim consectetur,
                        id
                        condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient montes,
                        nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh
                        suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec
                        pulvinar
                        tempor lorem a pretium justo interdum.
                    </div>
                </div>

                <div className="brand_item">
                    <img src={brandPhoto03} alt=""/>
                    <div className="brand_item-title">
                        hand designed clothing
                    </div>
                    <div className="brand_item-subtitle">established in 2013, avenue fashion Sed dictum elit vel
                        sapien
                        luctus eras
                    </div>
                    <div className="brand_item-text">
                        Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim consectetur,
                        id
                        condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient montes,
                        nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh
                        suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec
                        pulvinar
                        tempor lorem a pretium justo interdum.
                    </div>
                </div>
                <div className="brand_item_titles">
                    <img src={brandTitle01} alt=""/>
                    <img src={brandTitle02} alt=""/>
                    <img src={brandTitle03} alt=""/>

                </div>
            </div>
        </div>
    );
}
export default BrandItems