import './playDevice.css'
import playDeviceIMG from '../../assets/playDevice-img.svg'
function PlayDevice() {
    return <div className='contant-container-playDevice'>
        <div className='container-mask-img-playDevice'>
            <img src={playDeviceIMG} alt='playDevice-img' />
            <div className='text-container-playDevice'>
                <h1 className='lable-text-container-playDevice'>Play from <br />any device.</h1>
                <p className='text-playDevice'>Your hearing profile is <span className='higlight-playDevice'>stored on the earbuds</span>, and is applied to whatever you listen to, <span className='higlight-playDevice'>on any device</span>.</p>
                <p className='text-playDevice'>Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.</p>
            </div>
        </div>

    </div>
}
export default PlayDevice