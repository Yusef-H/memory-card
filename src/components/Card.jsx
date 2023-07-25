import React from 'react'

function Card({animal, handleAnimalClick}) {
    return (
        <div className="card-img-container" 
            key={animal.id}
            onClick={() => handleAnimalClick(animal)}>
                <img
                    className="animal-image"
                    src={animal.img}
                    alt={`Animal`}
                />
                <h3 className="img-title">
                    {animal.name}
                </h3>
        </div>
    )
}

export default Card
