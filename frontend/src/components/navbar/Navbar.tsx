import NavbarItem from "./NavbarItem";
import NavbarAccount from './NavbarAccount'
import icons from '../../utils/IconsMap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBahtSign} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar() {
  interface optionType {
    [key: string]: string;
  }
  const options : optionType[] = [
    {
      name: 'Add Record',
      icon: 'addRecord',
      link: '/addRecord',
    },
    {
      name: 'History',
      icon: 'history',
      link: '/history',
    },
    {
      name: 'Statistics',
      icon: 'statistics',
      link: '/statistics',
    },
    {
      name: 'Settings',
      icon: 'settings',
      link: '/settings',
    },
    {
      name: 'Export',
      icon: 'export',
      link: '/export',
    }
  ]

  const items = options.map((option, index) => {
      return <NavbarItem key={index} name={option.name} icon={icons[option.icon]} link={option.link} />
    });


  return (
    <div className="w-2/12">
      <nav className="flex flex-col items-center w-2/12 h-screen overflow-hidden text-stone-300 bg-green-800 fixed">
      <Link to="/" className="flex justify-center w-full px-auto mt-3" href="#">
        <FontAwesomeIcon icon={faBahtSign} className="w-8 h-8"></FontAwesomeIcon>
      </Link>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-6 border-t border-gray-700">
          { items }
        </div>
      </div>
      <NavbarAccount></NavbarAccount>
    </nav>
    </div>
  );
}

export default Navbar;
