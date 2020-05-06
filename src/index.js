import React from "react";
import ReactDOM from "react-dom";
import Section from "./components/section/index";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Section />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
