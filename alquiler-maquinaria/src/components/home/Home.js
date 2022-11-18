import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <img src="./img/hero-bg.jpg" className="imagenHome" alt="home" />
        <Container className="home1">
          <Row>
            <div className="col-md-12">
              <h1 className="m-b-20">
                <strong>Bienvenido a Alquiler de maquinaria</strong>
              </h1>
              <p className="m-b-40">
                Contamos con un banco de maquinaria a disposición de los
                usuarios, las cuales se alquilar a tarifas preferenciales para
                los usuarios , apoyando de esta manera el sector productivo .
              </p>
              <p>
                <button className="btn btn-lg btn-circle btn-brand">
                  Equipo
                </button>
                <button className="btn btn-lg btn-circle btn-outline-new-white">
                  Registro
                </button>
              </p>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
