import React from 'react'
import HomeLayouts from '../../layouts/HomeLayouts'
import Landing from '../../components/Landing/Landing'
import Featured from '../../components/Featured/Featured'

function Home() {
    return (
        <HomeLayouts>
            <Landing/>
            <Featured/>
        </HomeLayouts>
    )
}
export default Home