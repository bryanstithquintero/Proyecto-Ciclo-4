import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {

    render() {
        return (

            <div className="card text-center bg-light">
                <img src={this.props.obj.img} alt='maquina descripcion'></img>
                <div className='card-body text-dark'>
                    <h4 className='card-title'> {this.props.obj.nombre}</h4>
                    <p className='card-text text-secondary'>{this.props.obj.marca}</p>
                    <button type='button' className='btn btn-outline-secondary rounded-0'>
                        agregar a reserva
                    </button>
                </div>
            </div>
        )
    }
}

