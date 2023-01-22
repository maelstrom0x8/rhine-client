import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useKey  from "~/hooks/useKey";
import useBlur from "~/hooks/useBlur";

export const UserModal = ({ className, isOpen, onBlur = (f) => f }) => {
  const modalRef = useRef();

  const closeModal = () => {
    onBlur();
  };

  useKey("Escape", closeModal);
  useBlur(modalRef, closeModal);

  return (
    <div className={`${className} ${!isOpen && "hidden"} bg-transparent`}>
      <div
        className={`absolute top-11 right-9 bg-slate-100 text-black font-light text-sm rounded-md max-w-sm w-[320px] overflow-hidden`}
        ref={modalRef}
      >
        <div className="flex flex-col">
          <div className="bg-black rounded-t-md text-slate-50 flex flex-row items-end space-x-2 pt-8 pb-2">
            <div className="bg-gradient-to-tr from-red-600 to-indigo-900 rounded-full w-14 h-14 text-center font-normal p-1 text-5xl ml-2">
              <p className="text-slate-100 font-extralight">M</p>
            </div>
            <p className="font-semibold mb-3">maelstrom0x8</p>
            <Link to={"profile"}>
              <FontAwesomeIcon icon={faPenToSquare} className="mb-3" />
            </Link>
          </div>

          <div className="h-[10em] pt-3 justify-end flex flex-col">
            <p className="font-normal text-center my-auto">Emmanuel Godwin</p>
            <p className="text-center my-auto">emmanuel.godwin.eze@gmail.com</p>

            <ul className="flex whitespace-nowrap text-[0.82em] space-x-1 px-2 justify-center">
              <li>
                <Link to={"privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={"terms-of-service"}>Terms of Service</Link>
              </li>
              <li>
                <Link to={"oss-license"}>OpenSource License</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
