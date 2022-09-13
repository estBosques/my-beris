import NavbarItem from "./NavbarItem";
import NavbarAccount from './NavbarAccount'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBahtSign} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="w-2/12">
      <nav className="flex flex-col items-center w-2/12 h-screen overflow-hidden text-stone-300 bg-green-800 fixed">
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
    </div>
  );
}

export default Navbar;
