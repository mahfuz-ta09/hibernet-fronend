'use client'
import '../../../../css/courses/courseDetails.css'
import allCourses from '../../../../../public/jsondata/courses.json'
import { BiBook, BiRightArrow } from 'react-icons/bi'



const page = ( { params }: { params :{ courseid : string} }) => {
    const singleCourse = allCourses?.filter(course => course._id === params?.courseid)

    const handleAddCourseId = () =>{
        // localStorage.setItem("courses",params?.courseid)
    }


    return (
        <div className='course-details'>
            <div className='course-details-container'>
                
                <h1 className="course-title">{singleCourse[0].name}</h1>

                <div className="course-details-part">
                    <div className="course-details-part-info">
                        <p>Total classes:</p>
                        <h1>{singleCourse[0].total_classes}</h1>
                        <BiRightArrow className='info-icon'/>
                    </div>
                    <div className='cls-info'>
                        <h1>{singleCourse[0].explain_classes}</h1>
                    </div>
                </div>

                <div className="course-details-part">
                    <div className="course-details-part-info">
                        <p>Total assignments:</p>
                        <h1>{singleCourse[0].total_assignment}</h1>
                        <BiRightArrow className='info-icon'/>
                    </div>
                    <div className='cls-info'>
                        <h1>{singleCourse[0].explain_assignment}</h1>
                    </div>
                </div>

                <div className="course-details-part">
                    <div className="course-details-part-info">
                        <p>Total exams:</p>
                        <h1>{singleCourse[0].total_exams}</h1>
                        <BiRightArrow className='info-icon'/>
                    </div>
                    <div className='cls-info'>
                        <h1>{singleCourse[0].explain_exams}</h1>
                    </div>
                </div>

                <div className="course-details-part">
                    <div className="course-details-part-info">
                        <p>Course duration:</p>
                        <h1>{singleCourse[0].duration} months</h1>
                        <BiRightArrow className='info-icon'/>
                    </div>
                    <div className='cls-info'>
                        <h1>{singleCourse[0].explain_durations}</h1>
                    </div>
                </div>

                <div className="course-additional-time">
                    <div className="course-additional">
                        <h1>Enrolement start: {singleCourse[0].enroled_start}</h1>
                        <h1>Enrolement start: {singleCourse[0].enroled_end}</h1>
                    </div>

                    <div className="course-additional">
                        <h1>Enrolement start: {singleCourse[0].enroled_start}</h1>
                        <h1>Enrolement start: {singleCourse[0].enroled_end}</h1>
                    </div>
                </div>

                <div className="course-additional">
                    <h1>Course fee: {singleCourse[0].course_fee} taka</h1>
                    <h1>Total enroled: {singleCourse[0].total_enroled}</h1>
                </div>

                <div className="course-additional">
                    <div className='decription-text'>
                        <BiBook />
                        <h1>What will you learn</h1>
                    </div>
                    <p>Total enroled: {singleCourse[0].description}</p>
                </div>
                <div className="btn-container">
                    <button>Enrol</button>
                    <button onClick={handleAddCourseId}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default page