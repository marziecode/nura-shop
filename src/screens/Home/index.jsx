import React from 'react'
import HomeLayouts from '../../layouts/HomeLayouts'
import Landing from '../../components/Landing/Landing'
import Featured from '../../components/Featured/Featured'
import Headphone from '../../components/Headphone/Headphone'
import PlayDevice from '../../components/PlayDevice/PlayDevice'
import SoundSubscription from '../../components/SoundSubscription/SoundSubscription'
import Footer from '../../components/Footer/Footer'
import AsFeatured from '../../components/AsFeatured/AsFeatured'
function Home() {
    return (
        <HomeLayouts>
            <Landing />
            <Featured />
            <Headphone />
            <PlayDevice />
            <SoundSubscription />
            <AsFeatured />
            <Footer />
        </HomeLayouts>
    )
}
export default Home