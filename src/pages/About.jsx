import React from 'react'
import { FaHouse, FaHotel } from 'react-icons/fa6';
import { FaMapMarkerAlt } from "react-icons/fa";
import ImageComponent from '../Components/Image'
import pic from '../assets/pic7.png'
import pic2 from '../assets/pic8.jpg'
// import Testimonial from '../Components/Testimonial';



const ABOUT = [
    {
        title: 'Comfortable Stay',
        icon: <FaHouse />,
    },
    {
        title: 'Luxury Hotels',
        icon: <FaHotel />,
    },
    {
        title: 'Popular Places',
        icon: <FaMapMarkerAlt />,
    },
    {
        title: 'Travel Guide',
        icon: <FaMapMarkerAlt />,
    },



]

export default function About() {
    const AboutItem = ({ title, icon }) => {
        return (
            <div className='w-1/2 flex gap-4 mb-4'>
                <p className='mx-2 mt-2 text-amber-700 text-center'> {icon}</p>
                <p className='regular-14 font-semibold text-gray-500'>{title}</p>
            </div>
        )
    }

    return (

        <>

            <section className='container mx-auto py-19 mt-20'>
                <div className='flex flex-col gap-8 lg:flex-row '>
                    {/* Left */}
                    <div className='flex flex-1 flex-col items-start justify-center '>
                        <h1 className='text-4xl  font-extrabold capitalize pb-4'>Join Us In Exploring The Entire World</h1>
                        <p className='text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, obcaecati! Deleniti aliquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendis.
                            aliquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendialiquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendi</p>
                        <p className='text-gray-500 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium, aliquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendi
                            aliquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendi totam?</p>
                        <div className='flex flex-wrap items-center mt-8 '>
                            {
                                ABOUT.map((about) => (
                                    <AboutItem
                                        key={about.title}
                                        title={about.title}
                                        icon={about.icon}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    {/* Right */}
                    <div className='flex flex-1 gap-4 lg:gap-8'>
                        <div>
                            <ImageComponent src={pic} alt={'About Image'}
                                height={444}
                                width={333}
                                className='w-auto rounded-s-lg rounded-r-lg border border-gray-400 mb-20'
                            />
                        </div>
                        <div>
                            <ImageComponent src={pic2} alt={'About Image'}
                                height={444}
                                width={333}
                                className="w-auto rounded-lg border border-gray-400  mt-20"
                            />
                        </div>
                    </div>
                </div>

                {/* second container */}
                <div className='flex flex-col gap-8 lg:flex-row '>

                    {/* Left */}
                    <div className='flex flex-1 gap-4 lg:gap-8'>
                        <div>
                            <ImageComponent src={pic} alt={'About Image'}
                                height={444}
                                width={333}
                                className='w-auto rounded-s-lg rounded-r-lg border border-gray-400 mb-20'
                            />
                        </div>
                        <div>
                            <ImageComponent src={pic2} alt={'About Image'}
                                height={444}
                                width={333}
                                className="w-auto rounded-lg border border-gray-400  mt-20"
                            />
                        </div>
                    </div>

                    {/* Right */}


                    <div className='flex flex-1 flex-col items-start justify-center '>
                        <h1 className='text-4xl  font-extrabold capitalize pb-4'>Join Us In Exploring The Entire World</h1>
                        <p className='text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, obcaecati! Deleniti aliquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendis.
                            aliquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendialiquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendi</p>
                        <p className='text-gray-500 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium, aliquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendi
                            aliquam quisquam, architecto excepturi aut natus odit. Tempora, reiciendi totam?</p>
                        <div className='flex flex-wrap items-center mt-8 '>
                            {
                                ABOUT.map((about) => (
                                    <AboutItem
                                        key={about.title}
                                        title={about.title}
                                        icon={about.icon}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

            </section>


            {/* <Testimonial/> */}
        </>
    )
}