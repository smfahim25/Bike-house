import React from 'react';
import './ParallaxImg.css'
import { ParallaxBanner } from 'react-scroll-parallax';

const ParallaxImg = (props) => {
    return (
        <div>
            <ParallaxBanner layers={[{ image: props.imgsrc, amount: 0.6 }]}
                style={{ height: props.height }}
            >
                <div>
                    {props.children}
                </div>

            </ParallaxBanner>
        </div>
    );
};

export default ParallaxImg;