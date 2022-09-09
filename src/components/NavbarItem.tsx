import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons';

function NavbarItem() {
  return (
    <a className="flex items-center w-full h-12 pl-8 mt-2 hover:text-stone-100 hover:bg-green-600 rounded">
      <FontAwesomeIcon icon={faFileCirclePlus} className="w-6 h-6" />
      <span className="ml-2 text-lg font-medium">Test</span>
    </a>
  );
}

export default NavbarItem;