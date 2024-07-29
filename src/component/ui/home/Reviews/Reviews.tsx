import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import '../../../../css/home/Reviews/Reviews.css'
import { BsMarkerTip } from 'react-icons/bs'

const Reviews = () => {
    return (
      <div className='home-review-container'>
        <div className='home-review-content'>
          
          <div className='home-review-header'>
            <h1 className='home-review-header-tag1'>Expert&apos;s opinion<BsMarkerTip className='home-review-header-tag1-icon'/></h1>
            <h1 className='home-review-header-tag2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, libero.</h1>
          </div>

          <div className="home-reviews">

            <div className="review-prev-cont">
              <FaAngleDoubleLeft className="review-prev-icon"/>
            </div>

            <div className="review-slide">

              <div className='review'>
                <div className="review-header">
                  <h1 className='review-header-tag'>md amuk tomuk</h1>
                  <h1 className='review-header-ratings'>ratings: 4/5</h1>
                </div>
                <div className="review-body">
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dignissimos laudantium! Pariatur minima inventore animi natus. Eum porro voluptatem tempora.</h1>
                </div>
              </div>
            

              <div className='review'>
                <div className="review-header">
                  <h1 className='review-header-tag'>md amuk tomuk</h1>
                  <h1 className='review-header-ratings'>ratings: 4/5</h1>
                </div>
                <div className="review-body">
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dignissimos laudantium! Pariatur minima inventore animi natus. Eum porro voluptatem tempora.</h1>
                </div>
              </div>
            

              <div className='review'>
                <div className="review-header">
                  <h1 className='review-header-tag'>md amuk tomuk</h1>
                  <h1 className='review-header-ratings'>ratings: 4/5</h1>
                </div>
                <div className="review-body">
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dignissimos laudantium! Pariatur minima inventore animi natus. Eum porro voluptatem tempora.</h1>
                </div>
              </div>
            
            </div>
            
            <div className="review-footer">
              <button>see all</button>
            </div>
            
            <div className="review-next-cont">
              <FaAngleDoubleRight className="review-prev-icon"/>
            </div>
          </div>

        </div>
      </div>
    )
}

export default Reviews