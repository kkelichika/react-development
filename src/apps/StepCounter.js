// A small counter app, combining several things I learned this month:
//   - state (count and step)
//   - controlled input (the step size)
//   - events and setState (functional form)
//   - conditional rendering (a message at zero / milestones)
//   - a child presentational component
//
// It is more than a toy counter because the step is adjustable and there
// is a little feedback message.

import React from "react";

// presentational child: shows a value, owns no state
function Display({ count }) {
  const color = count > 0 ? "green" : count < 0 ? "crimson" : "gray";
  return <p style={{ fontSize: 32, color }}>{count}</p>;
}

class StepCounter extends React.Component {
  state = { count: 0, step: 1 };

  changeBy = (direction) => {
    this.setState((prev) => ({ count: prev.count + direction * prev.step }));
  };

  handleStepChange = (event) => {
    const step = parseInt(event.target.value, 10);
    this.setState({ step: Number.isNaN(step) ? 1 : step });
  };

  reset = () => this.setState({ count: 0 });

  render() {
    const { count, step } = this.state;
    return (
      <div className="step-counter">
        <h2>Step Counter</h2>
        <Display count={count} />

        <button onClick={() => this.changeBy(-1)}>- {step}</button>
        <button onClick={() => this.changeBy(1)}>+ {step}</button>
        <button onClick={this.reset}>reset</button>

        <div>
          <label>
            Step size:
            <input type="number" value={step} onChange={this.handleStepChange} min="1" />
          </label>
        </div>

        {/* a little conditional feedback */}
        {count === 0 && <p>Back to zero.</p>}
        {count !== 0 && count % 10 === 0 && <p>Nice, a multiple of 10!</p>}
      </div>
    );
  }
}

export default StepCounter;
