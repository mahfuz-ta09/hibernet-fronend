"use client"
import { RefObject , useRef } from 'react'
import '../../../../css/home/LandingPage/LandingPage.css'
import { FaArrowAltCircleRight } from "react-icons/fa"
import { FaArrowAltCircleLeft } from "react-icons/fa"



const banner = [
    {
        id:0,
        url:"https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg",
        HdText:"Science",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
    {
        id:1,
        url:"https://images.pexels.com/photos/3098894/pexels-photo-3098894.jpeg",
        HdText:"Arts",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
    {
        id:2,
        url:"https://images.pexels.com/photos/7788006/pexels-photo-7788006.jpeg",
        HdText:"Commerse",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
    {
        id:3,
        url:"https://images.pexels.com/photos/3777571/pexels-photo-3777571.jpeg",
        HdText:"English Spoken",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
    
]


const LandingPage = () => {
    const landingRef:RefObject<HTMLDivElement>  = useRef<HTMLDivElement>(null)
    const thmbRef:RefObject<HTMLImageElement>  = useRef<HTMLImageElement>(null)
    


    const handlePN = (value:string) =>{
        let landingContent = landingRef.current
        let thmbContent = thmbRef.current
        let thmbItem = thmbRef.current?.querySelectorAll('.thumbnail .thumbnail-image-container')
        let contentItem = landingContent?.querySelectorAll('.banner-image-container')


        if(landingContent && contentItem && thmbItem && thmbContent){
            if(value === 'n'){
                landingContent.appendChild(contentItem[0])
                thmbContent.appendChild(thmbItem[0])
                landingContent.classList.add("next")
            }else{
                landingContent.prepend(contentItem[contentItem.length-1])
                thmbContent.prepend(thmbItem[thmbItem.length-1])
                landingContent.classList.add("prev")
            }
        }
        

        landingContent?.addEventListener("animationend", function() {
            if(value === 'n'){
                landingContent.classList.remove("next")
            }else{
                landingContent.classList.remove("prev")
            }
    
        }, {once: true})

    }

    return (
        <div className='landing-page'>

            <div ref={landingRef} className="landing-content">
                {
                    banner.map(item => (
                        <div key={item.id}  className="banner-image-container">
                            <div className='banner-text-container'>
                                <h1>{item.HdText}</h1>
                                <p>{item.addition}</p>
                                <button>SEE MORE</button>
                            </div>
                            <img className='banner-image' src={item.url} alt="" />
                        </div>
                    ))
                }
            </div>

            <div ref={thmbRef} className="thumbnail">
                {
                    banner.map(item => (
                        <div key={item.id} className="thumbnail-image-container">
                            <img className='thumbnail-image' src={item.url} alt="" />
                        </div>
                    ))
                }
            </div>

            <div className="buttons">
                <button onClick={() =>handlePN('p')}><FaArrowAltCircleLeft /></button>
                <button onClick={() =>handlePN('n')}><FaArrowAltCircleRight /></button>
            </div>

        </div>
    )
}

export default LandingPage