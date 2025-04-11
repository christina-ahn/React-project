import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, CardImg } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import jsonData from "../public/db.json";
import { useState } from "react";
import Paginations from "./components/Pagination.jsx";
function App() {
  const data = jsonData;
  const menus = data.menu;
  const [page, setPage] = useState(1);
  const limit = 3;
  const offset = (page - 1) * limit;
  const total = menus.length;

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Paginations
          page={page}
          limit={limit}
          setPage={setPage}
          total={total}
          offset={offset}
        ></Paginations>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {menus.map((el) => (
            <Col key={el.id} md={4}>
              <Card style={{ margin: "10px" }}>
                <CardImg src={el.url}></CardImg>
              </Card>
              <p>{el.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
