import React from 'react'
import CallToAction from '../components/callToAction/CallToAction'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer'
import Gallary from '../components/Gallary/Gallary'
import Mission from '../components/Mission/Mission'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/projects/Projects'
import WeAre from '../components/weAre/WeAre'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
             <WeAre/>
            <Mission/>
            <Projects/>
            <CallToAction/>
            <Gallary/>
            <Footer/>
        </div>
    )
}

export default Home
