import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import MainLayout from "./layouts/Main.js";
import AuthLayout from "layouts/Auth.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Navigate to="/auth/login" replace/>}/>
            <Route path="/auth/*" element={<AuthLayout/>}/>
            <Route path="/*" element={<MainLayout/>} >
            </Route>
        </Routes>
    </BrowserRouter>
);