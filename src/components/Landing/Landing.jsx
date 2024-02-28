import iconInTheBtn from '../../assets/icon-in-the-btn.svg'
import './landing.css'
function Landing() {
    return <div className="content-container-landing">
        <div className='container-mask-shadow-landing'></div>
        <div className='text-container-landing'>
            <h3 className='h'>our biggest sale now live</h3>
            <h1 className='h-2'>Black Friday Starts Now!</h1>
            <button className='shop-now-btn'>shop sale now   <img src={iconInTheBtn} alt='' className='icon-in-btn' /> </button>

        </div>
    </div>
}
export default Landing