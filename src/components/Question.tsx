import { Form } from "react-bootstrap";

const Question = () => {
  return (
    <div>
      <h3>Question 1</h3>
      <Form>
        <Form.Label>What the fuck is that shit?</Form.Label>
        <Form.Check label="answer 1" type="radio" id="1" />
        <Form.Check label="answer 2" type="radio" id="2" />
        <Form.Check label="answer 3" type="radio" id="3" />
      </Form>
    </div>
  );
};

export default Question;
