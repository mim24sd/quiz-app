import { Form } from "react-bootstrap";

const Question = () => {
  return (
    <div>
      <h3 className="py-3">Question 1</h3>
      <Form>
        <Form.Label className="pb-2">What the fuck is that shit?</Form.Label>
        <Form.Check label="answer 1" type="radio" id="1" className="pb-2"/>
        <Form.Check label="answer 2" type="radio" id="2" className="pb-2"/>
        <Form.Check label="answer 3" type="radio" id="3" className="pb-2"/>
      </Form>
    </div>
  );
};

export default Question;
