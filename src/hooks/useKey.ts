import { useEffect, useRef } from "react";

const useKey = (key: string, cb: (ev: KeyboardEvent) => void): void => {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        const keyHandler = (ev: KeyboardEvent) => {
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

export default useKey;
