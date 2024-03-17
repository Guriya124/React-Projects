import React from 'react';
import Image from './Image';
import Img from '../assets/pic11.jpg';
import { Link } from "react-router-dom";
import { RiSearchLine, RiTimeLine } from 'react-icons/ri';

// import Img from '../assets/pic11.webp'

const Package = [
    {
        id: '1',
        title: 'Haridwar',
        price: 'Rs. 7000',
        URL: Img,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        durations: "3 Days 2 Nights",

    },
    {
        id: '2',
        title: 'Ayodhya',
        price: 'Rs. 10000',
        URL: Img,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        durations: "3 Days 2 Nights",
    },
    {
        id: '3',
        title: 'Varanasi',
        price: 'Rs. 12000',
        URL: Img,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        durations: "3 Days 2 Nights",
    },
    {
        id: '4',
        title: 'Ujain',
        price: 'Rs. 15000',
        URL: Img,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        durations: "3 Days 2 Nights",
    },
    {
        id: '5',
        title: 'Kedarnath',
        price: 'Rs. 50000',
        URL: Img,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        durations: "7 Days 6 Nights",
    },
    {
        id: '6',
        title: 'Kedarnath',
        price: 'Rs. 50000',
        URL: Img,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        durations: "7 Days 6 Nights",
    },
    {
        id: '6',
        title: 'Kedarnath',
        price: 'Rs. 50000',
        URL: Img,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        durations: "7 Days 6 Nights",
    },



]

const PackagesSection = () => {

    const PackageItem = ({ title, price, URL, des, durations }) => {
        return (
            <div className='max-w-full  rounded-tl-xl rounded-tr-2xl border border-gray-200 group  '>
                <div className='relative overflow-hidden'>
                    <Image
                        src={URL}
                        alt={title}
                        className="w-full h-60 object-cover transition-transform duration-300 transform hover:scale-105  cursor-pointer"
                    />
                    <Link to="/" className="absolute top-1/2 left-1/2 bg-white rounded-full p-2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500">
                        <RiSearchLine />
                    </Link>
                </div>
                <div className='p-4 bg-white'>
                    <div className='flex justify-between items-center text-lg font-semibold text-gray-800'>
                        <span>{title}</span>
                        <span className='text-secondary'>{price}</span>
                    </div>
                    <p className='text-gray-600 my-3'>{des}</p>
                    <div className='flex justify-between items-center'>
                        <p className='flex items-center  text-gray-600'>
                            <RiTimeLine className='mr-1 ' />
                            <span>{durations}</span>
                        </p>
                        <Link to='/' className='px-2 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-colors duration-300'>
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <section className='container mx-auto pt-6  bg-[#FFFAFA] '>
                <h3 className='font-bold text-center text-4xl'>Our Packages</h3>
                <p className='text-center max-w-lg m-auto text-gray py-6 '>Lorem adipisicing elit. Omnis tenetur hic incidunt harum dolores veniam debitis ea quasi tempore doloribus.. Omnis tenetur hic incidunt harum dolores veniam debitis ea quasi tempore doloribus. Omnis tenetur hic incidunt harum dolores veniam debitis ea quasi tempore doloribus</p>
                <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 py-11 rounded-full'>
                    {
                        Package.map((card) => (
                            <PackageItem
                                key={card.id}
                                title={card.title}
                                URL={card.URL}
                                price={card.price}
                                des={card.des}
                                durations={card.durations}

                            />
                        ))
                    }
                </div>
            </section>

        </>
    );
};

export default PackagesSection;