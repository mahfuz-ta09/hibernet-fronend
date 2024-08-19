'use client'
import Image from 'next/image'
import '../../../css/courses/courses.css'
import { useEnroleCourseMutation, useGetCourseQuery } from '@/reduxApp/endPoints/courses/courseEndpoints'
import { toast } from 'sonner'
import { decodeToken } from '@/utils/jwt/decodeToken'
import { useRouter } from 'next/navigation'


const Courses = () => {
  const tokenData = decodeToken()
    const { data: courses } = useGetCourseQuery()
    const [ enroleCourse ] = useEnroleCourseMutation()
    const route = useRouter()


    const handleEnrole = async (id) =>{
      const data = {
          stdID: tokenData.id,
          stdEmail: tokenData.email,
      }

      if(!data.stdID  && !data.stdEmail){
        toast.error("Please login to access courses")
      }else{

        try{
          const res = await enroleCourse({ data , id  })
          if(res?.data?.data?.acknowledged){
              toast.success("Successfully enroled...")
          }else{
              toast.error(res?.data?.message)
          }
        }catch(err){
          console.log(err)
        }
      }

    }



    return (
        <div className="courses">
          {
            courses?.data?.map((course) => (
                <div key={course?._id} className="course">
                  <Image src={course?.image} width={1000} height={1000} className='course-image' alt="" />
                  <div className='course-detail'>
                    <p>{course?.name}</p>
                    <p>total classes: {course?.total_classes}</p>
                    <p>total assignments: {course?.total_assignment}</p>
                    <p>course fee: {course?.course_fee}</p>
                    <div className='course-button'>
                      <button className='cb-link1' onClick={()=>route.push(`/courses/${course?._id}`)}>Details</button>
                      <button className='cb-link2' onClick={()=>handleEnrole(course?._id)}>Enrol</button>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
    )
}

export default Courses