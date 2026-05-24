"use strict";
import * as React from "react";
import { createRoot } from "react-dom/client";
import Spa from "./spa.tsx";
import Sandbox from "./test.tsx";

const root = createRoot(document.getElementById("react-root") as HTMLElement);
root.render(
    // <React.StrictMode>
    <>
        <Spa />
        <Sandbox />
    </>,
    // </React.StrictMode>,
);
