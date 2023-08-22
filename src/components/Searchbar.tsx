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
            <InputGroup.Text className="bg-white border border-end-0 rounded-end rounded-4 border-white">
              <img
                className="w-75"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIklEQVR4nO1Zy04UQRQtF+rWjWJ8LNRPcOHbXzBRNCImRP0AE9RISEB34JKNyax6rHOqx0xcqBjWCm58/YEbt+IKI4iAbS7cTioTQdqu6oHJnKSTzjzOqVtV91G3jOmii62HJEn2A7hJ8gnJTyS/kfwlD4BZAB/lO2vtjTRNe8xWA8nzACYBLJHMNvPIbwG8BHCu3eM3jUbjGIApb3DLAN4AGLTWnrDW7qvVajvlkXcAJ0neITktv/UMe+WcO9oWI5xz/QC+60B+kBxrNpt7N/t/NWwcwLxyzAHoM1UCwKi3Ck/r9frBElyHADQ9vpGwo10HAB6q4G95z7JshwkAALdJrlRijHOuX2duBUBvBP7LuTHOuasmomOv+oRz7n4UkbWVGcp9xlp7JIbAVO4TJiJkq+Y+A2AyeJ5Q4vlGo3HYRIYED42EmXPubDBimRld7rFgpP/WHFfNFyHLDsnCy0XyRFlonlmW8kbeSxOSvKXb6rWpGABmVHugNJkWgEI2GGR0xbTvqnYSgkyq2ExqJ1MxrLWn1U/elybTUjyr0j9ypGnaoyvytTQZgEU1ZJepGBMTE7vVkJ8dYQjJuU7ZWp+DObscioKMrpj2GdWe6ZTwWytNps0E2afTQUZXTPutal8Msk/zEiVIqVCwRAGwlCTJniCk0u3QJR4PQrg5zUeq2QxG6pw7pUu80IYy/nhQ8ryUlxkKdU7/G4Sb5DPVeh5cQI6dkphUYMhEAoBh1ZhN0/RALJG+vPkgjYII/Ffy5gPJC6H5W8VGvE7KUIhtpuf0Yc8Imah+ExueMas+I022/+WS4JH7REtvWE6H10xsSN/J85l5Cc1F8ozmCQmxC17L1O8H573k+G1UCQBeYyKfxWkpLeRQJMlUqmZ55F0+A3BPaid/0NJiEseWFWibMQJp2Ui3o+C1wiIA11qMrmeMi9V53GC7DJCsk/yglzuLmty+AHgH4LEMaqNjgaxA240JBQnvaFlh3WbXTacY46oIzaHhOskYAL0dbwyrSJoxjOHadXfXmO0QAEbNdoS19pK3zR6Y7QysBYBqrrO76MKs4g/FURqJDOxuiQAAAABJRU5ErkJggg=="
              />
            </InputGroup.Text>
            <InputGroup>
              <FormControl
                type="search"
                className=" border rounded rounded-4 border-warning"
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
