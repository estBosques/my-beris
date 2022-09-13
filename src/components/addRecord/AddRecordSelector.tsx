interface SelectorInterface {
  lValue: string;
  rValue: string;
  actualValue: boolean;
  toggleValue: () => void;
}

function AddRecordSelector({
  lValue,
  rValue,
  actualValue,
  toggleValue,
}: SelectorInterface) {
  return (
    <div className="text-base">
      <button
        className={
          "rounded-l-full border-solid border border-black py-1 w-20 " +
          (actualValue ? "bg-green-600" : "")
        }
        onClick={toggleValue}
      >
        {lValue}
      </button>
      <button
        className={
          "rounded-r-full border-solid border-y border-r border-black py-1 w-20 " +
          (!actualValue ? "bg-green-600" : "")
        }
        onClick={toggleValue}
      >
        {rValue}
      </button>
    </div>
  );
}

export default AddRecordSelector;
