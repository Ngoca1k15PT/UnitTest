import React from "react";
import RootNavigation from './app/navigation/RootNavigation';

import { Provider } from "react-redux";

import { reducer } from "./app/controller/store";
import { createStore } from "redux";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}