import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const api = process.env.REACT_APP_API;

export default class TablaEquipos extends Component {
  constructor(props) {
    super(props);
    this.deleteEquipos = this.deleteEquipos.bind(this);
  }

  deleteEquipos() {
    axios
      .delete(`${api}/maquinas/` + this.props.obj._id)
      .then((res) => {
        console.log("Equipo borrado");
        alert("Equipo borrado");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.id_maquina}</td>
        <td>{this.props.obj.nombre}</td>
        <td>{this.props.obj.categoria}</td>
        <td>{this.props.obj.marca}</td>
        <td>{this.props.obj.unidades}</td>
        <td>{this.props.obj.novedad}</td>
        <td className="btonMaq">
          <Link to={"/EditarEquipo/" + this.props.obj._id}>
            <Button variant="success" size="sm">
              Editar
            </Button>
          </Link>
          <Button onClick={this.deleteEquipos} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}
