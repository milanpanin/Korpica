import React from "react";
import style from "./Input-Form.module.css";
import { Form, Col, Button } from "react-bootstrap";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      price: "",
      quantity: "",
      ordered: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    let dataLeng = this.props.data.length;
    this.setState({ id: dataLeng + 1 });
  }

  handleSubmit(event) {
    let newState = {
      id: this.state.id,
      name: this.state.name,
      price: parseInt(this.state.price),
      quantity: parseInt(this.state.quantity),
      ordered: 0,
    };
    this.props.AddArticle(newState);
    this.Reset();
    event.preventDefault();
  }

  Reset = () => {
    this.setState({ id: 0, name: "", price: "", quantity: "", ordered: 0 });
  };

  render() {
    return (
      <div className={style.inputForm}>
        <h6>Dodaj novi artikal...</h6>
        <Form onSubmit={this.handleSubmit} className={style.formBig}>
          <Form.Row>
            <Col>
              <Form.Control
                className={style.field}
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                placeholder="Ime artikla"
              />
            </Col>
            <Col>
              <Form.Control
                className={style.field}
                type="number"
                value={this.state.price}
                onChange={this.handleChange}
                name="price"
                placeholder="Cena artikla"
              />
            </Col>
            <Col>
              <Form.Control
                className={style.field}
                type="number"
                value={this.state.quantity}
                onChange={this.handleChange}
                name="quantity"
                placeholder="Količina artikla"
              />
            </Col>
            <Button variant="primary" type="submit">
              Dodaj artikal u šop
            </Button>
          </Form.Row>
        </Form>

        <Form onSubmit={this.handleSubmit} className={style.formSmall}>
          <Form.Row className={style.rowOne}>
            <Col>
              <Form.Control
                className={style.field}
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                placeholder="Ime artikla"
              />
            </Col>
            <Col>
              <Form.Control
                className={style.field}
                type="number"
                value={this.state.price}
                onChange={this.handleChange}
                name="price"
                placeholder="Cena artikla"
              />
            </Col>
          </Form.Row>
          <Form.Row className={style.rowTwo}>
            <Col>
              <Form.Control
                className={style.field}
                type="number"
                value={this.state.quantity}
                onChange={this.handleChange}
                name="quantity"
                placeholder="Količina artikla"
              />
            </Col>
            <Button variant="primary" type="submit">
              Dodaj artikal u šop
            </Button>
          </Form.Row>
        </Form>
        <hr />
      </div>
    );
  }
}

export default InputForm;
