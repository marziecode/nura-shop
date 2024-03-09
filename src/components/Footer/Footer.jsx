import './footer.css'
import logo from '../../assets/logo.svg'
function Footer() {
    return <div className='content-container-footer'>
        <div className='container-description-footer'>
            <img src={logo} alt='' className='logo-description-footer' />
            <p className='text-description-footer'>Nura designs headphones<br/> tuned to you. Bringing you<br/> closer to music with<br /> personalised sound.</p>
        </div>
        <div className='container-items-footer'>
            <h6 className='lable-containers-footer'>SHOP</h6>
            <p className='items-contaoner-items-footer'>NuraTrue Pro</p>
            <p className='items-contaoner-items-footer'>Audio Transmitter</p>
            <p className='items-contaoner-items-footer'>NuraTrue</p>
            <p className='items-contaoner-items-footer'>NuraBuds</p>
            <p className='items-contaoner-items-footer'>Nuraphone</p>
            <p className='items-contaoner-items-footer'>NuraLoop</p>
            <p className='items-contaoner-items-footer'>Accessories</p>
            <p className='items-contaoner-items-footer'>Subscription</p>
        </div>
        <div className='container-items-footer'>
            <h6 className='lable-containers-footer'>INFO</h6>
            <p className='items-contaoner-items-footer'>Why Nura?</p>
            <p className='items-contaoner-items-footer'>Shipping</p>
            <p className='items-contaoner-items-footer'>Returns</p>
            <p className='items-contaoner-items-footer'>Warranty</p>
            <p className='items-contaoner-items-footer'>Patents</p>
        </div>
        <div className='container-items-footer'>
            <h6 className='lable-containers-footer'>SUPPORT</h6>
            <p className='items-contaoner-items-footer'>Help Centre</p>
            <p className='items-contaoner-items-footer'>Contact Us</p>
        </div>
        <div className='container-items-footer'>
            <h6 className='lable-containers-footer'>SOCIALS</h6>
            <p className='items-contaoner-items-footer'>Instagram</p>
            <p className='items-contaoner-items-footer'>Facebook</p>
            <p className='items-contaoner-items-footer'>YouTube</p>
            <p className='items-contaoner-items-footer'>Tidal</p>
            <p className='items-contaoner-items-footer'>Twitter</p>
            <p className='items-contaoner-items-footer'>Discord</p>
        </div>
    </div>
}
export default Footer