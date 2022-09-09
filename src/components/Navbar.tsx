import NavbarItem from "./NavbarItem";
import NavbarAccount from './NavbarAccount'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBahtSign} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="flex flex-col items-center w-60 h-full overflow-hidden text-stone-300 bg-green-800 ">
      <a className="flex justify-center w-full px-auto mt-3" href="#">
        <FontAwesomeIcon icon={faBahtSign} className="w-8 h-8"></FontAwesomeIcon>
      </a>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-6 border-t border-gray-700">
          <NavbarItem></NavbarItem>
          <NavbarItem></NavbarItem>
          <NavbarItem></NavbarItem>
          <NavbarItem></NavbarItem>
          <NavbarItem></NavbarItem>
        </div>
      </div>
      <NavbarAccount></NavbarAccount>
    </nav>
  );
}

export default Navbar;
