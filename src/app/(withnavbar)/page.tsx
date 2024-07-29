import BlogStories from "@/component/ui/home/BlogStories/BlogStories"
import FeedDetails from "@/component/ui/home/FeedDetails/FeedDetails"
import Footer from "@/component/ui/home/Footer/Footer"
import LandingPage from "@/component/ui/home/LandingPage/LandingPage"
import Reviews from "@/component/ui/home/Reviews/Reviews"
import Specialties from "@/component/ui/home/Specialties/Specialties"
import TopRatedCourse from "@/component/ui/home/TopRatedCourse/TopRatedCourse"
import WhyChooseUs from "@/component/ui/home/WhyChooseUs/WhyChooseUs"


const page = () => {
  return (
    <>
        <LandingPage />
        <Specialties />
        <TopRatedCourse />
        <BlogStories />
        <FeedDetails />
        <Reviews />
        <WhyChooseUs />
        <Footer />
    </>
  )
}

export default page