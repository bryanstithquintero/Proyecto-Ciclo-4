import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    iniciarSesion() {
        alert("iniciar sesion funciona")
    }

    render() {
        return (

            <div className="Auth-form-container">
                <Form className='Auth-form'>
                    <div className='Auth-form-content'>
                        <h3 className="Auth-form-title">Registrarse</h3>
                        <div className="text-center">
                            ¿No se encuentra requistrado?
                            <Link className="link-primary link" to='/Register'>
                                Registrese
                            </Link>
                        </div>
                        <Form.Group className='form-group mt-3'>
                            <Form.Label className='label'>Email</Form.Label>
                            <Form.Control
                                type="email"
                                className="form-control mt-1"
                                placeholder="Ingrese su correo"
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="form-group mt-3">
                            <label>Contraseña </label>
                            <Form.Control
                                type="password"
                                className="form-control mt-1"
                                placeholder="Ingrese su contraseña"
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="d-grid gap-2 mt-3">
                            <button type="submit"
                                className="btn btn-primary"
                                onClick={() => { this.iniciarSesion() }}>
                                ENTRAR
                            </button>
                        </Form.Group>
                    </div>
                </Form>
            </div>
        )
    }

}