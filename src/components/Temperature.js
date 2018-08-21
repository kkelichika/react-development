// Lifting state up.
//
// When two components need to share/sync the same data, you move ("lift")
// that state UP to their closest common parent. The parent owns the state
// and passes it down as props, plus a callback so children can ask the
// parent to change it. Data flows DOWN, events flow UP.
//
// Here: a Celsius input and a Fahrenheit input that must stay in sync. The
// parent (TemperatureCalculator) owns the temperature; both inputs are
// controlled by it.

import React from "react";

// a "dumb" input - it owns no state, it just shows a value and reports
// changes back up via the onChange prop.
function TemperatureInput({ label, value, onChange }) {
  return (
    <label>
      {label}:
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

class TemperatureCalculator extends React.Component {
  // the single source of truth lives HERE, in the parent
  state = { celsius: "" };

  handleCelsiusChange = (value) => {
    this.setState({ celsius: value });
  };

  handleFahrenheitChange = (value) => {
    // convert back to celsius so the one stored value stays consistent
    const f = parseFloat(value);
    const c = Number.isNaN(f) ? "" : ((f - 32) * 5) / 9;
    this.setState({ celsius: c === "" ? "" : c.toFixed(1) });
  };

  render() {
    const { celsius } = this.state;
    const fahrenheit =
      celsius === "" ? "" : ((parseFloat(celsius) * 9) / 5 + 32).toFixed(1);

    return (
      <div className="temperature">
        <h2>Temperature (lifting state up)</h2>
        {/* both inputs are driven by the SAME parent state */}
        <TemperatureInput label="Celsius" value={celsius} onChange={this.handleCelsiusChange} />
        <TemperatureInput label="Fahrenheit" value={fahrenheit} onChange={this.handleFahrenheitChange} />
        <p>{celsius === "" ? "Enter a temperature" : `${celsius}C = ${fahrenheit}F`}</p>
      </div>
    );
  }
}

export default TemperatureCalculator;
