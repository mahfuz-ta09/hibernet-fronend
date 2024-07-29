import Image from 'next/image'
import '../../../css/courses/courses.css'
import banner from '../../../../public/assets/login-page.jpeg'
import Link from 'next/link'
import courses from '../../../../public/jsondata/courses.json'


const CoursesPage = () => {
  
  return (
    <div className="course-page">
      <div className="course-content">
        <h1>Our Courses</h1>

        <div className="courses">
          {
            courses?.map(course => (
                <div key={course?._id} className="course">
                  <Image src={banner} className='course-image' alt="" />
                  <div className='course-detail'>
                    <p>{course?.name}</p>
                    <p>total classes: {course?.total_classes}</p>
                    <p>total assignments: {course?.total_assignment}</p>
                    <p>course fee: {course?.course_fee}</p>
                    <div className='course-button'>
                      <Link className='cb-link1' href={`/courses/${course?._id}`}>Details</Link>
                      <Link className='cb-link2' href={`/courses/${1}`}>Enrol</Link>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default CoursesPage