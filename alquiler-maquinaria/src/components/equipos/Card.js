import React, { Component } from 'react'
import axios from 'axios';
import './card.css'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipos: []
        };
    };

    componentDidMount() {
        axios
            .get("http://localhost:3001/maquinas/")
            .then((res) => {
                this.setState({ equipos: res.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (

            <div className="card text-center bg-light">
                <img src={ } alt='maquina descripcion'></img>
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
}

