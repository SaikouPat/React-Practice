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

  const [rows, setRows] = useState([]);

  const list = state.map((item) => {
    return CardItem(lohg, item.id, item.id);
  });

  const CardItem = ({ src, title, content }) => {
    return (
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={src} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const addRow = () => {
    const rows = list.length / 3;

    for (let i = 0; i < rows; i++) {
      const newRow = [
        { title: list[0].card.t, content: "Content for Card 1" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 3", content: "Content for Card 3" },
      ];
      setRows([...rows, newRow]);
    }
  };

  const createRows = () => {
    const rows = list.length / 3(Int32Array);
    return (
      <Container>
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((card, cardIndex) => (
              <Col md={4} key={cardIndex}>
                <CardItem title={card.title} content={card.content} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    );
  };

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
