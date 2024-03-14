import React from 'react'
import Box from '@mui/material/Box';
import HeroSection from '../Components/HeroSection';
import Place from '../Components/Place';
import Feature from '../Components/Feature';
import About from './About';


export default function Home() {
    return (
        <>
            <Box>
                <HeroSection
                    title="Welcome to Our Website"
                    subtitle="Explore the world with us"
                    buttonText="Explore Now" />
                <Feature />
                <About />
                <Place />
            </Box>

        </>



    )
}
