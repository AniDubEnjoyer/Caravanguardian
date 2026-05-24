"use strict";
import * as React from "react";
import { useCss } from "kremling";
import TokenRow from "./tokenRow.tsx";

export default function VillageBase() {
    const style = useCss(css);

    return (
        <div className="village-base" {...style}>
            <TokenRow tokenCount={8} />
        </div>
    );
}

const css = `
& .village-base {
    
}
`;
