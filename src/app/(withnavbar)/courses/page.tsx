import Image from 'next/image'
import '../../../css/courses/courses.css'
import banner from '../../../../public/assets/login-page.jpeg'



const CoursesPage = () => {
  return (
    <div className="course-page">
      <div className="course-content">
        <h1>Our Courses</h1>

        <div className="courses">

          <div className="course">
            <Image src={banner} className='course-image' alt="" />
            <div className='course-detail'>
              <p>Math First Paper</p>
              <p>total class: 30</p>
              <p>total assignment:30</p>
              <p>course fee:3000</p>
              <div className='course-button'>
                <button>Details</button>
                <button>Enrol</button>
              </div>
            </div>
          </div>
          <div className="course">
            <Image src={banner} className='course-image' alt="" />
            <div className='course-detail'>
              <p>Math First Paper</p>
              <p>total class: 30</p>
              <p>total assignment:30</p>
              <p>course fee:3000</p>
              <div className='course-button'>
                <button>Details</button>
                <button>Enrol</button>
              </div>
            </div>
          </div>
          <div className="course">
            <Image src={banner} className='course-image' alt="" />
            <div className='course-detail'>
              <p>Math First Paper</p>
              <p>total class: 30</p>
              <p>total assignment:30</p>
              <p>course fee:3000</p>
              <div className='course-button'>
                <button>Details</button>
                <button>Enrol</button>
              </div>
            </div>
          </div>
          <div className="course">
            <Image src={banner} className='course-image' alt="" />
            <div className='course-detail'>
              <p>Math First Paper</p>
              <p>total class: 30</p>
              <p>total assignment:30</p>
              <p>course fee:3000</p>
              <div className='course-button'>
                <button>Details</button>
                <button>Enrol</button>
              </div>
            </div>
          </div>
          <div className="course">
            <Image src={banner} className='course-image' alt="" />
            <div className='course-detail'>
              <p>Math First Paper</p>
              <p>total class: 30</p>
              <p>total assignment:30</p>
              <p>course fee:3000</p>
            </div>
              <div className='course-button'>
                <button>Details</button>
                <button>Enrol</button>
              </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CoursesPage