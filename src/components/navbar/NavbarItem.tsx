import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons';
import NavbarItemInterface from '../../interfaces/NavbarItemInterface';
import { Link } from 'react-router-dom';

function NavbarItem({
  name,
  link,
  icon,
} : NavbarItemInterface) {
  return (
    <Link to={link} className="flex items-center w-full h-12 pl-8 mt-2 hover:text-stone-100 hover:bg-green-600 rounded">
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      <span className="ml-2 text-md font-medium">{name}</span>
    </Link>
  );
}

export default NavbarItem;