import React from 'react'
import HomeLayouts from '../../layouts/HomeLayouts'
import Landing from '../../components/Landing/Landing'
import Featured from '../../components/Featured/Featured'
import Headphone from '../../components/Headphone/Headphone'
import PlayDevice from '../../components/PlayDevice/PlayDevice'
import SoundSubscription from '../../components/SoundSubscription/SoundSubscription'

function Home() {
    return (
        <HomeLayouts>
            <Landing />
            <Featured />
            <Headphone />
            <PlayDevice />
            <SoundSubscription/>
        </HomeLayouts>
    )
}
export default Home