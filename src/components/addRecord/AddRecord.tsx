import AddRecordSelector from "./AddRecordSelector";
import { useContext } from "react";
import { AddRecordContext } from "../../context/AddRecordContext";

import AddRecordForm from "./AddRecordForm";
import LatestRecords from "./LastestRecords";

function AddRecord() {
  const { isDetailed, toggleFormType } = useContext(AddRecordContext);

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-full"
      id="contentContainer"
    >
      <h1 className="mb-8 text-4xl font-medium">Add a new Record</h1>
      <div className="flex flex-col w-5/12 items-center bg-white rounded-xl border border-0 shadow-lg">
        <div className="pt-6">
          <AddRecordSelector
            lValue="Detailed"
            rValue="Quick"
            toggleValue={toggleFormType}
            actualValue={isDetailed}
          ></AddRecordSelector>
        </div>
        <AddRecordForm></AddRecordForm>
      </div>
      <h2 className="mt-10 text-3xl font-medium">Latest Records</h2>
      <LatestRecords></LatestRecords>
    </div>
  );
}

export default AddRecord;
