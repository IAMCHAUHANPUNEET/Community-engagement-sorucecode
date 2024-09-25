import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-zkf2l48wsbik1176.us.auth0.com"
      clientId="GknKNtCW5pmA1B5PCrWPYpQ4fmYWskjh"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>
);
