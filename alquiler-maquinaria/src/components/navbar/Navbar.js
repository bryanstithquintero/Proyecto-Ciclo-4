import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/Register'>Registro</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}