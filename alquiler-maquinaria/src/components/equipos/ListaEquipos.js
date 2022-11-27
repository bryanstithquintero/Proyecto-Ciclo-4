import React, { Component } from "react";
import axios from "axios";
import TablaEquipos from "./TablaEquipos";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const api = process.env.REACT_APP_API;

export default class ListaEquipos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipos: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${api}/maquinas/`)
      .then((res) => {
        this.setState({ equipos: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.equipos.map((res, i) => {
      return <TablaEquipos obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Marca</th>
              <th>Unidades</th>
              <th>Novedad</th>
              <th className="btonMaq">
                <Link to="/RegisterEquipo">
                  <Button variant="primary" size="sm">
                    Registrar Equipo
                  </Button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
