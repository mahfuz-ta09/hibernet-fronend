'use client'
import { useState } from "react"
import { MdDelete, MdEditSquare } from "react-icons/md"
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'
import AddPanel from "./AddPanel"
import { useGetAllAdminQuery, useUpdateAdminStatusMutation } from "@/reduxApp/endPoints/superAdmin/createAdminEndpoints"
import { toast } from "sonner"



const ManageUsersPage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const { data: admins } = useGetAllAdminQuery()
    const [ updateAdminStatus , {}] = useUpdateAdminStatusMutation()


    const handleUpdateStatus = async( status: boolean ,id: string) =>{
        try{
            const res = await updateAdminStatus({ status , id })
            if(res?.data?.data?.modifiedCount === 1){
                toast.success("Admin status updated!")
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
                    <h1>manage your website users:(Total admin: {admins?.meta?.total})</h1>
                    <button onClick={()=>setIsModalOpen(!isModalOpen)}>add panel memeber?</button>
                </div>

                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th>serial</th>
                                <th>id</th>
                                <th>email</th>
                                <th>status</th>
                                <th>delete</th>
                                <th>edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admins?.data?.map(( admin: any , index: number ) => (
                                    <tr key={admin?._id}>
                                        <td>{index+1}</td>
                                        <td>{admin?._id}</td>
                                        <td>{admin?.email}</td>
                                        <td>{admin?.status? "active" : "inactive"}</td>
                                        <td><button><MdDelete className='text-3xl' /></button></td>
                                        <td><button><MdEditSquare onClick={()=>handleUpdateStatus(!admin?.status,admin?._id)} className='text-3xl' /></button></td>
                                    </tr>
                                ))
                            }
                            
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