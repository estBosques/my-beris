import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filter() {
  return (
    <>
      <div className="flex fixed bottom-4 right-4 border border-black rounded-full bg-green-600 hover:cursor-pointer">
        <FontAwesomeIcon icon={faFilter} className="w-8 h-8 p-3" />
      </div>
    </>
  );
}