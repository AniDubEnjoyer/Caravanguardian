"use strict";
import * as React from "react";
import { useCss } from "kremling";
import Drag from "../drag-tsx-2D/drag.tsx";
import type MoveVec2 from "../drag-tsx-2D/move-vec2.ts";

interface Props {
    moveRef: React.RefObject<MoveVec2<HTMLDivElement>>;
    /** The initial x of the newly created Item element. */ x?: number;
    /** The initial y of the newly created Item element. */ y?: number;
    ref?: React.RefObject<typeof Item>;
}

/**
 * An item in the game.
 */
export default function Item(props: Props) {
    const style = useCss(css);

    return (
        <Drag moveRef={props.moveRef} ref={props.ref} x={props.x} y={props.y}>
            <div className="item-bg" {...style} />
        </Drag>
    );
}

export const ItemStyle = {
    width: 60,
    height: 60,
};

const css = `
& .item-bg {
    width: ${ItemStyle.width}px;
    height: ${ItemStyle.height}px;
    background-color: blue;
}
`;
