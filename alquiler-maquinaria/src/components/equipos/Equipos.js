import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';

const api = process.env.REACT_APP_API;

export default class Equipos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipos: []
        };
    };

    componentDidMount() {
        axios
            .get(`${api}/maquinas/`)
            .then((res) => {
                this.setState({ equipos: res.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    dataCard() {
        return this.state.equipos.map((res, i) => {
            return <Card obj={res} key={i} />
        })
    }

    render() {
        return (
            <div className='container d-flex justify-content-center align-items-center h-100 '>
                <div className='row'>
                    <div className='col-6 align-items-center p-4 d-flex m-3 col-md-8 d-flex flex-wrap '>
                        {this.dataCard()}
                    </div>
                </div>
            </div>

        )
    }
}