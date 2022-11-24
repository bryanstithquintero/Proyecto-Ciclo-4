import React, { Component } from "react";
import axios from "axios";

export default class EditarUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      nombre: "",
      apellido_1: "",
      apellido_2: "",
      direccion: "",
      telefono: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/")[2];
    this.setState({ id: id });
    axios
      .get("http://localhost:3001/clientes/" + id)
      .then((res) => {
        console.log(res);
        this.setState({
          nombre: res.data.nombre,
          apellido_1: res.data.apellido_1,
          apellido_2: res.data.apellido_2,
          direccion: res.data.direccion,
          telefono: res.data.telefono,
          email: res.data.email,
          password: res.data.password,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  actualizar() {
    axios
      .put(`http://localhost:3001/clientes/` + this.state.id, {
        nombre: this.state.nombre,
        apellido_1: this.state.apellido_1,
        apellido_2: this.state.apellido_2,
        direccion: this.state.direccion,
        telefono: this.state.telefono,
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response, "logrado");
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Cliente actualizado");
    this.props.history.push("/ListaUsuario");
  }

  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Actualizar Cliente</h3>
            <div className="form-group mt-3">
              <label>Nombre Completo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Nombres"
                value={this.state.nombre}
                onChange={(e) => this.setState({ nombre: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Primer Apellido </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Primer Apellido"
                value={this.state.apellido_1}
                onChange={(e) => this.setState({ apellido_1: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Segundo Apellido </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Segundo Apellido"
                value={this.state.apellido_2}
                onChange={(e) => this.setState({ apellido_2: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Direccion</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Direccion Completa"
                value={this.state.direccion}
                onChange={(e) => this.setState({ direccion: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Telefono movil</label>
              <input
                type="tel"
                className="form-control mt-1"
                placeholder="3xx-xxx-xxxx"
                value={this.state.telefono}
                onChange={(e) => this.setState({ telefono: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email"
                value={this.state.email}
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
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => {
                  this.actualizar();
                }}
              >
                Actualizar Cliente
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
