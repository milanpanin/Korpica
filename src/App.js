import React from "react";
import style from "./App.module.css";

import InputForm from "./components/InputForm/Input-Form";
import Bill from "./components/Bill/Bill";
import Shop from "./components/Shop/Shop";

class App extends React.Component {
  state = {
    data: [
      {
        id: 1,
        name: "Hleb",
        price: 55,
        quantity: 4,
        ordered: 0,
      },
      {
        id: 2,
        name: "Mleko",
        price: 95,
        quantity: 2,
        ordered: 0,
      },
      {
        id: 3,
        name: "Sok",
        price: 90,
        quantity: 1,
        ordered: 0,
      },
      {
        id: 4,
        name: "Keks",
        price: 70,
        quantity: 3,
        ordered: 0,
      },
      {
        id: 5,
        name: "Jogurt",
        price: 80,
        quantity: 5,
        ordered: 0,
      },
      {
        id: 6,
        name: "Banane",
        price: 125,
        quantity: 2,
        ordered: 0,
      },
      {
        id: 7,
        name: "Nudle",
        price: 30,
        quantity: 6,
        ordered: 0,
      },
    ],
    priceSum: 0,
    orderedItems: [],
  };

  AddArticle = (article) => {
    if (
      article.id !== 0 &&
      article.price !== 0 &&
      Number(article.quantity) &&
      Number(article.price)
    ) {
      let data = [...this.state.data, article];
      this.setState({ data: data });
    } else {
      return;
    }
  };

  Update = () => {
    let sumArr = this.state.data.map((item) => {
      return item.price * item.ordered;
    });

    let sum = sumArr.reduce((a, b) => a + b, 0);
    this.setState({ priceSum: sum });
  };

  OrderedItems = () => {
    let arr = this.state.data.map((item) =>
      item.ordered > 0 ? item.id : null
    );

    this.setState({ orderedItems: arr });
  };

  BuyClick = (id) => {
    let newData = this.state.data.map((item) => {
      if (item.id === id) {
        item.ordered++;
        item.quantity--;
      }
      return item;
    });

    this.setState({ data: newData });
    this.Update();
    this.OrderedItems();
  };

  ClearBag = () => {
    let data = [...this.state.data];
    data.map((item) => (item.quantity += item.ordered));
    data.map((item) => (item.ordered = 0));

    this.setState({ data });
    this.OrderedItems();
    this.Update();
  };

  componentDidMount() {
    this.Update();
    this.OrderedItems();
  }

  render() {
    return (
      <div className={style.App}>
        <InputForm data={this.state.data} AddArticle={this.AddArticle} />
        <Bill state={this.state} ClearBag={this.ClearBag} />
        <Shop data={this.state.data} BuyClick={this.BuyClick} />
      </div>
    );
  }
}

export default App;
