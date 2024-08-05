"use client"
import Image from 'next/image'
import '../../../../css/home/Specialties/Specialties.css'
import { useGetSpecialtiesQuery } from '@/reduxApp/endPoints/specialties/specialtiesEndpoints'
import { spType } from '@/types/common'


const ShowSpecialties = () => {
    const { data:specialties } = useGetSpecialtiesQuery()

    return (
        <div className="specilties-card">
            {
                specialties?.data?.slice(0,5).map((specialty: spType) =>(
                    <div className="card-sp" key={specialty?._id}>
                        <Image src={specialty?.url} className='card-sp_img' width={100} height={100} alt="" />
                        <h1>{specialty?.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default ShowSpecialties