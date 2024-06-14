import Banner from "@/component/ui/Banner/Banner"
import LandingPage from "@/component/ui/home/LandingPage/LandingPage"
import Specialties from "@/component/ui/home/Specialties/Specialties"
import TopRatedCourse from "@/component/ui/home/TopRatedCourse/TopRatedCourse"
import WhyChooseUs from "@/component/ui/home/WhyChooseUs/WhyChooseUs"


const page = () => {
  return (
    <>
        {/* <Banner /> */}
        <LandingPage />
        <Specialties />
        <TopRatedCourse />
        <WhyChooseUs />
    </>
  )
}

export default page