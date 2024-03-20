import React from 'react'
import videoSource from '../assets/video1.mp4'
import { RiPlayFill } from 'react-icons/ri';
export default function Video() {
    return (
        <>
            <section className='container mx-auto  px-12 '>
                <div className='bg-video bg-cover bg-center bg-no-repeat h-[260px] md:h-[400px] xl:h-[500px] grid place-items-center rounded-2xl relative'>
                    <video autoPlay="autoplay" loop="loop" muted className='absolute z-0 w-full h-full object-cover rounded-2xl'>
                        <source src={videoSource} type="video/mp4" />
                    </video>
                    <div className='h-16 w-16 bg-secondary/30 text-white text-center flex justify-center items-center rounded-full cursor-pointer z-10 '><RiPlayFill /></div>
                    <div className='absolute h-12 w-12 bg-white rounded-full animate-ping'></div>
                </div>
            </section>

        
        </>
    )
}
