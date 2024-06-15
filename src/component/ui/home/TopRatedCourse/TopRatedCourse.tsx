import Image from 'next/image'
import '../../../../css/home/TopRatedCourse/TopRatedCourse.css'

const TopRatedCourse = () => {
    let toprated:any = []

    return (
        <div className='top-rated-container'>
            <div className='ratedCourse-holder'>
                <div className='ratedCourse-header'>
                    <h1>Our Top Rated Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, impedit.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                <div className='ratedCard-holder'> 
                    {
                        toprated?.map((top:any)=>(
                            <div key={top?.id} className='courseCard-details'> 
                                <Image src={top?.profilePhoto} alt="" />
                                <div className='courseCard-data'>
                                    <h1>{top?.name}</h1>
                                    <h2>{top?.qualification}, {top?.designation}</h2>
                                    <div className='courseCard-addition'>
                                        <h3><span>X </span>{top?.address}</h3>
                                        <h3><span>X </span>{top?.apointmentFee}</h3>
                                    </div>
                                </div>
                                <div className='courseCard-button'>
                                    <button className='button-1'>Book Now</button>
                                    <button className='button-2'>View Profile</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className='see-btn'>
                    <button className="seemore">See More</button>
                </div>
            </div>
        </div>
    )
}

export default TopRatedCourse