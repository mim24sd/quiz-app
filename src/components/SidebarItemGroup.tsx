import { Accordion } from "react-bootstrap";
import SidebarItems from "./SidebarItems";

const SidebarItemGroup = () => {
  return (
    <div>
      <h4>title</h4>
      <Accordion.Item eventKey="0" className="">
        <Accordion.Header>title 1</Accordion.Header>
        <Accordion.Body>
          <SidebarItems />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default SidebarItemGroup;
