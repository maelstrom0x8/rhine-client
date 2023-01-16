import { useEffect, useRef } from "react";

const useBlur = (ref, cb) => {

    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    });

    const handleEvent = (ev) => {
        if (ref.current && !ref.current.contains(ev.target)) {
            cb();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleEvent);
        return () => { document.removeEventListener("mousedown", handleEvent) }
    }, [ref, cb])
};

export default useBlur;