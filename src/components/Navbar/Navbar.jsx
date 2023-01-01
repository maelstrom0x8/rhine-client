import { faCircleHalfStroke, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect } from "react";


export const Navbar = () => {

  const handleTheme = () => {
    if (localStorage.theme !== "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = ''
    }
  }

  useLayoutEffect(() => { handleTheme() }, [])

  return (
    <div className="flex flex-row max-w-full mx-1 items-center py-4 sm:px-4 pl-2 min-lg:px-10">
      <h1 className="max-sm:text-2xl max-lg:text-xl">RhineTasks</h1>
      <div className="ml-auto mr-4">
        <div className="inline-flex items-center space-x-5 lg:space-x-5">
          <div>
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              className="sm:w-6 sm:h-6 max-lg:w-5 max-lg:h-5 hover:shadow-lg hover:cursor-pointer"
              onClick={handleTheme} />
          </div>
          <div>
            <FontAwesomeIcon icon={faCircleUser} className="sm:w-6 sm:h-6 max-lg:w-5 max-lg:h-5 hover:shadow-lg hover:cursor-pointer" />

          </div>
        </div>
      </div>
    </div>
  );
};
