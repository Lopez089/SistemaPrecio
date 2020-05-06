import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Section from "./components/section/index";
import WrapCard from "./components/wrapCard";

const App = () => {
  return (
    <Provider store={store}>
      <Section title="Nuestros Precios">
        <WrapCard />
      </Section>
      <Section title="contactar" />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
