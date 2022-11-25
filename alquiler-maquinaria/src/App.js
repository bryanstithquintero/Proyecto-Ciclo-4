import "./components/login/login.css";
import Login from "./components/login/login";
import Register from "./components/register/Register";
import RegisterEquipo from "./components/register/RegisterEquipo";
import Navegacion from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Equipos from "./components/equipos/Equipos";
import ListaEquipos from "./components/equipos/ListaEquipos";
import Usuarios from "./components/Usuario/ListaUsuario";
import EditarUsuario from "./components/Usuario/EditarUsuario";
import EditarEquipo from "./components/equipos/EditarEquipo";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register/" element={<Register />} />
          <Route path="/RegisterEquipo/" element={<RegisterEquipo />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Equipos" element={<Equipos />} />
          <Route path="/ListaEquipos" element={<ListaEquipos />} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/EditarUsuario/:id" element={<EditarUsuario />} />
          <Route path="/EditarEquipo/:id" element={<EditarEquipo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
