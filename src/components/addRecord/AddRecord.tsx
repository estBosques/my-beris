import AddRecordSelector from "./AddRecordSelector";
import { useContext } from "react";
import { AddRecordContext } from "../../context/AddRecordContext";

import AddRecordForm from "./AddRecordForm";
import LatestRecords from "./LastestRecords";

function AddRecord() {
  const { detailedForm, toggleFormType } = useContext(AddRecordContext);

  return (
    <div
      className="flex flex-col items-center w-full min-h-full"
      id="contentContainer"
    >
      <AddRecordSelector
        lValue="Detailed"
        rValue="Quick"
        toggleValue={toggleFormType}
        actualValue={detailedForm}
      ></AddRecordSelector>
      <AddRecordForm></AddRecordForm>
      <LatestRecords></LatestRecords>
    </div>
  );
}

export default AddRecord;
