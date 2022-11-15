import React, { Component } from 'react'
import Card from './Card';
import image1 from '../../assets/image1.jpg'

const cards = [
    {
        id: 1,
        title: "nombre maquina",
        image: image1,
        descripcion: "descipcion de la maquina"
    },
    {
        id: 2,
        title: "nombre maquina 2",
        image: image1,
        descripcion: "descripcion de la maquina 2"
    }
]

export default class Equipos extends Component {

    render() {
        return (
            <div className='container d-flex justify-content-center align-items-center h-100 p-4'>
                <div className='row'>
                    {
                        cards.map((card) => (
                            <div className='col-md-4' key={card.id}>
                                <Card title={card.title} imageSource={card.image} descripcion={card.descripcion} />
                            </div>
                        ))
                    }
                </div>
            </div>

        )
    }
}