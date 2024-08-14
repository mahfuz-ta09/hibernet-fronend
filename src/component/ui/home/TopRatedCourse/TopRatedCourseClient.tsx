"use client"
import Image from 'next/image'
import '../../../../css/home/TopRatedCourse/TopRatedCourse.css'
import { useGetCourseQuery } from '@/reduxApp/endPoints/courses/courseEndpoints'
import { useRouter } from 'next/navigation'
import { addToCart, isAddedToCart, removeFromCart } from '@/utils/CourseAction'
import { useEffect } from 'react'
import { BsFillPinAngleFill } from 'react-icons/bs'
import { ImCart } from 'react-icons/im'


const TopRatedCourseClient = () => {
    const router = useRouter()
    const { data: courses } = useGetCourseQuery()
    let toprated:any = courses?.data?.slice(0,3)


    const handleAddToCart = async( id: string , name: string) => {
        addToCart(id,name)
    }

    const handleRemoveFromCart = async( id: string ) => {
        removeFromCart(id)
    }

    return (
        <div className='ratedCard-holder'> 
        {
            toprated?.map((top:any)=>(
                <div key={top?._id} className='courseCard-details'> 
                    <Image src={top?.image} height={1000} width={1000} className='courseCard-details-img' alt="" />
                    <div className='courseCard-data'>
                        <h1>{top?.name}</h1>
                        <h2>duration:{top?.duration}, class start:{top?.class_starts}</h2>
                        <div className='courseCard-addition'>
                            <h3><span>Exams: </span>{top?.total_exams}</h3>
                            <h3><span>Fee: </span>{top?.course_fee}</h3>
                        </div>
                    </div>
                    <div className='courseCard-button'>
                        { isAddedToCart(top?._id) ? 
                            <button onClick={()=>handleRemoveFromCart(top?._id)} className='button-1'> <BsFillPinAngleFill /> </button> :
                            <button onClick={()=>handleAddToCart(top?._id,top?.name)} className='button-1'><ImCart /></button>}
                        <button onClick={()=>router.push(`/courses/${top?._id}`)} className='button-2'>details</button>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default TopRatedCourseClient