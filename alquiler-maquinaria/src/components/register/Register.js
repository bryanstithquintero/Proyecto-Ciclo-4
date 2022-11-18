import React, { Component } from 'react'
import axios from 'axios';
import app from '../../app.json';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreCompleto: '',
            direccion: '',
            telefono: '',
            email: '',
            password: '',
        };
    }

    registro() {
        axios.post(`${app}/usuarios/register`, {
            nombreCompleto: this.state.nombreCompleto,
            direccion: this.state.direccion,
            telefono: this.state.telefono,
            email: this.state.email,
            password: this.state.password,
        })
            .then((response) => { console.log(response); })
            .catch((err) => { console.log(err); })

        alert(`los datos son ${this.state.nombreCompleto}`)
    }
    render() {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">REGISTRO</h3>
                        <div className="form-group mt-3">
                            <label>Nombre Completo</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Nombres y apellidos"
                                onChange={(e) => this.setState({ nombreCompleto: e.target.value })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Direccion</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Direccion Completa"
                                onChange={(e) => this.setState({ direccion: e.target.value })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Telefono movil</label>
                            <input
                                type="tel"
                                className="form-control mt-1"
                                placeholder="3xx-xxx-xxxx"
                                pattern='[0-9]{10}'
                                onChange={(e) => this.setState({ telefono: e.target.value })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email"
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Contraseña"
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirmar Contraseña</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Contraseña"
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-secondary" onClick={() => { this.registro() }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
