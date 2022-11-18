import axios from 'axios';
import React, { Component } from 'react'
import TablaUsuarios from './TablaUsuarios';
import Table from "react-bootstrap/Table";

export default class ListaUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientes: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/clientes/')
            .then((res) => {
                this.setState({ clientes: res.data, })

            })
            .catch((error) => { console.log(error) })
    }

    DataTable() {
        return this.state.clientes.map((res, i) => {
            return <TablaUsuarios obj={res} key={i} />;
        });
    }
    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Telefono</th>
                            <th>Mail</th>
                            <th>Direccion</th>
                        </tr>
                    </thead>
                    <tbody>{this.DataTable()}</tbody>
                </Table>
            </div>
        )
    }
}
