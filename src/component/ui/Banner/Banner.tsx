"use client"
import { RefObject, useEffect, useRef, useState } from 'react'
import '../../../css/UI/Banner/Banner.css'

const bannerContent = [
    {
        id:0,
        url:"https://images.pexels.com/photos/1906437/pexels-photo-1906437.jpeg",
        HdText:"Science",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
    {
        id:1,
        url:"https://images.pexels.com/photos/10554033/pexels-photo-10554033.jpeg",
        HdText:"Arts",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
    {
        id:2,
        url:"https://images.pexels.com/photos/11423261/pexels-photo-11423261.jpeg",
        HdText:"Commerse",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
    {
        id:3,
        url:"https://images.pexels.com/photos/9842315/pexels-photo-9842315.jpeg",
        HdText:"English Spoken",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
    {
        id:4,
        url:"https://images.pexels.com/photos/15023069/pexels-photo-15023069/free-photo-of-clear-mug-with-brown-liquid-and-cream-on-brown-surface.jpeg",
        HdText:"Online Exams",
        addition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium.",
        btnPath:"aaa"
    },
]

const Banner = () => {
    const [present,setPresent] = useState(0)
    let imgContRef:RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    let btnRef:RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)


    useEffect(()=>{
        if(document){
            let nextBtn = document.querySelector('.next')
            let prevBtn = document.querySelector('.prev')
            
            let slider = document.querySelector('.slider')
            let sliderList = slider.querySelector('.slider .list')

            let thumbnail = document.querySelector('.slider .thumbnail')
            let thumbnailItems = thumbnail.querySelectorAll('.item')
            

            thumbnail.appendChild(thumbnailItems[0])

            // console.log('yo',thumbnailItems)

            nextBtn.onclick = function() {
                moveSlider('next')
            }
            
            

            prevBtn.onclick = function() {
                moveSlider('prev')
            }
            
            
            function moveSlider(direction) {
                let sliderItems = sliderList.querySelectorAll('.item')
                let thumbnailItems = document.querySelectorAll('.thumbnail .item')
                if(direction === 'next'){
                    sliderList.appendChild(sliderItems[0])
                    thumbnail.appendChild(thumbnailItems[0])
                    slider.classList.add('next')
                } else {
                    sliderList.prepend(sliderItems[sliderItems.length - 1])
                    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
                    slider.classList.add('prev')
                }
            
            
                slider.addEventListener('animationend', function() {
                    if(direction === 'next'){
                        slider.classList.remove('next')
                    } else {
                        slider.classList.remove('prev')
                    }
                }, {once: true}) // Remove the event listener after it's triggered once
            }
        }
    },[])
    
    
    const handleNext = (number:number) =>{
        if(present < bannerContent.length-1){
            setPresent(present+(number))
        }else{
            setPresent(0)
        }

    }
    const handlePrev = (number:number) =>{
        if(present > 0 ){
            setPresent(present-(number))
        }else{
            setPresent(bannerContent.length-1)
        }
    }
    

    
    return (
        <div className="slider">
            
            <div className="list">
                    {
                        bannerContent.map((single) =>(
                            <div key={single?.id} className="item">
                                <img src={single?.url} alt=""/>

                                <div className="content">
                                    <div className="title">{single?.HdText}</div>
                                    <div className="description">
                                        {single?.addition}
                                    </div>
                                    <div className="button">
                                        <button>SEE MORE</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>

        <div className="thumbnail">
            {
                bannerContent.filter(images => images.id !== present).sort().map((contents) =>(
                    <div key={contents?.id} className="item">
                        <img src={contents?.url} alt="" />
                    </div>
                ))
            }

        </div>


        <div className="nextPrevArrows">
            <button className="prev"> p </button>
            <button className="next"> n </button>
        </div>


    </div>

    )
}

export default Banner














{/* <div className='banner'>
            <div className="banner-content">
                {
                    bannerContent.map((single) =>(
                        <div 
                            key={single.id} 
                            className={present === single.id ?'slider-content': 'hide' }
                        >
                            <div ref={imgContRef} className='showed-image'>
                                <img src={single?.url} alt="" />
                            </div>

                            <div ref={btnRef} className='navigation'>
                                <button onClick={()=>handlePrev(1)}>prv</button>
                                <button onClick={()=>handleNext(1)}>nxt</button>
                            </div>

                            <div className='thumbnail'>
                                {
                                    bannerContent.filter(images => images.id !== present).sort().map((contents) =>(
                                        <div className='thumbnail-item' key={contents?.id}>
                                             <img className='thumbnail-item-image' src={contents?.url} alt="" />
                                        </div>
                                    ))
                                }
                               
                            </div>
                        </div>
                    ))
                }
            </div>
        </div> */}


{/* <img className='image-container' src={`${bannerContent[current]?.url}`} alt="" />
            <div className="overlay"></div>
            <div className='banner-content'>
                <div className='banner-text'>
                    <h1>{bannerContent[current]?.HdText}</h1>
                    <p>{bannerContent[current]?.addition}</p>
                    <button>Details</button>
                </div>
                <div className='banner-cntrl'>
                    <button onClick={()=>handlePrev(1)}>prv</button>
                    <button onClick={()=>handleNext(1)}>nxt</button>
                </div>
                <div className='banner-image-container'>
                    {
                        bannerContent.slice(current+1,current+5).map((single,index) =>(
                            <div key={index} className='img-item'>
                                <img className='banner-image-single' src={`${single?.url}`}/>
                            </div>
                        ))
                    }
                </div>
            </div> */}