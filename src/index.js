import React from "react";
import ReactDOM from "react-dom";
import Section from "./section/index";
import { Provider } from "react-redux";
import store from "./State/reducer";

const App = () => {
  return (
    <Provider store={store}>
      <Section />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
