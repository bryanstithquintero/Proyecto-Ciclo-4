import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

export default class TablaUsuarios extends Component {
    constructor(props) {
        super(props);
        this.deleteCliente = this.deleteCliente.bind(this);
    }

    deleteCliente() {
        axios
            .delete("http://localhost:3001/clientes/" + this.props.obj._id)
            .then((res) => {
                console.log("Cliente borrado");
                alert("Cliente borrado");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.nombre}</td>
                <td>{this.props.obj.apellido_1 + " " + this.props.obj.apellido_2}</td>
                <td>{this.props.obj.telefono}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.direccion}</td>
                <td>
                    <Link to={'/EditarUsuario/' + this.props.obj._id}>
                        <Button variant="success" size='sm'>Editar</Button>
                    </Link>
                    <Button onClick={this.deleteCliente} size="sm" variant='danger'>
                        Borrar
                    </Button>
                </td>
            </tr>
        )
    }
}
