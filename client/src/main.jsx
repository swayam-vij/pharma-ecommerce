import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/shopContext.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-uxdfiuv8rfjuu6n8.us.auth0.com"
    clientId="EAvbzFS7KSyicpMmXp906BSrubBE3btG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Auth0Provider>
);
