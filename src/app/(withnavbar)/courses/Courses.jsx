'use client'
import Image from 'next/image'
import '../../../css/courses/courses.css'
import Link from 'next/link'
import { useGetCourseQuery } from '@/reduxApp/endPoints/courses/courseEndpoints'

const Courses = () => {
    const {data:courses} = useGetCourseQuery()


    return (
        <div className="courses">
          {
            courses?.data?.map(course => (
                <div key={course?._id} className="course">
                  <Image src={course?.image} width={1000} height={1000} className='course-image' alt="" />
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
    )
}

export default Courses