"use strict";
import * as React from "react";
import { useRef, useEffect } from "react";
import { dragManager } from "./drag-manager.ts";
import MoveVec2 from "./move-vec2.ts";
type ElemRef = React.RefObject<HTMLDivElement>;
type MoveRef = React.RefObject<MoveVec2<HTMLDivElement>>;

interface DragProps {
    moveRef: MoveRef;
    /** The initial x of the newly created Drag element. */ x?: number;
    /** The initial y of the newly created Drag element. */ y?: number;
    children?: React.ReactNode;
    ref?: React.RefObject<typeof Drag>;
}

/**
 * A drag-and-drop 2D element.
 */
export default function Drag(props: DragProps) {
    const elemRef: ElemRef = useRef(null);

    function handlePointerDown() {
        if (!elemRef.current.matches(":hover")) return;
        dragManager.current = props.moveRef.current;
    }

    function handlePointerUp() {
        if (dragManager.current != props.moveRef.current) return;
        dragManager.current = null;
    }

    useEffect(() => {
        if (!props.moveRef.current)
            props.moveRef.current = new MoveVec2(elemRef.current, props.x, props.y);
        return () => {
            if (dragManager.current != props.moveRef.current) return;
            dragManager.current = null;
        };
    }, []);

    return (
        <div ref={elemRef} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
            {props.children}
        </div>
    );
}
