import { BiArrowToTop, BiPencil } from 'react-icons/bi'
import '../../../css/feed/feed.css'
import TopQuestions from './feedModule/TopQuestions'
import LatestQuestion from './feedModule/LatestQuestion'
import FeedNav from './feedModule/FeedNav'
import AskQuestion from './feedModule/AskQuestion'



const FeedHome = () => {
    return (
        <div className='feed-container'>
            <div className="feed-content">
                
                <div className="question-part">
                    
                    <AskQuestion />

                    <div className="latest">
                        <div className="latest-title">
                            <BiPencil className='latest-icon'/> 
                            <h1>Latest questions</h1>
                        </div>
                        <LatestQuestion />
                    </div>



                    <div className="latest">
                        <div className="latest-title">
                            <BiArrowToTop className='latest-icon'/> 
                            <h1>Top questions</h1>
                        </div>
                        <TopQuestions />
                    </div>

                </div>

                <FeedNav />
                
            </div>
        </div>
    )
}

export default FeedHome