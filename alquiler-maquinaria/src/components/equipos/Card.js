import React from 'react'
import image1 from '../../assets/image1.jpg'
import './card.css'

function Card() {
    return (

        <div className="card text-center bg-light">
            <img src={image1} alt='maquina descripcion'></img>
            <div className='card-body text-dark'>
                <h4 className='card-title'> titulo maquina</h4>
                <p className='card-text text-secondary'>descripcion general de la maquina</p>
                <button type='button' className='btn btn-outline-secondary rounded-0'>
                    agregar a reserva
                </button>
            </div>
        </div>
    )
}

export default Card
