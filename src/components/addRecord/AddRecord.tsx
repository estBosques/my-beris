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
      <h1 className="my-10 text-4xl font-medium">Add a new Record</h1>
      <AddRecordSelector
        lValue="Detailed"
        rValue="Quick"
        toggleValue={toggleFormType}
        actualValue={detailedForm}
      ></AddRecordSelector>
      <AddRecordForm></AddRecordForm>

      <h2 className="mt-10 text-3xl font-medium">Latest Records</h2>
      <LatestRecords></LatestRecords>
    </div>
  );
}

export default AddRecord;
