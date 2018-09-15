// Child-to-parent communication via callback props.
//
// Children cannot change the parent's state directly. Instead the parent
// passes DOWN a function, and the child CALLS it (often with some data) to
// tell the parent what happened. "Data flows down, events flow up."
//
// Here: a list of products (children) each have an "Add" button. Clicking
// calls a callback that the parent uses to update the cart it owns.

import React from "react";

// child: knows nothing about the cart. It just reports "add me" upward.
function Product({ product, onAdd }) {
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={() => onAdd(product)}>Add</button>
    </li>
  );
}

const PRODUCTS = [
  { id: 1, name: "Book", price: 12 },
  { id: 2, name: "Pen", price: 3 },
  { id: 3, name: "Mug", price: 8 },
];

class Cart extends React.Component {
  state = { items: [] };

  // this function is passed DOWN to each Product as onAdd
  addToCart = (product) => {
    this.setState((prev) => ({ items: [...prev.items, product] }));
  };

  removeFromCart = (index) => {
    this.setState((prev) => ({
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  get total() {
    return this.state.items.reduce((sum, item) => sum + item.price, 0);
  }

  render() {
    return (
      <div className="cart">
        <h2>Shopping Cart (child-to-parent callbacks)</h2>

        <h3>Products</h3>
        <ul>
          {PRODUCTS.map((p) => (
            <Product key={p.id} product={p} onAdd={this.addToCart} />
          ))}
        </ul>

        <h3>Cart ({this.state.items.length})</h3>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item.name}
              <button onClick={() => this.removeFromCart(index)}>x</button>
            </li>
          ))}
        </ul>
        <p>Total: ${this.total}</p>
      </div>
    );
  }
}

export default Cart;
