import SingleCourseDetails from './SingleCourseDetails'

const page = ( { params }: { params :{ courseid : string} }) => {
    return <SingleCourseDetails id={params.courseid}/>
}

export default page