import './components/login/login.css';
import Login from './components/login/login';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap';

function App() {
    return (
        <Container>
            <div className="App">

                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/Register' element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </Container>
    );
}

export default App;
