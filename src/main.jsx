import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import App from "./App.jsx";

// Create and render the React application.
// StrictMode enables additional development checks and warnings.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Make Redux store available throughout the application */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);