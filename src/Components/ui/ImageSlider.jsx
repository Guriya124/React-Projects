import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../../assets/pic1.webp';
import pic2 from '../../assets/pic2.webp';
import pic3 from '../../assets/pic6.jpg';

export default function ImageSlider() {
    const sliderRef = useRef(null);
    const images = [
        pic1,
        pic2,
        pic3,
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: []
    };

    return (
        <>
            <div className="slider-container" style={{ paddingTop: '15px', maxWidth: '100vw', overflowX: 'hidden' }}>
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <div key={index} className="relative flex justify-center items-center">
                            <img src={image} className='w-full h-screen object-cover' alt={`slide ${index}`} />
                            <div className='absolute inset-0 bg-black opacity-70 max-w-full'></div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>

    );
}
