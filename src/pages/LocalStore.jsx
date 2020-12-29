import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LocalStoreItems from "../components/LocalStore/LocalStoreItems";

import detailImg from '../assets/img/store-detail.jpg'

import mapMark from '../assets/img/map-marker.svg'
import phone from '../assets/img/phone.svg'
import link from '../assets/img/link.svg'
import mail from '../assets/img/mail.svg'
import clock from '../assets/img/clock.svg'

import facebook from '../assets/img/facebook-logo.png'
import twitter from '../assets/img/twitter-logo.png'
import instagram from '../assets/img/instagram-logo.png'
import telegram from '../assets/img/telegram-logo.png'

let LocalStore = () => {
    return (
        <>
            <Header/>
            <LocalStoreItems/>
            <div className="local_store-details">
                <div className="map">
                    <img src={detailImg} alt=""/>
                </div>
                <div className="details">
                    <div className="title">
                        London
                    </div>
                    <div className="subtitle">
                        180-182 Regent Street, London, W1B 5BT
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum
                        ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis.
                        Aliquam erat volutpat.
                    </div>


                    <ul className="detail-list">
                        <li className="street"><img src={mapMark} alt=""/>180-182 Regent Street, London, W1B 5BT
                        </li>
                        <li className="telephone"><img src={phone} alt=""/> 0123-456-789</li>
                        <li className="website"><img src={link} alt=""/>www.yourwebsite.com</li>
                        <li className="mail"><img src={mail} alt=""/>support@yourwebsite.com</li>
                        <li className="workdays"><img src={clock} alt=""/>Monday-Friday: 9am to 6pm Saturday: 10am to 6pm
                            Sunday: 10am to 2pm
                        </li>
                    </ul>
                    <ul className="link-list">
                        <li><a href="#"><img src={facebook} alt=""/></a></li>
                        <li><a href="#"><img src={twitter} alt=""/></a></li>
                        <li><a href="#"><img src={instagram} alt=""/></a></li>
                        <li><a href="#"><img src={telegram} alt=""/></a></li>
                    </ul>

                </div>
            </div>
            <Footer/>
        </>
    );
}
export default LocalStore;