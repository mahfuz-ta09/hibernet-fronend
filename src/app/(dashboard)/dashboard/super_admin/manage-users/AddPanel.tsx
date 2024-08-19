'use client'
import { useCreateAdminMutation } from "@/reduxApp/endPoints/superAdmin/createAdminEndpoints";
import convertFormData from "@/utils/convertFormData";
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner";

type Inputs = {
    email: string,
    password: string,
}


const AddPanel = ({ isModalOpen , setIsModalOpen }:any ) => {
    const { register, 
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const [createAdmin , {}] = useCreateAdminMutation()


    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        const formData = convertFormData(data)
        try{
            const res = await createAdmin(formData)
            reset()
            if(res?.data?.data?.acknowledged){
                toast.success("New admin added!")
            }else{
                toast.error(res?.data?.errorMessage)
            }
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div className={isModalOpen ? "modal-container modalshow" : "modal-container modalhide"}>
            <div className="modal-content">
                <div className="hide-modal">
                    <h1>Add new admin?</h1>
                    <button onClick={()=>setIsModalOpen(!isModalOpen)}>X</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="specialties-input">
                        <input placeholder="Enter members email?" className='text-input' type="email" {...register("email", { required: true })}/>
                        <input placeholder="Enter members password?" className='text-input' type="password" {...register("password", { required: true })}/>
                    </div>
                    <input className='submit-btn' type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default AddPanel