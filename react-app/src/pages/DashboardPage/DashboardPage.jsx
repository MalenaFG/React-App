import ApartmentsList from "../../components/ApartmentsList/ApartmentsList"
import NewApartmentForm from "../../components/NewApartmentForm/NewApartmentForm"
import { results } from './../../data/apartments.json'
import { useState } from 'react'

const DashboardPage = () => {

    const [apartments, setApartments] = useState(results)

    const removeApartment = apartmentId => {
        const filteredApartments = apartments.filter(elm => elm.id != apartmentId)
        setApartments(filteredApartments)
    }

    const addApartment = newApartment => {
        const allApartments = [newApartment, ...apartments]
        setApartments(allApartments)
    }

    return (

        <div className="DashboardPage">
            <NewApartmentForm addApartment={addApartment} />
            <hr />
            <h1>Panel principal</h1>
            <hr />
            <ApartmentsList apartments={apartments} removeApartment={removeApartment} />
        </div>
    )
}

export default DashboardPage