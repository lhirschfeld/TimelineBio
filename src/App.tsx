import React, { Component } from "react";
import Timeline from "./components/timeline/Timeline";

import Event, { Category } from "./api/event";
import "./App.css";

class App extends Component {
  readonly state = {
    events: new Event(
      "Birth",
      "I was born in Zefat, Israel, and moved to the United States seven months later.",
      null,
      Category.Biography,
      new Date(1998, 11, 20)
    ),
    activeCategory: Category.Biography
  };

  render() {
    return (
      <div className="App">
        <Timeline />
      </div>
    );
  }
}

export default App;
