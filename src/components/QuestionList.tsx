import { Button, Container } from "react-bootstrap";
import Answer from "./Answer";
import ProgressDetail from "./ProgressDetail";
import Question from "./Question";

const QuestionList = () => {
  return (
    <Container className="pl-5">
      <h3>Question Title</h3>
      <ProgressDetail />
      <hr />
      <Question />
      <Answer />
      <Button>review</Button>
      <Button>submit</Button>
    </Container>
  );
};

export default QuestionList;
