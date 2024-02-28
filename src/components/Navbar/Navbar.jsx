import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg'
import './navbar.css'
function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 170);
        });
    });

    return (
        <header className={` ${scroll ? "sticky-nav" : "content-container-nav"}`} >
            <div className="container-nav">
                <div className="container-menu-logo-nav">
                    <div className='container-logo-nav'>
                        <img src={logo} alt='' className='logo-nav' />
                    </div>
                    <h3 className='menu-item'>Products</h3>
                    <h3 className='menu-item'>Subscription</h3>
                    <h3 className='menu-item'>Why Nura?</h3>
                    <h3 className='menu-item'>Support</h3>
                </div>
                <div className="container-cart-nav">
                    <h3 className='cart-nav'>cart</h3>
                    <div className='basket-counting-nav'>
                        <h3 className='basket-nav'>(0)</h3>
                    </div>
                </div>
            </div>
        </header>
    )

}
export default Navbar