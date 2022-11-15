import React from 'react'

import './card.css'

function Card({ title, imageSource, descripcion }) {
    return (

        <div className="card text-center bg-light">
            <img src={imageSource} alt='maquina descripcion'></img>
            <div className='card-body text-dark'>
                <h4 className='card-title'> {title}</h4>
                <p className='card-text text-secondary'>{descripcion}</p>
                <button type='button' className='btn btn-outline-secondary rounded-0'>
                    agregar a reserva
                </button>
            </div>
        </div>
    )
}

export default Card
