import React from 'react';
import styled from 'styled-components'
import lookBookbgr01 from '../../../assets/img/look-book-bgr01.jpg'
import lookBookbgr02 from '../../../assets/img/look-book-bgr02.jpg'


const ItemBlock = styled.div`
  width: ${props => props.big ? "1320px" : "870px"};
  height: 500px ;
  background-image: ${props => props.big ? `url(${lookBookbgr02})` : `url(${lookBookbgr01})`};
  margin-top:25px;
  margin-right: 15px
 
  
`;

let LookBookItem = ({big}) => {
    return (
        <ItemBlock big={big}>
            <div className="lookbook-block">
                <div className="item-title">
                    <span>Jane’s</span> lookbook
                </div>
                <div className="item-subtitle">
                    get the look for under £200!
                </div>
                <div className="item-text">
                    We invited actress Jane Marshall to join us
                    for the day and choose her perfect outfit from
                    our vast range of womens fashion.

                    <span>This is of course not true as this is just a design
                        for a website and this is simply filler text.</span>
                </div>
                <div className="item-button button"><a href="#">View Now</a></div>
            </div>
        </ItemBlock>
    );
}

export default LookBookItem