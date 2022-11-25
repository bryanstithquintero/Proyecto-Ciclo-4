import React, { Component } from "react";
import { Button, Carousel, Form, Card, CardGroup } from "react-bootstrap";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="contenedor"
          style={{
            backgroundImage: 'url("./img/hero-bg.jpg")',
            width: "100%",
            height: "800px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="m-b-20">
            <strong>Bienvenido a Alquiler de maquinaria</strong>
          </h1>
          <h4 className="m-b-40">
            Contamos con un banco de maquinaria a disposición de los usuarios,
            las cuales se alquilar a tarifas preferenciales para los usuarios ,
            apoyando de esta manera el sector productivo .
          </h4>
          <div>
            <a href="/Equipos">
              <Button
                variant="outline-dark"
                className="btn btn-lg btn-circle btn-brand"
              >
                Equipos
              </Button>
            </a>

            <a href="/Register">
              <Button
                variant="outline-dark"
                className="btn btn-lg btn-circle btn-outline-new-white"
              >
                Registro
              </Button>
            </a>
          </div>
        </div>
        <div
          className="contenedor"
          style={{
            backgroundColor: "#212529",
            width: "100%",
            height: "800px",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
            className="m-b-20"
          >
            <strong>Lo mejor en alquiler de maquinaria agricola</strong>
          </h1>
          <h5
            style={{
              color: "white",
            }}
            className="m-b-40"
          >
            brindamos un servicio integral de alquiler de maquinaria agrícola e
            implementos a empresas y agricultores para la preparación,
            adecuación, implementación y desarrollo de labores culturales en sus
            campos. Nuestra experiencia y operadores calificados, sumados a
            nuestro soporte logístico aseguran un trabajo oportuno, de calidad y
            a costo competitivo. Contáctenos y conozca sobre las mejores tarifas
            de alquiler.
          </h5>
        </div>
        <Carousel fade={true}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./img/magricola.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>TRACTORES LIVIANOS</h3>
              <p>
                Nuestro patio de maquinaria cuenta con tractores desde 35 hp
                hasta 80hp
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="./img/magricola2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>TRACTORES MEDIANOS</h3>
              <p>
                Nuestro patio de maquinaria cuenta con tractores desde 90hp
                hasta 160hp.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/magricola.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>TRACTORES PESADOS</h3>
              <p>
                Nuestro patio de maquinaria cuenta con tractores desde 180hp
                hasta 240hp.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <footer
          className="contenedor"
          style={{
            backgroundColor: "#212529",
            width: "100%",
            height: "800px",
          }}
        >
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">¡Contactate con nosotros!</h3>
              <div className="form-group mt-3">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Nombre Completo"
                />
              </div>
              <div className="form-group mt-3">
                <label>Correo Electronico</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Direccion de Correo electronico "
                />
              </div>
              <div className="form-group mt-3">
                <label>Numero de telefono movil</label>
                <input
                  type="tel"
                  className="form-control mt-1"
                  placeholder="3xx-xxx-xxxx"
                />
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Area del texto</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
              </Form.Group>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-secondary">
                  Enviar
                </button>
              </div>

              <div className="d-grid gap-2 mt-3"></div>
            </div>
          </form>
        </footer>
        <div class="contenedor">
          <h2>Programadores</h2>
          <h4>Responsables del proyecto</h4>
        </div>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="./img/vanessa2.jpg" />
            <Card.Body>
              <Card.Title>Audrey Vanessa López Hoyos</Card.Title>
              <Card.Text>Team desarrollo</Card.Text>
              <a href="https://www.linkedin.com/in/audrey-vanessa-lopez-hoyos/">
                <Card.Text>Linkedin</Card.Text>
              </a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./img/brayan.jpg" />
            <Card.Body>
              <Card.Title>Brayan Stith Quintero Guacary</Card.Title>
              <Card.Text>Team desarrollo</Card.Text>
              <a href="https://www.linkedin.com/in/bryan-quintero">
                <Card.Text>Linkedin</Card.Text>
              </a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="./img/camilo2.jpg" />
            <Card.Body>
              <Card.Title>Camilo Ernesto Cortes Rincon</Card.Title>
              <Card.Text>Team desarrollo</Card.Text>
              <a href="https://www.linkedin.com/in/camilo-cortes-rincon-626748205">
                <Card.Text>Linkedin</Card.Text>
              </a>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
