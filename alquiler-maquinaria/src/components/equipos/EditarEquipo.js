import React, { Component } from "react";
import axios from "axios";

export default class EditarEquipos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      id_maquina: "",
      nombre: "",
      categoria: "",
      marca: "",
      unidades: "",
      novedad: "",
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/")[2];
    console.log(window.location.pathname.split("/")[2]);
    this.setState({ id: id });
    axios
      .get("http://localhost:3001/maquinas/" + id)
      .then((res) => {
        console.log(res);
        this.setState({
          id_maquina: res.data.id_maquina,
          nombre: res.data.nombre,
          categoria: res.data.categoria,
          marca: res.data.marca,
          unidades: res.data.unidades,
          novedad: res.data.novedad,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  actualizar() {
    axios
      .put(`http://localhost:3001/maquinas/` + this.state.id, {
        id_maquina: this.state.id_maquina,
        nombre: this.state.nombre,
        categoria: this.state.categoria,
        marca: this.state.marca,
        unidades: this.state.unidades,
        novedad: this.state.novedad,
      })
      .then((response) => {
        console.log(response, "logrado");
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Equipo actualizado");
    this.props.history.push("/ListaEquipos");
  }

  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Actualizar Equipo</h3>
            <div className="form-group mt-3">
              <label>Id equipo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Codigo equipo"
                value={this.state.id_maquina}
                onChange={(e) => this.setState({ id_maquina: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Nombre del equipo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Nombre Maquina "
                value={this.state.nombre}
                onChange={(e) => this.setState({ nombre: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Categoria </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Categoria del equipo"
                value={this.state.categoria}
                onChange={(e) => this.setState({ categoria: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Marca del equipo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Marca del fabricante"
                value={this.state.marca}
                onChange={(e) => this.setState({ marca: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Unidades disponibles</label>
              <input
                type="tel"
                className="form-control mt-1"
                placeholder="cantidad de equipos"
                value={this.state.unidades}
                onChange={(e) => this.setState({ unidades: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Novedades</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Novedades"
                value={this.state.novedad}
                onChange={(e) => this.setState({ novedad: e.target.value })}
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => {
                  this.actualizar();
                }}
              >
                Actualizar Informacion de equipo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
