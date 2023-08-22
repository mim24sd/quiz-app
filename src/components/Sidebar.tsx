import Accordion from "react-bootstrap/Accordion";
import SidebarItemGroup from "./SidebarItemGroup";
import Searchbar from "./Searchbar";
import { Container } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Container className="py-5 px-5">
      <Searchbar placeholder="Search topic" />
      <h4 className="pb-2 pt-5 ps-3">title</h4>
      <Accordion>
        <SidebarItemGroup />
      </Accordion>
    </Container>
  );
};

export default Sidebar;
