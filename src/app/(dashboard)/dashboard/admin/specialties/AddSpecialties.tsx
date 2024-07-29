import convertFormData from '@/utils/convertFormData'
import '../../../../../css/dashBoard/specialties/specialtiesStyle.css'
import { useForm, SubmitHandler } from "react-hook-form"
import { usePostSpecialtiesMutation } from '@/reduxApp/endPoints/specialties/specialtiesEndpoints'


type Inputs = {
    name : string
    file : string
}
  

const AddSpecialties = ({ isModalOpen , setIsModalOpen }:any) => {
    const [postSpecialties ] = usePostSpecialtiesMutation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        const formData = convertFormData(data)
        try{
            const res = await postSpecialties(formData)
            console.log(res)
        }catch(err:any){
            console.log(err)
        }
    }

    return (
        <div className={isModalOpen ? "modal-container modalshow" : "modal-container modalhide"}>
            <div className="modal-content">
                <div className="hide-modal">
                    <h1 className="modal-text">create new specialty</h1>
                    <button onClick={()=>setIsModalOpen(!isModalOpen)}>X</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="specialties-input">
                        <input {...register("name")} placeholder='specialties' className='text-input' type="text" />
                        <input {...register("file")} className='file-input' type="file" />
                    </div>
                    <input className='submit-btn' type="submit" />
                </form>
            </div>
        </div>
    )
}

export default AddSpecialties