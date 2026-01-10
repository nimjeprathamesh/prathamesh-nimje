import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "../src/../index.css";
import { MyContextProvider } from "./Context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>
);
