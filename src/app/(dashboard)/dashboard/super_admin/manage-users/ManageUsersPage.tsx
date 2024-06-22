'use client'
import { useState } from "react"
import { MdDelete, MdEditSquare } from "react-icons/md"
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'


const ManageUsersPage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
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
                <div className={isModalOpen ? "modal-container modalshow" : "modal-container modalhide"}>
                    <div className="modal-content">
                        <div className="hide-modal">
                            <button onClick={()=>setIsModalOpen(!isModalOpen)}>X</button>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default ManageUsersPage