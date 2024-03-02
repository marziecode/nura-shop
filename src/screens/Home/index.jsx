import React from 'react'
import HomeLayouts from '../../layouts/HomeLayouts'
import Landing from '../../components/Landing/Landing'
import Featured from '../../components/Featured/Featured'
import Headphone from '../../components/Headphone/Headphone'

function Home() {
    return (
        <HomeLayouts>
            <Landing />
            <Featured />
            <Headphone />
        </HomeLayouts>
    )
}
export default Home