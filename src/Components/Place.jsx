import React from 'react'
import PlaceCard from './ui/PlaceCard'
import Img1 from '../assets/pic3.webp'

const PlacesData = [
    {
        img: Img1,
        title: 'Char Dham',
        location: "Uttarakhand",
        description: "  Gangotri, Badrinath and Kedarnath.",
        price: 2000,
        rating: 4.5,
        type: 'Temple',
    },
    {
        img: Img1,
        title: 'Char Dham',
        location: "Uttarakhand",
        description: " Gangotri, Badrinath and Kedarnath.",
        price: 2000,
        rating: 4.5,
        type: 'Temple',
    },
    {
        img: Img1,
        title: 'Char Dham',
        location: "Uttarakhand",
        description: " Gangotri, Badrinath and Kedarnath.",
        price: 2000,
        rating: 4.5,
        type: 'Temple',
    },
    {
        img: Img1,
        title: 'Char Dham',
        location: "Uttarakhand",
        description: " Gangotri, Badrinath and Kedarnath.",
        price: 2000,
        rating: 4.5,
        type: 'Temple',
    },
    {
        img: Img1,
        title: 'Char Dham',
        location: "Uttarakhand",
        description: " Gangotri, Badrinath and Kedarnath.",
        price: 2000,
        rating: 4.5,
        type: 'Temple',
    },
    {
        img: Img1,
        title: 'Char Dham',
        location: "Uttarakhand",
        description: " Gangotri, Badrinath and Kedarnath.",
        price: 2000,
        rating: 4.5,
        type: 'Temple',
    },

]

export default function Place() {
    return (
        <div className='bg-gray-50 py-10'>
            <div className='container mx-auto '>
                <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-4xl font-bold'>Best Places</h1>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 mx-4 py-4'>
                    {
                        PlacesData.map((item, index) => (
                            <PlaceCard key={index}
                                {...item}
                            />
                        ))
                    }

                </div>
            </div>

        </div>
    )
}
