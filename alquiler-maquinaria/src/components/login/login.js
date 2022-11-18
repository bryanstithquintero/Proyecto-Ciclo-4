<<<<<<< HEAD
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
=======
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import app from '../../app.json';
>>>>>>> 65b1b8f2fa8098fe92abc74d4a235d008e699cc9

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

<<<<<<< HEAD
  iniciarSesion() {
    alert("iniciar sesion funciona");
  }

  render() {
    return (
      <div className="Auth-form-container">
        <Form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registrarse</h3>
            <div className="text-center">
              ¿No se encuentra requistrado?
              <Link className="link-primary link" to="/Register">
                Registrese
              </Link>
=======
    iniciarSesion() {
        alert("iniciar sesion funciona")

        axios.post(`${app}/usuarios/login`, {
            email: this.state.email,
            password: this.state.password,
        })
            .then((response) => { console.log(response); })
            .catch((err) => { console.log(err); })
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
                                className="btn btn-secondary"
                                onClick={() => { this.iniciarSesion() }}>
                                ENTRAR
                            </button>
                        </Form.Group>
                    </div>
                </Form>
>>>>>>> 65b1b8f2fa8098fe92abc74d4a235d008e699cc9
            </div>
            <Form.Group className="form-group mt-3">
              <Form.Label className="label">Email</Form.Label>
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
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => {
                  this.iniciarSesion();
                }}
              >
                ENTRAR
              </button>
            </Form.Group>
          </div>
        </Form>
      </div>
    );
  }
}
