import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "./tasks/Context";

export const useTask = () => useContext(TaskContext);

export const useKey = (key, cb) => {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        const keyHandler = (ev) => {
            if (ev.code === key) {
                callbackRef.current(ev);
            }
        };

        document.addEventListener("keydown", keyHandler);
        return () => {
            document.removeEventListener("keydown", keyHandler);
        };
    }, [key]);
};
