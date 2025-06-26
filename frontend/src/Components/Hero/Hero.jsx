import React from 'react'
import { Image } from 'react-bootstrap'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'
import '../Hero/Hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>New</p>
                            <Image src={hand_icon} alt='hand-icon' />
                        </div>
                        <p>Collection</p>
                        <p>For Everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collections</div>
                        <Image src={arrow_icon} alt='arrow-icon' />
                    </div>
                </div>

                <div className="hero-right">
                    <Image src={hero_image} height={'550px'} alt='hero-image' />

                </div>
            </div>
        </>
    )
}

export default Hero
