import '../../../../css/home/BlogStories/BlogStories.css'
import photo from '../../../../../public/assets/login-page.jpeg'
import Image from 'next/image'
import { FaBook, FaBookAtlas, FaBrain, FaMagnifyingGlass, FaPen, FaRegPenToSquare } from 'react-icons/fa6'
import Link from 'next/link'


const BlogStories = () => {
  return (
    <div className='home-blog'>
        <div className="home-blog-content">
            <h1 className='home-blog-header'>Top Stories</h1>
            <div className="home-blog-content-holder">
                <div className="home-small-card">
                    <div className="home-feed-card">
                      <h1>vast</h1>
                      <FaBook  className="home-feed-card-icon" />
                      <h1>topic</h1>
                    </div>
                    <div className="home-feed-card">
                      <h1>latest</h1>
                      <FaPen  className="home-feed-card-icon" />
                      <h1>information</h1>
                    </div>
                    <div className="home-feed-card">
                      <h1>enough</h1>
                      <FaRegPenToSquare  className="home-feed-card-icon" />
                      <h1>refferences</h1>
                    </div>
                    <div className="home-feed-card">
                      <h1>clear</h1>
                      <FaMagnifyingGlass  className="home-feed-card-icon" />
                      <h1>explanation</h1>
                    </div>
                    <div className="home-feed-card">
                      <h1>huge</h1>
                      <FaBookAtlas  className="home-feed-card-icon"/>
                      <h1>collection</h1>
                    </div>
                    <div className="home-feed-card">
                      <h1>easy to</h1>
                      <FaBrain  className="home-feed-card-icon"/>
                      <h1>understand</h1>
                    </div>
                </div>
                <div className="home-blog-img-cont">
                    <div className="blog-navigation show-item">
                      <h1>Read blogs to stay updated!</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque officiis cumque obcaecati ab provident est?</p>
                      <Link className='blog-navigation-link' href='/blogs'>READ ALL</Link>
                    </div>
                    <Image className="home-blog-img"  src={photo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogStories