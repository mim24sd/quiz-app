import Accordion from "react-bootstrap/Accordion";
import SidebarItemGroup from "./SidebarItemGroup";
import Searchbar from "./Searchbar";
import { Container } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Container className="bg-secondary py-5 px-5">
      <Searchbar placeholder="Search topic" />
      <Accordion>
        <SidebarItemGroup />
      </Accordion>
    </Container>
  );
};

export default Sidebar;
