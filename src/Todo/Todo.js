import "./Todo.css";
import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import lohg from "../lohg.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Todo = () => {
  const input = useRef();
  const handleCount = () => {
    return count, setCount(count + 1);
  };

  const [count, setCount] = useState(0);
  const [state, setState] = useState([
    { name: "Hello", id: `${handleCount}` },
    { name: "Goodbye", id: `${handleCount}` },
  ]);

  const list = state.map((item) => {
    return (
      <Card style={{ width: "18rem", overflow: "hidden" }} key={item.id}>
        <Card.Img variant="top" src={lohg} />
        <Card.Body>
          <Container>
            <Card.Text>
              <Row>
                <Col sm={10}>{item.name + ""}</Col>
                <Col sm={2}>
                  <Button size="sm" variant="dark" width="5px">
                    X
                  </Button>
                </Col>
              </Row>
            </Card.Text>
          </Container>
        </Card.Body>
      </Card>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.current.value;

    setState((prevState) => [...prevState, { name: value, id: handleCount }]);
  };

  return (
    <div className="Todo">
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="awit">Input awit</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Large text"
          ref={input}
        />
        <br></br>
        <button>Add Item</button>
      </Form>
      <br></br>

      <div
        style={{
          display: "grid",
          gridAutoFlow: "column dense",
          columnGap: "10px",
          width: "50em",
          overflow: "scroll",
        }}
      >
        {list}
      </div>
    </div>
  );
};

export default Todo;
