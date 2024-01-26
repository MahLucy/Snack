import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import GlobalStateProvider from "./hooks/globalState";

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}
