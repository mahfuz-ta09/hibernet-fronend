'use client'
import { useState } from "react"
import { MdDelete, MdEditSquare } from "react-icons/md"
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'
import AddCourse from "./AddCourse"
import { useGetCourseQuery } from "@/reduxApp/endPoints/courses/courseEndpoints"


const CoursesPage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const {data:courses} = useGetCourseQuery()



    return (
        <div className='schedule-container'>
            <div className="page-element">
                <h1>checkout all the courses: (total course: {courses?.meta?.total})</h1>
                <button onClick={()=>setIsModalOpen(!isModalOpen)}>add more?</button>
            </div>

            <div className="table-wrapper">
                <table className="fl-table">
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
                            {/* <th>Image</th> */}
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
                                    {/* <td>{course?.image}</td> */}
                                    <td><button><MdDelete className='text-3xl' /></button></td>
                                    <td><button><MdEditSquare className='text-3xl' /></button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            <AddCourse
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            ></AddCourse>

    </div>
    )
}

export default CoursesPage