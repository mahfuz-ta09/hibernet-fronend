import Image from 'next/image'
import '../../../css/blogs/blogs.css'
import dummy from '../../../../public/assets/login-page.jpeg'
import Link from 'next/link'


const BlogPage = () => {
  return (
    <div className="blogs">

      <div className="blog-container">
        <div className="blog-elements">
            <div className="blog">
                <Image className='blog-img' src={dummy} alt="" />
                <div className="blog-data">
                  <h1 className='blog-title'>Hi my name is omuk</h1>
                  <div className="creator">
                    <h1>golden shit</h1>
                    <h1>01/02/2004</h1>
                  </div>
                  <Link className='details-link' href="">Details</Link>
                </div>
            </div>

            
            <div className="blog">
                <Image className='blog-img' src={dummy} alt="" />
                <div className="blog-data">
                  <h1 className='blog-title'>Hi my name is omuk</h1>
                  <div className="creator">
                    <h1>golden shit</h1>
                    <h1>01/02/2004</h1>
                  </div>
                  <Link className='details-link' href="">Details</Link>
                </div>
            </div>

            <div className="blog">
                <Image className='blog-img' src={dummy} alt="" />
                <div className="blog-data">
                  <h1 className='blog-title'>Hi my name is omuk</h1>
                  <div className="creator">
                    <h1>golden shit</h1>
                    <h1>01/02/2004</h1>
                  </div>
                  <Link className='details-link' href="">Details</Link>
                </div>
            </div>

            <div className="blog">
                <Image className='blog-img' src={dummy} alt="" />
                <div className="blog-data">
                  <h1 className='blog-title'>Hi my name is omuk</h1>
                  <div className="creator">
                    <h1>golden shit</h1>
                    <h1>01/02/2004</h1>
                  </div>
                  <Link className='details-link' href="">Details</Link>
                </div>
            </div>
            <div className="blog">
                <Image className='blog-img' src={dummy} alt="" />
                <div className="blog-data">
                  <h1 className='blog-title'>Hi my name is omuk</h1>
                  <div className="creator">
                    <h1>golden shit</h1>
                    <h1>01/02/2004</h1>
                  </div>
                  <Link className='details-link' href="">Details</Link>
                </div>
            </div>


        </div>


        <div className="blogs-nav">
          <div className="blogs-nav-header">
            <h1>Academic <span>stories</span></h1>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nostrum illum 
              exercitationem non fugit magni accusamus rerum iusto, assumenda ratione consequuntur, 
              eos aut asperiores ipsa veniam temporibus. Eum, et dignissimos.
            </p>
          </div>
          
          <div className="side-nav-content">

            <div className="search-box">
              <input placeholder='search' type="text" />
              <button>search</button>
            </div>

            <h1>Catagory:</h1>
            <ul>
              <li>tech</li>
              <li>tech</li>
              <li>tech</li>
              <li>tech</li>
              <li>tech</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogPage