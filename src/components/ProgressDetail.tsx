import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressDetail = () => {
  return (
    <Container className="d-flex flex-row align-items-center pb-5">
      <span>10 question</span>
      <ProgressBar now={60} className="w-25 ms-2" />
    </Container>
  );
};

export default ProgressDetail;
