import { Button, Container } from "react-bootstrap";
import Answer from "./Answer";
import ProgressDetail from "./ProgressDetail";
import Question from "./Question";
import Line from "./Line";

const QuestionList = () => {
  return (
    <Container className="p-5">
      <h3>Question Title</h3>
      <ProgressDetail />
      <Container>
      <Line />
      <Question />
      <Answer />
      <Container className="pt-5 d-flex justify-content-end">
      <Button>review</Button>
      <Button className="ms-3 bg-succes">submit</Button>
      </Container>
      </Container>
    </Container>
  );
};

export default QuestionList;
