"use strict";
import * as React from "react";
import { createRoot } from "react-dom/client";
import Spa from "./spa";

const root = createRoot(document.getElementById("react-root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Spa />
    </React.StrictMode>,
);
