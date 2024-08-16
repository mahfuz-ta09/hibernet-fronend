// 'use client'
// import '../../../../css/courses/courseDetails.css'
// import { BiBook, BiRightArrow } from 'react-icons/bi'
// import { useEnroleCourseMutation, useGetSingleCourseQuery } from '@/reduxApp/endPoints/courses/courseEndpoints'
// import { decodeToken } from '@/utils/jwt/decodeToken'
// import { toast } from 'sonner'
import SingleCourseDetails from './SingleCourseDetails'


const page = ( { params }: { params :{ courseid : string} }) => {
    return <SingleCourseDetails id={params.courseid}/>
}

export default page