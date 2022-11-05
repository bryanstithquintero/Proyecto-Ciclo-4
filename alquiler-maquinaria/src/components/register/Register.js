import React, { Component } from 'react'

export default class Register extends Component {
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
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Direccion</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Direccion Completa"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Telefono movil</label>
                            <input
                                type="tel"
                                className="form-control mt-1"
                                placeholder="3xx-xxx-xxxx"
                                pattern='[0-9]{10}'
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirmar Contraseña</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-secondary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
