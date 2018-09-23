// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import Greeting from "./components/Greeting";
import PeopleList from "./components/PeopleList";
import withLoading from "./hoc/withLoading";

// wrap PeopleList with the loading behaviour - one line, reusable anywhere
const PeopleListWithLoading = withLoading(PeopleList);

const people = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Grace" },
];

class App extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    // pretend we are loading, then flip to loaded after a moment
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    return (
      <div>
        <h1>Learning React</h1>
        <Greeting />
        <h2>HOC: withLoading</h2>
        {/* the isLoading prop is consumed by the HOC; people passes through */}
        <PeopleListWithLoading isLoading={this.state.isLoading} people={people} />
      </div>
    );
  }
}

export default App;
