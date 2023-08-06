import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home" className="ps-5">
        <h1 className="text-warning">Quiz App</h1>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
