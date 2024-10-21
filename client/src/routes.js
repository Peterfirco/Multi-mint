import { Component } from "react";
import { INPUT_ROUTE, INFO_ROUTE, OPER_ROUTE } from "./utils/consts";
import InputWallets from "./pages/input_wallets/InputWallets";
import InfoWallets from "./pages/info_wallets/InfoWallets";
import OperWallets from "./pages/oper_wallets/OperWallets";

export const publicRoutes = [
    {
        path: INPUT_ROUTE,
        Component: InputWallets
    },

    {
        path: INFO_ROUTE,
        Component: InfoWallets
    },

    {
        path: OPER_ROUTE,
        Component: OperWallets
    },
]