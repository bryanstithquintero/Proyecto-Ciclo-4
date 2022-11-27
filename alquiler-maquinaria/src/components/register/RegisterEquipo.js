import React, { Component } from "react";
import axios from "axios";
//import app from '../../app.json';
const api = process.env.REACT_APP_API;

export default class RegisterEquipo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_maquina: "",
      nombre: "",
      categoria: "",
      marca: "",
      unidades: "",
      novedad: "",
      img: "",
    };
  }

  registro() {
    axios
      .post(`${api}/maquinas/`, {
        id_maquina: this.state.id_maquina,
        nombre: this.state.nombre,
        categoria: this.state.categoria,
        marca: this.state.marca,
        unidades: this.state.unidades,
        novedad: this.state.novedad,
        img: this.state.img
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      id_maquina: "",
      nombre: "",
      categoria: "",
      marca: "",
      unidades: "",
      novedad: "",
      img: "",
    });

    alert(`Equipo registrado`);
  }
  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">REGISTRO DE EQUIPOS</h3>
            <div className="form-group mt-3">
              <label>Id equipo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Codigo equipo"
                onChange={(e) => this.setState({ id_maquina: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Nombre del equipo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Nombre Maquina "
                onChange={(e) => this.setState({ nombre: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Categoria </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Categoria del equipo"
                onChange={(e) => this.setState({ categoria: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Marca del equipo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Marca del fabricante"
                onChange={(e) => this.setState({ marca: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Unidades disponibles</label>
              <input
                type="tel"
                className="form-control mt-1"
                placeholder="cantidad de equipos"
                onChange={(e) => this.setState({ unidades: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Novedades</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Novedades"
                onChange={(e) => this.setState({ novedad: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Link Imagen</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="link de la imagen"
                onChange={(e) => this.setState({ img: e.target.value })}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => {
                  this.registro();
                }}
              >
                Registrar Equipo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
