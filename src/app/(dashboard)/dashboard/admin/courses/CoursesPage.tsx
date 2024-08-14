'use client'
import { useState } from "react"
import { MdDelete, MdEditSquare } from "react-icons/md"
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'
import AddCourse from "./AddCourse"
import { useDeleteCourseMutation, useGetCourseQuery } from "@/reduxApp/endPoints/courses/courseEndpoints"
import { Hourglass } from "react-loader-spinner"
import { toast } from "sonner"
import EditCourseModal from "./EditCourseModal"
import Image from "next/image"


const CoursesPage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [IsEdisModalOpen,setIsEdisModalOpen] = useState(false)
    const [editCourseID,setEditCourseID] = useState("")
    const [editCourseName,setEditCourseName] = useState("")
    const { data:courses , isLoading } = useGetCourseQuery()
    const [ deleteCourse ] = useDeleteCourseMutation()

    const handleDelete = async( id: string ) =>{
        try{
            const res = await deleteCourse(id)

            if(res?.data?.data?.acknowledged){
                toast.success("Successfully deleted!!!")
            }else{
                toast.error(res?.data?.message)
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='schedule-container'>
            <div className="page-element">
                <h1>checkout all the courses: (total course: {courses?.meta?.total})</h1>
                <button onClick={()=>setIsModalOpen(!isModalOpen)}>add more?</button>
            </div>

            <div className="table-wrapper">
                {!isLoading ? <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>id</th>
                            <th>name</th>
                            <th>Course Fee</th>
                            <th>Duration</th>
                            <th>Enrol starts</th>
                            <th>Enrol ends</th>
                            <th>Course starts</th>
                            <th>Course ends</th>
                            <th>Assignments</th>
                            <th>Classes</th>
                            <th>Exams</th>
                            <th>Enroled</th>
                            <th>Image</th>
                            <th>delete</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses?.data?.map((course:any,index:number) => (
                                <tr key={course?._id}>
                                    <td>{index+1}</td>
                                    <td>{course?._id}</td>
                                    <td>{course?.name}</td>
                                    <td>{course?.course_fee}</td>
                                    <td>{course?.duration}</td>
                                    <td>{course?.enroled_start}</td>
                                    <td>{course?.enroled_end}</td>
                                    <td>{course?.class_starts}</td>
                                    <td>{course?.class_ends}</td>
                                    <td>{course?.total_assignment}</td>
                                    <td>{course?.total_classes}</td>
                                    <td>{course?.total_exams}</td>
                                    <td>{course?.total_enroled}</td>
                                    <td><Image src={course?.image} width={30} height={30} alt=''/></td>
                                    <td><button><MdDelete     onClick={()=>handleDelete(course._id)} className='text-3xl' /></button></td>
                                    <td><button><MdEditSquare onClick={()=>(setIsEdisModalOpen(true),setEditCourseID(course?._id),setEditCourseName(course?.name))} className='text-3xl' /></button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>: 
                    (<Hourglass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }}
                        wrapperClass="loader-class"
                        colors={['#fff', '#fff']}
                    />
                )}
            </div>

            <EditCourseModal
                IsEdisModalOpen={IsEdisModalOpen}
                setIsEdisModalOpen={setIsEdisModalOpen}
                editCourseName={editCourseName}
                editCourseID={editCourseID}
            ></EditCourseModal>

            <AddCourse
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            ></AddCourse>

    </div>
    )
}

export default CoursesPage