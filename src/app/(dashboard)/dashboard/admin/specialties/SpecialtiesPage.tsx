"use client"
import { MdDelete } from 'react-icons/md'
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'
import {  useState } from 'react'
import AddSpecialties from './AddSpecialties'
import { useDeleteSpecialtyMutation, useGetSpecialtiesQuery } from '@/reduxApp/endPoints/specialties/specialtiesEndpoints'
import { toast } from 'sonner'


const SpecialtiesPage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const  { data : specialty }  = useGetSpecialtiesQuery()
    const [deleteSpecialty , {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useDeleteSpecialtyMutation()


    const hnadleDelteSp = async( id : string ) => {
        try{
            const res = await deleteSpecialty(id)

            if(res?.data?.data?.deletedCount === 1){
                toast.success("Deleted Successfully!!!")
            }else{
                toast.error(res?.data?.errorMessage)
            }
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div className='schedule-container'>
            
            <div className="page-element">
                <h1>checkout all the specialties:(available documents: {specialty?.meta?.total})</h1>
                <button onClick={()=>setIsModalOpen(!isModalOpen)}>add more?</button>
            </div>

            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>id</th>
                            <th>name</th>
                            <th>URL</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            specialty?.data?.map((specialty:any, index:number) => (
                                <tr key={specialty._id}>
                                    <td className='tbl-data'>{index+1}</td>
                                    <td className='tbl-data'>{specialty._id}</td>
                                    <td className='tbl-data'>{specialty.name}</td>
                                    <td className='tbl-data'>{specialty.url}</td>
                                    <td className='tbl-data'><button><MdDelete onClick={()=>hnadleDelteSp(specialty._id)} className='text-3xl' /></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <AddSpecialties
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            ></AddSpecialties>
        </div>
  )
}

export default SpecialtiesPage