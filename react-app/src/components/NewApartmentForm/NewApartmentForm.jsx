import { useState } from 'react'
import './NewApartmentForm.css'
const NewApartmentForm = ({ addApartment }) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [bathrooms, setBathrooms] = useState(0)
    const [city, setCity] = useState("")
    const [rating, setRating] = useState(0)

    const handleNameChange = event => {
        const { value } = event.target
        setName(value)
    }

    const handlePriceChange = event => {
        const { value } = event.target
        setPrice(value)
    }

    const handleBathroomsChange = event => {
        const { value } = event.target
        setBathrooms(value)
    }

    const handleCityChange = event => {
        const { value } = event.target
        setCity(value)
    }

    const handleRatingChange = event => {
        const { value } = event.target
        setRating(value)
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const apartmentData = { name, price, bathrooms, city, rating }

        addApartment(apartmentData)
    }


    return (
        <div className="NewApartmentForm">
            <h1>Nuevo apartamento</h1>
            <form onSubmit={handleFormSubmit}>
                Nombre:
                <input type="text" value={name} onChange={handleNameChange} />
                Precio por noche:
                <input type="number" value={price} onChange={handlePriceChange} />
                Número de baños:
                <input type="number" value={bathrooms} onChange={handleBathroomsChange} />
                Ciudad:
                <input type="text" value={city} onChange={handleCityChange} />
                Puntuación:
                <input type="number" value={rating} onChange={handleRatingChange} />

                <input type='submit' value={'Nuevo apartamento'} />

            </form>

        </div >
    )
}

export default NewApartmentForm