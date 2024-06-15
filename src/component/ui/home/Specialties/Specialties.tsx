import Image from 'next/image'
import '../../../../css/home/Specialties/Specialties.css'


type spType = {
    icon: string,
    id: string,
    title:string
}

const Specialties = () => {
    let specialties:any = []
    

    return (
        <div className="specialities-holder">
            <div className="specialities-header">
                <h1>Our Areas of Specialization</h1>
                <h2>Find your need here</h2>
            </div>
            <div className="specilties-card">
                {
                    specialties?.map((specialty: spType) =>(
                        <div className="card-sp" key={specialty?.id}>
                            <Image src={specialty?.icon} alt="" />
                            <h1>{specialty?.title}</h1>
                        </div>
                    ))
                }
                
            </div>
            <button>View All</button>
        </div>
    )
}

export default Specialties