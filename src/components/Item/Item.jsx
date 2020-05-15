/* eslint-disable */
import React from "react";
import style from "./Item.module.css";
import { Card, Button } from "react-bootstrap";

class Shop extends React.Component {
  handleClick = () => {
    this.props.BuyClick(this.props.item.id);
  };

  render() {
    return (
      <Card className={style.card}>
        <Card.Body className={style.cardBody}>
          <Card.Title className={style.cardTitle}>
            {this.props.item.name}
          </Card.Title>
          <Card.Text className={style.cardPrice}>
            <b>
              {this.props.item.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              din
            </b>
          </Card.Text>
        </Card.Body>
        <Button
          className={style.cardButton}
          variant="primary"
          onClick={this.handleClick}
          disabled={this.props.item.quantity == 0}
        >
          Dodaj u kropu
        </Button>
      </Card>
    );
  }
}

export default Shop;
