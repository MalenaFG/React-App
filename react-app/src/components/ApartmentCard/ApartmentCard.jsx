

const ApartmentCard = ({ name, bedrooms, bathrooms, review_scores_rating, city, id, deleteApartment }) => {

    return (
        <div className="ApartmentCard">
            <h2>{name}</h2>
            <p>Ciudad: {city}</p>
            <p> Tiene {bedrooms} habitaciones y {bathrooms} baños</p>
            {
                review_scores_rating > 80 && <p>¡A otros usuarios les ha encantado este piso!</p>
            }
            <button onClick={() => deleteApartment(id)}>Eliminar apartamento</button>
            <hr />


        </div>
    )
}

export default ApartmentCard;
