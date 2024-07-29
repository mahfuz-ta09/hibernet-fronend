import Image from 'next/image'
import '../../../../css/home/WhyChooseUs/WhyChooseUs.css'
import im from '../../../../../public/assets/login-page.jpeg'
import trophy from '../../../../../public/assets/trophy.jpg'

const WhyChooseUs = () => {


    
    return (
        <div className='wcu-container'>
            <div className="wcu-holder">
                <div className='choose-header'>
                    <p>Why Us</p>
                    <h1>Why Choose Us</h1>
                </div>

                <div className="our-specialties">
                    <div className="our-point">
                        
                        <div className="our-point-card-1">
                            <div className="point-img">
                                <Image className='' src={trophy} alt="" />
                            </div>
                            <div className="our-point-txt">
                                <h1>24/7 Support</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quod.</p>
                            </div>
                        </div>
                        
                        <div className="our-point-card-2">
                            <div className="point-img">
                                <Image className='' src={trophy} alt="" />
                            </div>
                            <div className="our-point-txt">
                                <h1>Expert teachers panel</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quod.</p>
                            </div>
                        </div>
                        
                        <div className="our-point-card-1">
                            <div className="point-img">
                                <Image className='' src={trophy} alt="" />
                            </div>
                            <div className="our-point-txt">
                                <h1>Vast collection of courses</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quod.</p>
                            </div>
                        </div>

                        <div className="our-point-card-2">
                            <div className="point-img">
                                <Image className='' src={trophy} alt="" />
                            </div>
                            <div className="our-point-txt">
                                <h1>fully virtual education system.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quod.</p>
                            </div>
                        </div>
                    </div>
                    <Image className="point-bnr-img" src={im} alt='' />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs