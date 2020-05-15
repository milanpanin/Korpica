import React from "react";
import style from "./Shop.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "../Item/Item";

class Shop extends React.Component {
  render() {
    return (
      <div className={style.shop}>
        <hr />
        {this.props.data.map((item, i) => (
          <Item key={i} item={item} BuyClick={this.props.BuyClick} />
        ))}
      </div>
    );
  }
}

export default Shop;
