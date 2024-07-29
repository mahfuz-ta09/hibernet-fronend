import { BsChevronDoubleRight, BsChevronRight } from 'react-icons/bs'
import '../../../../css/feed/feed.css'
import { GiCancel } from 'react-icons/gi'

const FeedNav = () => {
    return (
        <div className="question-nav">
            <div className="my-question">
                <h1 className="tag-1">My questions</h1>
                
                <div className='question-list'>
                    <div className='list-item'>
                        <h1>Lorem ipsum dolor sit amet...</h1>
                        <button><BsChevronRight /></button>
                        <button><GiCancel /></button>
                    </div>
                    <div className='list-item'>
                        <h1>Lorem ipsum dolor sit amet...</h1>
                        <button><BsChevronRight /></button>
                        <button><GiCancel /></button>
                    </div>
                    <div className='list-item'>
                        <h1>Lorem ipsum dolor sit amet...</h1>
                        <button><BsChevronRight /></button>
                        <button><GiCancel /></button>
                    </div>
                </div>

                <button  className='see-question-btn'>see all <BsChevronDoubleRight /></button>
            </div>


            <div className="my-question">
                <h1 className="tag-1">Saved question</h1>
                
                <div className='question-list'>
                    <div className='list-item'>
                        <h1>Lorem ipsum dolor sit amet...</h1>
                        <button><BsChevronRight /></button>
                        <button><GiCancel /></button>
                    </div>
                    
                    
                </div>

            </div>

        </div>
    )
}

export default FeedNav