"use client"
import { MdDelete, MdEditSquare } from 'react-icons/md'
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'
import { useState } from 'react'
import AddSpecialties from './AddSpecialties'


const SpecialtiesPage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)




    return (
        <div className='schedule-container'>
            
            <div className="page-element">
                <h1>checkout all the specialties:</h1>
                <button onClick={()=>setIsModalOpen(!isModalOpen)}>add more?</button>
            </div>

            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>icon name</th>
                            <th>delete</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td><button><MdDelete className='text-3xl' /></button></td>
                            <td><button><MdEditSquare className='text-3xl' /></button></td>
                        </tr>
                        <tr>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td><button><MdDelete className='text-3xl' /></button></td>
                            <td><button><MdEditSquare className='text-3xl' /></button></td>
                        </tr>
                        <tr>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td><button><MdDelete className='text-3xl' /></button></td>
                            <td><button><MdEditSquare className='text-3xl' /></button></td>
                        </tr>
                        <tr>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td>Content 1</td>
                            <td><button><MdDelete className='text-3xl' /></button></td>
                            <td><button><MdEditSquare className='text-3xl' /></button></td>
                        </tr>
                        
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