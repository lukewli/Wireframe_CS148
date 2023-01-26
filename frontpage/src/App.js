import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import SignInButton from './components/Button';
import { Image } from 'react-bootstrap';
import ButtonTheme from './components/ButtomTheme';
import Buttons from './components/ButtonClass';

function App() {
  return (
    <>
      <Navbar
        className="shadow-lg p-3 mb-5 bg-light rounded"
        sticky="top"
        style={{ backgroundColor: 'white', zIndex: 1 }}
      >
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <SignInButton
                bgcolor="4489f0"
                text="Testing"
                link="https://google.com"
              ></SignInButton>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
