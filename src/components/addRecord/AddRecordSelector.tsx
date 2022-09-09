interface SelectorInterface {
  lValue: string;
  rValue: string;
  actualValue: boolean;
  toggleValue: () => void;
}

function AddRecordSelector({lValue, rValue, actualValue, toggleValue}: SelectorInterface) {

  return (
    <div className="text-base">
      <button
        className={
          "rounded-l-full border-solid border-2 border-black py-2 px-9 " +
          (actualValue ? "bg-green-600" : "")
        }
        onClick={toggleValue}
      >
        {lValue}
      </button>
      <button
        className={
          "rounded-r-full border-solid border-y-2 border-r-2 border-black py-2 px-11 " +
          (!actualValue ? "bg-green-600" : "")
        }
        onClick={ toggleValue}
      >
        {rValue}
      </button>
    </div>
  );
}

export default AddRecordSelector;
