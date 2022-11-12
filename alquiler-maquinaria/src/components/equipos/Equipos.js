import React, { Component } from 'react'
import Card from './Card';

export default class Equipos extends Component {

    render() {
        return (
            <div className='container d-flex justify-content-center align-items-center h-100 p-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card />
                    </div>
                    <div className='col-md-4'>
                        <Card />
                    </div>
                    <div className='col-md-4'>
                        <Card />
                    </div>
                    <div className='col-md-4'>
                        <Card />
                    </div>
                    <div className='col-md-4'>
                        <Card />
                    </div>
                </div>
            </div>

        )
    }
}