import { useEffect, useRef } from "react";


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

export default useKey;
