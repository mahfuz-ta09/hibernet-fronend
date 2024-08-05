import Link from 'next/link'
import '../../../../css/home/Specialties/Specialties.css'
import ShowSpecialties from './ShowSpecialties'


const Specialties = () => {

    return (
        <div className="specialities-holder">
            <div className="specialities-header">
                <h1>Our Areas of Specialization</h1>
                <h2>Find your need here</h2>
            </div>
            <div className="specilties-card">
                <ShowSpecialties />
            </div>
            <Link className='sp-navigate' href="/">View All</Link>
        </div>
    )
}

export default Specialties