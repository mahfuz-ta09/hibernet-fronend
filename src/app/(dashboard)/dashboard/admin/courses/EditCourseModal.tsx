'use Client'
import { useUpdateCourseMutation } from '@/reduxApp/endPoints/courses/courseEndpoints'
import convertFormData from '@/utils/convertFormData'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

type Inputs = {
    name : string
    file : string
    total_classes: number
    explain_classes: string
    total_assignment: number
    explain_assignment: string
    total_exams: number
    explain_exams: string
    course_fee: number
    duration: number
    explain_durations: string
    class_starts: string
    class_ends: string
    enroled_start: string
    enroled_end: string
    description: string
}

const EditCourseModal = ({ IsEdisModalOpen , setIsEdisModalOpen , editCourseID , editCourseName }:any) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const [ updateCourse ] = useUpdateCourseMutation()


    
    const onSubmit: SubmitHandler<Inputs> = async( data ) => {
 
        const formData = convertFormData(data)
        try{
            const res = await updateCourse({ data: formData , id: editCourseID })

            if(res?.data?.data?.acknowledged){
                toast.success("Insertion successful!!!")
                setIsEdisModalOpen(false)
                reset()
            }else{
                toast.error(res?.data?.data?.message)
            }
        }catch(err:any){
            console.log("err:",err)
        }
    }

    

    return (    
        <div className={IsEdisModalOpen ? "modal-container modalshow" : "modal-container modalhide"}>
        <div className="modal-content">
            <div className="hide-modal">
                <h1 className="modal-text">Edit {editCourseName} now?</h1>
                <button onClick={()=>setIsEdisModalOpen(!IsEdisModalOpen)}>X</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="specialties-input">
                    <input {...register("name")} placeholder='Course name' className='text-input' type="text" />
                    <input {...register("total_classes")} placeholder='Total classes' className='text-input' type="number" />
                    <input {...register("total_assignment")} placeholder='Total assignments' className='text-input' type="number" />
                    <input {...register("total_exams")} placeholder='Total exams' className='text-input' type="number" />
                    <input {...register("course_fee")} placeholder='Course fee' className='text-input' type="number" />
                    <input {...register("duration")} placeholder='Course duration' className='text-input' type="number" />
                    <textarea {...register("description")} placeholder='Course description' className='text-input' />
                    <textarea {...register("explain_durations")} placeholder='How duration will work?' className='text-input'  />
                    <textarea {...register("explain_classes")} placeholder='How classes will work?' className='text-input' />
                    <textarea {...register("explain_assignment")} placeholder='how assignments will work?' className='text-input' />
                    <textarea {...register("explain_exams")} placeholder='How exams will work?' className='text-input' />
                    {/* <h1>course starting date:</h1> */}
                    <input {...register("class_starts")} placeholder='When will class starts?' className='text-input' type="date" />
                    <input {...register("class_ends")} placeholder='When will class ends?' className='text-input' type="date" />
                    <input {...register("enroled_start")} placeholder='Enrolement starts' className='text-input' type="date" />
                    <input {...register("enroled_end")} placeholder='Enrolement ends' className='text-input' type="date" />
                    <input {...register("file")} className='file-input' type="file" />
                </div>
                <input className='submit-btn' type="submit" />
            </form>

        </div>
    </div>
    )
}

export default EditCourseModal