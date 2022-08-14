import React from "react";
import { Provider } from "react-redux";
import CounterComponent from "./Components/CounterComponent";
import store from "./Store/Store";

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
