'use client'
import '../../../../css/courses/courseDetails.css'
import { BiBook, BiRightArrow } from 'react-icons/bi'
import { useEnroleCourseMutation, useGetSingleCourseQuery } from '@/reduxApp/endPoints/courses/courseEndpoints'
import { decodeToken } from '@/utils/jwt/decodeToken'
import { toast } from 'sonner'


const page = ( { params }: { params :{ courseid : string} }) => {
    const { data , isLoading } = useGetSingleCourseQuery(params?.courseid)
    const tokenData = decodeToken()
    const [ enroleCourse ] = useEnroleCourseMutation()


    const handleEnrole = async (id: string) =>{
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

    const handleAddCourseId = () =>{
        // localStorage.setItem("courses",params?.courseid)
    }

    return (
        <div className='course-details'>
            <div className='course-details-container'>
                
                <h1 className="course-title">{data?.data?.name}</h1>

                <div className="course-details-part">
                    <div className="course-details-part-info">
                        <p>Total classes:</p>
                        <h1>{data?.data?.total_classes}</h1>
                        <BiRightArrow className='info-icon'/>
                    </div>
                    <div className='cls-info'>
                        <h1>{data?.data?.explain_classes}</h1>
                    </div>
                </div>
 
                <div className="course-details-part">
                    <div className="course-details-part-info">
                        <p>Total assignments:</p>
                        <h1>{data?.data?.total_assignment}</h1>
                        <BiRightArrow className='info-icon'/>
                    </div>
                    <div className='cls-info'>
                        <h1>{data?.data?.explain_assignment}</h1>
                    </div>
                </div>

                <div className="course-details-part">
                    <div className="course-details-part-info">
                        <p>Total exams:</p>
                        <h1>{data?.data?.total_exams}</h1>
                        <BiRightArrow className='info-icon'/>
                    </div>
                    <div className='cls-info'>
                        <h1>{data?.data?.explain_exams}</h1>
                    </div>
                </div>

                <div className="course-details-part">
                    <div className="course-details-part-info">
                        <p>Course duration:</p>
                        <h1>{data?.data?.duration} months</h1>
                        <BiRightArrow className='info-icon'/>
                    </div>
                    <div className='cls-info'>
                        <h1>{data?.data?.explain_durations}</h1>
                    </div>
                </div>

                <div className="course-additional-time">
                    <div className="course-additional">
                        <h1>Enrolement start: {data?.data?.enroled_start}</h1>
                        <h1>Enrolement start: {data?.data?.enroled_end}</h1>
                    </div>

                    <div className="course-additional">
                        <h1>Enrolement start: {data?.data?.enroled_start}</h1>
                        <h1>Enrolement start: {data?.data?.enroled_end}</h1>
                    </div>
                </div>

                <div className="course-additional">
                    <h1>Course fee: {data?.data?.course_fee} taka</h1>
                    <h1>Total enroled: {data?.data?.total_enroled}</h1>
                </div>

                <div className="course-additional">
                    <div className='decription-text'>
                        <BiBook />
                        <h1>What will you learn</h1>
                    </div>
                    <p>{data?.data?.description}</p>
                </div>
                <div className="btn-container">
                    <button onClick={() => handleEnrole(params?.courseid)}>Enrol</button>
                    <button onClick={handleAddCourseId}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default page