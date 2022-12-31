import { faCircleHalfStroke, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Navbar = () => {

  const handleLightMode = () => {
    if (localStorage.theme !== "dark") {
      localStorage.theme = "dark"
      document.documentElement.classList.add("dark")
    } else {
      localStorage.theme = ""
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="flex flex-row max-w-full mx-1 items-center py-4 sm:px-4 pl-2 min-lg:px-10">
      <h1 className="max-sm:text-2xl max-lg:text-xl">RhineTasks</h1>
      <div className="ml-auto mr-4">
        <div className="rounded-full inline-flex items-center space-x-5 lg:space-x-5">
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            className="sm:w-6 sm:h-6 max-lg:w-5 max-lg:h-5 hover:shadow-lg hover:cursor-pointer"
            onClick={handleLightMode} />
          <FontAwesomeIcon icon={faCircleUser} className="sm:w-6 sm:h-6 max-lg:w-5 max-lg:h-5 hover:shadow-lg hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
