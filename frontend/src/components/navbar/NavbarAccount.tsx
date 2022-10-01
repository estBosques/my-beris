import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

function NavbarAccount() {
  return (
    <a
      className="flex items-center justify-center w-full h-16 mt-auto bg-green-700 text-stone-200 hover:bg-green-600 hover:text-stone-100"
      href="#"
    >
      <FontAwesomeIcon
        className="w-6 h-6"
        icon={faCircleUser}
      ></FontAwesomeIcon>
      <span className="ml-2 text-sm font-medium">Account</span>
    </a>
  );
}

export default NavbarAccount;
