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
            <div className="col-md-12 contenedor">
              <h1 className="m-b-20">
                <strong>Bienvenido a Alquiler de maquinaria</strong>
              </h1>
              <p className="m-b-40">
                Contamos con un banco de maquinaria a disposición de los
                usuarios, las cuales se alquilar a tarifas preferenciales para
                los usuarios , apoyando de esta manera el sector productivo .
              </p>
              <p>
                <a href="/Equipos">
                  <button className="btn btn-lg btn-circle btn-brand">
                    Equipos
                  </button>
                </a>

                <a href="/Register">
                  <button className="btn btn-lg btn-circle btn-outline-new-white">
                    Registro
                  </button>
                </a>
              </p>
            </div>
          </Row>
        </Container>
        <Container>
          <section class="page-section bg-primary" id="about">
            <div class="container px-4 px-lg-5">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-8 text-center">
                  <h2 class="text-white mt-0">We've got what you need!</h2>
                  <hr class="divider divider-light" />
                  <p class="text-white-75 mb-4">
                    Start Bootstrap has everything you need to get your new
                    website up and running in no time! Choose one of our open
                    source, free to download, and easy to use themes! No strings
                    attached!
                  </p>
                  <a class="btn btn-light btn-xl" href="#services">
                    Get Started!
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
