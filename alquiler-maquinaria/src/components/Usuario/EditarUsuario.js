import React, { Component } from 'react'
import axios from 'axios';

export default class EditarUsuario extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get("http://localhost:3001/clientes/EditarUsuario/" + this.props.match.params.id)

    }
    render() {
        return (
            <div>
                editar
            </div>
        )
    }
}
