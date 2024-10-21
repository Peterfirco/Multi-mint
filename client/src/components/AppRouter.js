import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../routes";
import InputWallets from "../pages/input_wallets/InputWallets";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="*" element={<Navigate to="/input_wallets" />} />
        </Routes>
    );
}

export default AppRouter;