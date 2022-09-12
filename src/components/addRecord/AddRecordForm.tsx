import { useContext } from "react";
import './AddRecordForm.scss';
import { AddRecordContext } from "../../context/AddRecordContext";
import AddRecordSelector from "./AddRecordSelector";

function AddRecordForm() {
  const { isExpense, switchType } = useContext(AddRecordContext);

  const rowClasses : string = "flex flex-row justify-between w-full mt-5"
  const inputFieldClasses : string = "w-3/5 border-solid border-2 border-black rounded-md text-right"

  return (
    <form action="" className="flex flex-col text-xl w-5/12 items-end mt-8">
      <div className={rowClasses}>
        <label htmlFor="amount">Ammount:</label>
        <input
          type="number"
          id="amount"
          className={inputFieldClasses + ' input-number'}
          min="0"
          step="0.01"
        />
      </div>
      <div className={rowClasses}>
        <label htmlFor="">Type:</label>
        <AddRecordSelector
          lValue="Expense"
          rValue="Income"
          actualValue={isExpense}
          toggleValue={switchType}
        ></AddRecordSelector>
      </div>
      <div className={rowClasses}>
        <label htmlFor="">Category: </label>
        <select
          name=""
          id=""
          className={inputFieldClasses}
        >
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={rowClasses}>
        <label htmlFor="">Date: </label>
        <input type="text" className={inputFieldClasses} />
      </div>
      <div className={rowClasses}>
        <label htmlFor="">Tags:</label>
        <input type="text" className={inputFieldClasses} />
      </div>
      <div className={rowClasses}>
        <label htmlFor="">Notes</label>
        <input type="text" className={inputFieldClasses} />
      </div>
    </form>
  );
}

export default AddRecordForm;
