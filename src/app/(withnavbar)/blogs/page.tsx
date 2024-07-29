import Image from 'next/image'
import '../../../css/blogs/blogs.css'
import dummy from '../../../../public/assets/login-page.jpeg'
import Link from 'next/link'



const BlogPage = () => {

  return (
    <div className="blog-container">

      <div className="blog-page">
        <div className="blog-content">
          
          <div className="blogs">
            
            <div className="blog">
              <Image className='blog-image' src={dummy} alt=""/>
              <div className="blog-data up">
                <h1 className="blog-title">ami omuk vai er sss..</h1>
                <div className='blog-creator'>
                  <h1>ma anam tasnim</h1>
                  <h1>22/22/2029</h1>
                </div>
                <Link className='blog-details-btn' href={`/blogs/${32636323}`}>details</Link>
              </div>
            </div>
            
            
            
            <div className="blog">
              <Image className='blog-image' src={dummy} alt=""/>
              <div className="blog-data up">
                <h1 className="blog-title">ami omuk vai er sss..</h1>
                <div className='blog-creator'>
                  <h1>ma anam tasnim</h1>
                  <h1>22/22/2029</h1>
                </div>
                <Link className='blog-details-btn' href={`/blogs/${32636323}`}>details</Link>
              </div>
            </div>
            
            
            
            <div className="blog">
              <Image className='blog-image' src={dummy} alt=""/>
              <div className="blog-data up">
                <h1 className="blog-title">ami omuk vai er sss..</h1>
                <div className='blog-creator'>
                  <h1>ma anam tasnim</h1>
                  <h1>22/22/2029</h1>
                </div>
                <Link className='blog-details-btn' href={`/blogs/${32636323}`}>details</Link>
              </div>
            </div>
            
            
            
            <div className="blog">
              <Image className='blog-image' src={dummy} alt=""/>
              <div className="blog-data up">
                <h1 className="blog-title">ami omuk vai er sss..</h1>
                <div className='blog-creator'>
                  <h1>ma anam tasnim</h1>
                  <h1>22/22/2029</h1>
                </div>
                <Link className='blog-details-btn' href={`/blogs/${32636323}`}>details</Link>
              </div>
            </div>
            
            
            
            <div className="blog">
              <Image className='blog-image' src={dummy} alt=""/>
              <div className="blog-data up">
                <h1 className="blog-title">ami omuk vai er sss..</h1>
                <div className='blog-creator'>
                  <h1>ma anam tasnim</h1>
                  <h1>22/22/2029</h1>
                </div>
                <Link className='blog-details-btn' href={`/blogs/${32636323}`}>details</Link>
              </div>
            </div>
            
            
            
            <div className="blog">
              <Image className='blog-image' src={dummy} alt=""/>
              <div className="blog-data up">
                <h1 className="blog-title">ami omuk vai er sss..</h1>
                <div className='blog-creator'>
                  <h1>ma anam tasnim</h1>
                  <h1>22/22/2029</h1>
                </div>
                <Link className='blog-details-btn' href={`/blogs/${32636323}`}>details</Link>
              </div>
            </div>
            
            
            
            <div className="blog">
              <Image className='blog-image' src={dummy} alt=""/>
              <div className="blog-data up">
                <h1 className="blog-title">ami omuk vai er sss..</h1>
                <div className='blog-creator'>
                  <h1>ma anam tasnim</h1>
                  <h1>22/22/2029</h1>
                </div>
                <Link className='blog-details-btn' href={`/blogs/${32636323}`}>details</Link>
              </div>
            </div>
            
            
            
            <div className="blog">
              <Image className='blog-image' src={dummy} alt=""/>
              <div className="blog-data up">
                <h1 className="blog-title">ami omuk vai er sss..</h1>
                <div className='blog-creator'>
                  <h1>ma anam tasnim</h1>
                  <h1>22/22/2029</h1>
                </div>
                <Link className='blog-details-btn' href={`/blogs/${32636323}`}>details</Link>
              </div>
            </div>
            
            
          </div>
            

          <div className="blog-nav">
              
              <div className="top-stories">
                <h1>Top <span>Stories</span></h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aliquid accusamus blanditiis 
                  libero impedit unde non laborum, quia illum, dignissimos ipsam nobis explicabo corporis. 
                  Laudantium quos repellendus non animi sunt?
                </p>
              </div>

              <div className="suggestion">
                <p>it</p>
                <p>hsc</p>
                <p>ssc</p>
                <p>ielts</p>
                <p>honours</p>
                <p>tech</p>
                <p>uni</p>
                <p>admission</p>
                <p>health</p>
                <p>exam</p>
                <p>travel</p>
                <p>abroad</p>
              </div>
              
              <form className="search-box" action="">
                <input type="text" placeholder='what are you looking for?'/>
                <button type="submit">search</button>
              </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default BlogPage