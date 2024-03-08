import './soundSubscription.css'
import soundIMG from '../../assets/sound-img.svg'
function SoundSubscription() {
    return <div className='content-container-sound'>
        {/* <img src={soundIMG} alt='' className='sount-img' /> */}

        <div className='text-contaoner-sound'>
            <h1 className='lable-text-containet-sound'>A sound subscription</h1>
            <p className='text-sound'>Experience personalised sound across our devices on a low monthly fee with NuraNow. Cancel anytime.</p>
        <button className='button-sound'>Discover NuraNow</button>
        </div>
    </div>
}
export default SoundSubscription