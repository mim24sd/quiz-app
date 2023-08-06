import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const Searchbar = (props: { placeholder: string }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <Col className="p-0">
          <Form className="d-flex">
              <InputGroup.Text className="bg-white border border-end-0 rounded-end rounded-4 border-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#a4a4a4"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
                    </g>
                  </g>
                </svg>
              </InputGroup.Text>
              <InputGroup>
              <FormControl
                type="search"
                className=" border border-start-0 rounded-start rounded-4 border-warning"
                placeholder={props.placeholder}
              />
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Searchbar;
