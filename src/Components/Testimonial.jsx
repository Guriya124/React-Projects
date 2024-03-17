import React from 'react'
import Slider from "react-slick";
import People from '../assets/person.jpg';
import Image from './Image'
import { RiDoubleQuotesR } from 'react-icons/ri';


const TESTIMONIAL = [
    {
        title: 'John Doe',
        profession: 'Director at XYZ',
        URL: People,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque. Lorem ipsum dolor sit  elit. Aperiam, itaque.'
    },
    {
        title: 'John Doe',
        profession: 'Director at XYZ',
        URL: People,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque. Lorem ipsum dolor sit  elit. Aperiam, itaque.'
    },
    {
        title: 'John Doe',
        profession: 'Director at XYZ',
        URL: People,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque. Lorem ipsum dolor sit  elit. Aperiam, itaque.'
    },
    {
        title: 'John Doe',
        profession: 'Director at XYZ',
        URL: People,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque. Lorem ipsum dolor sit  elit. Aperiam, itaque.'
    },
    {
        title: 'John Doe',
        profession: 'Director at XYZ',
        URL: People,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque. Lorem ipsum dolor sit  elit. Aperiam, itaque.'
    },
    {
        title: 'John Doe',
        profession: 'Director at XYZ',
        URL: People,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque. Lorem ipsum dolor sit  elit. Aperiam, itaque.'
    },

]

export default function Testimonial() {


    var settings = {
        // dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
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

    const TestimonialItem = ({ title, profession, URL, des }) => {
        return (
            <>
                <div className=' slickSlider items-center  '>
                    <figure className="flex flex-col items-center justify-center p-8 text-center  border border-gray-200 rounded-lg shadow-sm md:grid-cols-2 bg-white ">
                        <figcaption className="flex flex-col items-center justify-center relative rounded-md z-10">
                            <span className="text-9xl text-slate-100 absolute -top-5 -right-5 z-[-10] "><RiDoubleQuotesR /></span>
                            <blockquote className="max-w-2xl mx-auto  text-gray-500">
                                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                <p className="my-4">{des}</p>
                            </blockquote>
                        </figcaption>
                        <figcaption className="flex items-center justify-center">
                            <Image className='rounded-full w-9 h-9' src={URL} alt="profile picture" height={55} width={55} />
                            <div className=" font-medium text-left ms-3">
                                <div>{title}</div>
                                <div className="text-sm text-gray-500">{profession}</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </>
        )
    }
    return (
        <>
            <section className='containe mx-auto pt-16 bg-[#FAFAFA] mt-5 mb-5'>
                <h3 className='text-4xl font-extrabold text-center'>Testimonial</h3>
                <p className='text-center max-w-lg m-auto text-gray-500 py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, itaque.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, itaque.t amet consectetur adipisicing elit. Aperiam, itaque
                </p>
                <div className=''>
                    <Slider {...settings}>

                        {
                            TESTIMONIAL.map((testimonial) => (
                                <TestimonialItem
                                    key={testimonial.title}
                                    title={testimonial.title}
                                    profession={testimonial.profession}
                                    URL={testimonial.URL}
                                    des={testimonial.des}

                                />
                            ))
                        }
                    </Slider>
                </div>
            </section>

        </>
    )
}
