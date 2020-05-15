import React from "react";
import style from "./Bill.module.css";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Bill extends React.Component {
  render() {
    return (
      <div className={style.bill}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Proizvod</th>
              <th>Cena</th>
              <th>Količina</th>
            </tr>
          </thead>
          <tbody>
            {this.props.state.orderedItems.every((item) => item == null) ? (
              <tr>
                <td colSpan="3">Korpa je prazna!</td>
              </tr>
            ) : null}

            {this.props.state.data.map((item, i) =>
              this.props.state.orderedItems.includes(item.id) ? (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>
                    {item.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td>{item.ordered}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </Table>
        <Button
          className={style.billButton}
          variant="primary"
          disabled={this.props.state.orderedItems.every((item) => item == null)}
          onClick={this.props.ClearBag}
        >
          Obriši proizvode iz korpe
        </Button>
        <p>
          Ukupno za isplatu:{" "}
          <span>
            {this.props.state.priceSum.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>{" "}
          dinara.
        </p>
      </div>
    );
  }
}

export default Bill;
