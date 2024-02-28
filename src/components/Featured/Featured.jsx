import './featured.css'
import iconViewAllFeaturde from '../../assets/icon-view-all-featurde.svg'
import ticketOff from '../../assets/productImage/ticket-off.svg'
import iconInSellProductBTN from '../../assets/icon-in-sell-product-btn.svg'
import img1 from '../../assets/productImage/img-1.svg'
import img2 from '../../assets/productImage/img-2.svg'
import img3 from '../../assets/productImage/img-3.svg'
import img4 from '../../assets/productImage/img-4.svg'
function Featured() {
    return <div className='content-container-featured'>
        <div className='gg'>

            <div className='tex-container-featured'>
                <h1 className='lable-featured-container'>Featurd discount</h1>
                <h4 className='view-all-container-featured'>VIEW ALL DISCOUNTS <img src={iconViewAllFeaturde} alt='' className='icon-view-all-featurde' /></h4>
            </div>


            <div className='content-offer-product-featured'>
                {/* container product 1*/}
                <div className='container-offer-product-featured'>
                    <div className='container-img-product'>
                        <img src={img1} alt='' className='img-product-1' />
                        <div className='container-ticket-off'>
                            <img src={ticketOff} alt='' />
                        </div>
                    </div>
                    <div className='tex-container-offer-product'>
                        <h3 className='name-product-featured'>Nuraphone</h3>
                        <div className='content-container-price'>
                            <h4 className='current-price'>$399</h4>
                            <p className='price-offer-product'>$299.25</p>
                        </div>
                        <button className='btn-off-product-featured'>SHOP NOW
                            <img src={iconInSellProductBTN} alt='' className='icon-sell-product-btn' />
                        </button>
                    </div>
                </div>
                {/* container product 2*/}
                <div className='container-offer-product-featured'>
                    <div className='container-img-product'>
                        <img src={img2} alt='' className='img-product-1' />
                        <div className='container-ticket-off'>
                            <img src={ticketOff} alt='' />
                        </div>
                    </div>
                    <div className='tex-container-offer-product'>
                        <h3 className='name-product-featured'>Nuraphone</h3>
                        <div className='content-container-price'>
                            <h4 className='current-price'>$199.99</h4>
                            <p className='price-offer-product'>$139.99</p>
                        </div>
                        <button className='btn-off-product-featured'>SHOP NOW
                            <img src={iconInSellProductBTN} alt='' className='icon-sell-product-btn' />
                        </button>
                    </div>
                </div>
                {/* container product 3*/}
                <div className='container-offer-product-featured'>
                    <div className='container-img-product'>
                        <img src={img3} alt='' className='img-product-1' />
                        <div className='container-ticket-off'>
                            <img src={ticketOff} alt='' />
                        </div>
                    </div>
                    <div className='tex-container-offer-product'>
                        <h3 className='name-product-featured'>Nuraphone</h3>
                        <div className='content-container-price'>
                            <h4 className='current-price'>$119</h4>
                            <p className='price-offer-product'>$89.25</p>
                        </div>
                        <button className='btn-off-product-featured'>SHOP NOW
                            <img src={iconInSellProductBTN} alt='' className='icon-sell-product-btn' />
                        </button>
                    </div>
                </div>
                {/* container product 4*/}
                <div className='container-offer-product-featured'>
                    <div className='container-img-product'>
                        <img src={img4} alt='' className='img-product-1' />
                        <div className='container-ticket-off'>
                            <img src={ticketOff} alt='' />
                        </div>
                    </div>
                    <div className='tex-container-offer-product'>
                        <h3 className='name-product-featured'>Nuraphone</h3>
                        <div className='content-container-price'>
                            <h4 className='current-price'>$59</h4>
                            <p className='price-offer-product'>$44.25</p>
                        </div>
                        <button className='btn-off-product-featured'>SHOP NOW
                            <img src={iconInSellProductBTN} alt='' className='icon-sell-product-btn' />
                        </button>
                    </div>
                </div>
            </div>


        </div>


    </div>
}
export default Featured