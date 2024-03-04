import './headphone.css'
import headphonePNG from '../../assets/headphone-png.svg'
function Headphone() {
    return <div className='content-container-headphone'>
        <div className='main-content-headphone'>
            <div className='container-img-headphone'>
                <img src={headphonePNG} alt='' className='img-headphone' />
            </div>

            <div className='container-text-headphone'>
                <h1 className='headint-tex-container-headphone'>For your<br />ears only.</h1>
                <p className='text-headphone'>Normal hearing varies significantly from<br /> person to person, and these variations<br /> make a <span className='highlight-text-headphone'>big difference</span> to how you<br /> experience music.</p>
                <p className='text-headphone'>The first time you use Nura earbuds,<br /> they <span className='highlight-text-headphone'>measure your hearing </span>to create<br /> your personalised hearing profile.</p>
            </div>
        </div>





    </div>
}
export default Headphone