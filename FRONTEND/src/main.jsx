import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
