import { createElement } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import QuestionList from "./components/QuestionList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

const App = () => {
  return (
    <Container fluid className=" vh-100">
      <Row className="shadow-sm p-3 bg-white rounded">
      <Header/>
      <Container className="w-50" >
        <Searchbar  placeholder="Type a question..." />
      </Container>
      </Row>
      <Row>
        <Col sm={3} className="p-0">
          <Sidebar />
        </Col>
        <Col sm={9}>
          <QuestionList/>
        </Col>
      </Row>
    </Container>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(createElement(App));
