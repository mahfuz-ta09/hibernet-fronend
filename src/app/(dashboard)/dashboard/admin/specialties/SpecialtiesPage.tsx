"use client"
import { MdDelete } from 'react-icons/md'
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'
import { useState } from 'react'
import AddSpecialties from './AddSpecialties'
import { useGetSpecialtiesQuery } from '@/reduxApp/endPoints/specialties/specialtiesEndpoints'
import { spType } from '@/types/common'


const SpecialtiesPage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const { data:specialties } = useGetSpecialtiesQuery()


    return (
        <div className='schedule-container'>
            
            <div className="page-element">
                <h1>checkout all the specialties:(available documents: {specialties?.meta})</h1>
                <button onClick={()=>setIsModalOpen(!isModalOpen)}>add more?</button>
            </div>

            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>URL</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            specialties?.data?.map((specialty:spType) => (
                                <tr key={specialty._id}>
                                    <td className='tbl-data'>{specialty._id}</td>
                                    <td className='tbl-data'>{specialty.name}</td>
                                    <td className='tbl-data'>{specialty.url}</td>
                                    <td className='tbl-data'><button><MdDelete className='text-3xl' /></button></td>
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