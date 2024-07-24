import { useState } from 'react'
import apartmentsData from './../../data/apartmentsData.json'
import ApartmentCard from '../ApartmentCard/ApartmentCard'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState(apartmentsData)

    const deleteApartment = apartmentId => {
        const filteredApartments = apartments.filter(elm => elm.id != apartmentId)
        setApartments(filteredApartments)
    }

    return (
        <div className='ApartmentsList'>
            <h1>Apartamentos</h1>
            {
                apartments.map(elm => {

                    return (

                        <ApartmentCard key={elm.id} {...elm} deleteApartment={deleteApartment} />

                    )
                })
            }
        </div>
    )


}

export default ApartmentsList