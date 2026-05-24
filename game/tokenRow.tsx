"use strict";
import * as React from "react";
import { useRef, useEffect } from "react";
import { useCss } from "kremling";
import { ItemStyle } from "./item.tsx";
import Item from "./item.tsx";
import type MoveVec2 from "../drag-tsx-2D/move-vec2.ts";
type ElemRef = React.RefObject<HTMLDivElement>;
type ItemElemRef = React.RefObject<typeof Item>;
type ItemMoveRef = React.RefObject<MoveVec2<HTMLDivElement>>;

interface Props {
    tokenCount: number;
}

export default function TokenRow(props: Props) {
    const itemElemRefs: Array<ItemElemRef> = Array.from({ length: props.tokenCount }, (_) => useRef(null));
    const itemMoveRefs: Array<ItemMoveRef> = Array.from({ length: props.tokenCount }, (_) => useRef(null));
    const benchElemRef: ElemRef = useRef(null);
    const style = useCss(css);

    useEffect(() => {
        const p = TokenBenchStyle.padding * 2;
        const g = TokenBenchStyle.gap * (props.tokenCount - 1);
        const w = props.tokenCount * ItemStyle.width;
        const bench = benchElemRef.current;
        bench.style.width = `${p + g + w}px`;
        bench.style.gridTemplate = `1fr / repeat(${props.tokenCount}, 1fr)`;
        itemMoveRefs.forEach((move) => move.current.moveToParent());
    }, []);

    return (
        <div className="bench" ref={benchElemRef} {...style}>
            {Array.from({ length: props.tokenCount }, (_, i) => (
                <div className="slot" key={i}>
                    <Item moveRef={itemMoveRefs[i]} ref={itemElemRefs[i]} />
                </div>
            ))}
        </div>
    );
}

export const TokenBenchStyle = {
    padding: 20,
    gap: 20,
};

const css = `
& .bench {
    box-sizing: border-box;
    height: ${ItemStyle.height + TokenBenchStyle.padding * 2}px;
    padding: ${TokenBenchStyle.padding}px;
    gap: ${TokenBenchStyle.gap}px;
    display: grid;
    background-color: black;
}

& .slot {
    width: 60px;
    height: 60px;
    background-color: yellow;
}
`;
