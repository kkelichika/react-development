// More form controls: select, radio, textarea, number.
//
// All controlled inputs follow the same pattern (value + onChange), but
// each control type reads its value slightly differently. This component
// builds a little order form using several of them, sharing one handler.

import React from "react";

class OrderForm extends React.Component {
  state = {
    product: "book", // <select>
    quantity: 1, // number input
    size: "medium", // radio buttons
    notes: "", // textarea
    giftWrap: false, // checkbox
  };

  handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    const { product, quantity, size, notes, giftWrap } = this.state;
    return (
      <div className="order-form">
        <h2>Order Form (select, radio, textarea)</h2>

        <label>
          Product:
          {/* a controlled <select>: value lives in state */}
          <select name="product" value={product} onChange={this.handleChange}>
            <option value="book">Book</option>
            <option value="pen">Pen</option>
            <option value="mug">Mug</option>
          </select>
        </label>

        <label>
          Quantity:
          <input
            name="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={this.handleChange}
          />
        </label>

        <fieldset>
          <legend>Size</legend>
          {["small", "medium", "large"].map((option) => (
            <label key={option}>
              {/* radios share a name; the checked one matches state */}
              <input
                type="radio"
                name="size"
                value={option}
                checked={size === option}
                onChange={this.handleChange}
              />
              {option}
            </label>
          ))}
        </fieldset>

        <label>
          Notes:
          <textarea name="notes" value={notes} onChange={this.handleChange} />
        </label>

        <label>
          <input
            name="giftWrap"
            type="checkbox"
            checked={giftWrap}
            onChange={this.handleChange}
          />
          Gift wrap
        </label>

        {/* show the live state so I can see the controlled inputs working */}
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default OrderForm;
