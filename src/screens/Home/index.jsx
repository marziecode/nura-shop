import React from 'react'
import HomeLayouts from '../../layouts/HomeLayouts'
import Landing from '../../components/Landing/Landing'
import Featured from '../../components/Featured/Featured'
import Headphone from '../../components/Headphone/Headphone'
import PlayDevice from '../../components/PlayDevice/PlayDevice'

function Home() {
    return (
        <HomeLayouts>
            <Landing />
            <Featured />
            <Headphone />
           <PlayDevice/>
        </HomeLayouts>
    )
}
export default Home