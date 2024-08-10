import '../../../../css/home/TopRatedCourse/TopRatedCourse.css'
import Link from 'next/link'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import TopRatedCourseClient from './TopRatedCourseClient'

const TopRatedCourse = () => {

    return (
        <div className='top-rated-container'>
            <div className='ratedCourse-holder'>
                <div className='ratedCourse-header'>
                    <h1>Our Top Rated Courses<BsReverseLayoutTextSidebarReverse className='ratedCourse-header-icon'/></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, impedit.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                <TopRatedCourseClient />
                <div className='see-btn'>
                    <Link  href="/courses" className="seemore">See More</Link>
                </div>
            </div>
        </div>
    )
}

export default TopRatedCourse