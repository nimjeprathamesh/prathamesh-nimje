import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./src/App";
import { MyContextProvider } from "./src/Context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>
);
