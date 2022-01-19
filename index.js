import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Product from "./components/Product";


const products = [

  {
    id: 1,
    name: "Apple",
    description: "Red apples",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 2,
    name: "A Cat",
    description: "CCO (Chief Cat Officer)",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },


  {
    id: 3,
    name: "Milk",
    description: "Milk for the lactose tollerent",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 4,
    name: "Banana",
    description: "I need those carbs",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },


  {
    id: 5,
    name: "Orange",
    description: "Orange are orange",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  }

];


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      cart: [
        {
          id: 4,
          name: "Banana",
          description: "I need those carbs",
          img: "https://tachyons.io/img/avatar_1.jpg",
          price: 100,
          units: 2
        }
      ]
    };
  }

  handleAddFunc(product) {
    const existingProduct = this.state.cart.filter(p => p.id === product.id);

    if (existingProduct.length > 0) {

        const withoutExistingProduct = this.state.cart.filter(p => p.id !== product.id);
        const updatedUnitsProduct = {
          ...existingProduct[0],
          units: existingProduct[0].units + product.units
        };

        this.setState({
          cart: [...withoutExistingProduct, updatedUnitsProduct]
        });

    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        <ul>
        {
          this.state.cart.map(c => <li>{c.name} | units {c.units}</li>)
        }
        </ul> 

        {
          products.map(p => <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />)
        }
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
