import { Accordion } from "react-bootstrap";

const Answer = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Show Answer</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Answer;
