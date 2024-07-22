import { useState } from 'react';
import "./HeroBanner.css";
import HeroImage from "../../../assets/images/Hero-Image.png";
import Modal from "./Modal";
import GrowingBanner from '../GrowingBanner/GrowingBanner';
import Franchisebanner from '../NewFranchiseBan/Franchisebanner';
import Carditems from '../Cardsitems/Carditems';

const HeroBanner = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
        <div className='pb-hero-banner w-full'>
            <div className="container mx-auto">
                <div className="pb-hero-con">
                    <div className="pb-hero-body">
                        <h3> Entrepreneur Magazine’s Number One Bakery Brand </h3>
                        <p> Has nearly 140 units open in 30 states and added 40 Signings since the start of 2023. </p>
                        <a href="https://1851franchise.com/parisbaguette/paris-baguette-s-new-look-2718429" target="_blank"> Read more on 1851 </a>
                    </div>
                    <div className="pb-hero-media cursor-pointer"> 
                        <img src={HeroImage} alt="banner-media" onClick={() => setShowModal(true)} />
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-growing-body"><GrowingBanner/></div>
        <div className="pb-franchise-body"><Franchisebanner/></div>
        <div className="pb-carditem-body"><Carditems/></div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default HeroBanner;