import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import MainLayout from "./layouts/Main.js";
import AuthLayout from "layouts/Auth.js";
import GetRoleRoute from "./routes/GetRoleRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Navigate to="/auth/login" replace/>}/>
            <Route path="/auth/*" element={<AuthLayout/>}/>
            {/*<Route path="/*" element={<GetRoleRoute/>} >*/}
            {/*    <Route*/}
            {/*        index*/}
            {/*        element={<MainLayout />}*/}
            {/*    />*/}
            {/*</Route>*/} {/* 이렇게 수정해볼려고 했는데, 실패함. */}
            <Route path="/*" element={<MainLayout/>} /> {/* 기존 라우터에서 제거하고 루트에만 추가했는데 속성이 안나옴. */}
        </Routes>
    </BrowserRouter>
);
