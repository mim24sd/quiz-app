import { Accordion } from "react-bootstrap";
import SidebarItems from "./SidebarItems";

const SidebarItemGroup = () => {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>title 1</Accordion.Header>
      <Accordion.Body>
        <SidebarItems />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SidebarItemGroup;
