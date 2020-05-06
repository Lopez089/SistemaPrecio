import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Section from "./components/section/index";
import WrapCards from "./components/wrapCard";

const App = () => {
  return (
    <Provider store={store}>
      <Section title="Nuestros Precios">
        <WrapCards />
      </Section>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
