import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthContextProvider from "./context/AuthContext.tsx";
import UserContextProvider from "./context/UserContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
