import './components/login/login.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap';

function App() {
    return (
        <Container>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={

                            <Login />
                        } />
                        <Route path='/Register' element={
                            <h1>Register</h1>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </Container>
    );
}

export default App;
