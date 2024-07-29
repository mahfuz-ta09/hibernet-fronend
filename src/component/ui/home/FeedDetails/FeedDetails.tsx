import '../../../../css/home/FeedDetails/FeedDetails.css'
import photo from '../../../../../public/assets/login-page.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import { FaCircleQuestion, FaHandshake, FaPenNib } from 'react-icons/fa6'
import { TbBasketCancel } from 'react-icons/tb'
import { FaAngleDoubleRight, FaBrain } from 'react-icons/fa'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'



const FeedDetails = () => {

    return (
      <div className="home-feed-container">
        <h1 className='home-feed-top'>One step solution<BsFillQuestionOctagonFill className='home-feed-top-icon'/></h1>
        <div className='home-feed-details'>
          <h1 className='home-feed-header'><FaCircleQuestion className='feed-hoome-icon'/>Have questions</h1>
          <Image src={photo} alt=""  className='question-icon que'/>
          <h1 className="home-feed-tag-1 feed-tag-1"><TbBasketCancel className='feed-hoome-icon'/> Can&apos;t solve questions?</h1>
          <h1 className="home-feed-tag-2 feed-tag-2"><FaPenNib className='feed-hoome-icon'/> Need experts to solve?</h1>
          <h1 className="home-feed-tag-3 feed-tag-3"><FaBrain className='feed-hoome-icon'/> Want to see others thoughts?</h1>
          <h1 className="home-feed-tag-4 feed-tag-4"><FaHandshake className='feed-hoome-icon'/> Help others to grow faster?</h1>
          <Link href="/feed" className="home-feed-navigation show-feed-nav">ask now<FaAngleDoubleRight  className='feed-hoome-icon'/></Link>
        </div>
        <h1 className='feed-container-bottom'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit dolorem accusantium cum quod, saepe, aspernatur vel obcaecati velit inventore debitis iure impedit ex a labore, voluptates nesciunt ratione suscipit? Eaque quod alias reprehenderit laudantium aliquid, debitis asperiores quidem odio dolore.</h1>
      </div>
    )
}

export default FeedDetails