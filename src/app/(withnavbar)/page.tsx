import Footer from "@/component/ui/home/Footer/Footer"
import LandingPage from "@/component/ui/home/LandingPage/LandingPage"
import Specialties from "@/component/ui/home/Specialties/Specialties"
import TopRatedCourse from "@/component/ui/home/TopRatedCourse/TopRatedCourse"
import WhyChooseUs from "@/component/ui/home/WhyChooseUs/WhyChooseUs"


const page = () => {
  return (
    <>
        <LandingPage />
        <Specialties />
        <TopRatedCourse />
        <WhyChooseUs />
        <Footer />
    </>
  )
}

export default page