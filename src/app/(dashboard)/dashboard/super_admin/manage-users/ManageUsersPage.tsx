'use client'
import { useState } from "react"
import { MdDelete, MdEditSquare } from "react-icons/md"
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'
import AddPanel from "./AddPanel"
import { useGetAllAdminQuery, useUpdateAdminStatusMutation } from "@/reduxApp/endPoints/superAdmin/createAdminEndpoints"



const ManageUsersPage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const { data: admins } = useGetAllAdminQuery()
    const [ updateAdminStatus , {}] = useUpdateAdminStatusMutation()


    const handleUpdateStatus = async( status: string ,id: string) =>{
        try{
            const res = await updateAdminStatus({ status , id })
        }catch(err){
            console.log(err)
        }
    }
    console.log(admins)
    return (
        <div className='schedule-container'>
                <div className="page-element">
                    <h1>manage your website users:</h1>
                    <button onClick={()=>setIsModalOpen(!isModalOpen)}>add panel memeber?</button>
                </div>

                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>icon name</th>
                                <th>Active</th>
                                <th>delete</th>
                                <th>edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>Content 1</td>
                                <td>Content 1</td>
                                <td>inactive</td>
                                <td>inactive</td>
                                <td><button><MdDelete className='text-3xl' /></button></td>
                                <td><button><MdEditSquare className='text-3xl' /></button></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                <AddPanel 
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
        </div>
  )
}

export default ManageUsersPage