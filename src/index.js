import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/auth/authReducer"; // Assuming you have set up the reducer correctly
import App from "./App";
import { ToastContainer } from "react-toastify";
import reportWebVitals from "./reportWebVitals";
import css from "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
