import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/pic6.jpg';
import { Link } from "react-router-dom"
import { RiSearchLine } from 'react-icons/ri';

export default function Feature() {

    const FeatureItem = ({ title, url, des }) => {
        return (
            <div className='mx-3 overflow-hidden border border-slate-200 group items-center'>
                <div className='overflow-hidden relative'>
                    <img src={url} alt=""
                        height={600}
                        width={510}
                        className='hover:scale-105 hover:rotate-2 transition-all duration-700 cursor-pointer'
                    />
                    <Link href="/" className="absolute top-1/2 left-1/2 h-14 w-14  flex flex-wrap items-center text-center rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500"><RiSearchLine /></Link>
                </div>
                <div className='text-center py-3 px-5'>
                    <h3 className='capitalizer text-[17px]'>{title}</h3>
                    <p className='text-gray text-[15px] my-2'>{des}</p>
                    {/* <button className='bg-[#E4575C] text-white rounded-lg px-4 py-2'>More Package</button> */}
                </div>
            </div>
        )
    }


    var settings = {
        // dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]



    };

    const feature = [
        {
            title: 'Title-1',
            url: pic1,
            des: 'lorem lipsum dolor sit amet',
        },
        {
            title: 'Title-2',
            url: pic1,
            des: 'lorem lipsum dolor sit amet',
        },
        {
            title: 'Title-3',
            url: pic1,
            des: 'lorem lipsum dolor sit amet',
        },
        {
            title: 'Title-4',
            url: pic1,
            des: 'lorem lipsum dolor sit amet',
        },
    ]
    return (
        <section className='max-container padding-container bg-slate-10 py-12'>
            <div className='m-auto w-[90%]'>
                <h3 className='text-2xl font-extrabold text-center'>Featured Desitinations</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, itaque.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, itaque.
                </p>
                <div className='pt-16'>
                    <Slider {...settings}>
                        {
                            feature.map((feature) => (
                                <FeatureItem
                                    key={feature.title}
                                    url={feature.url}
                                    des={feature.des}
                                    title={feature.title}
                                />
                            ))
                        }

                    </Slider>
                </div>
            </div>


        </section>
    )

}
