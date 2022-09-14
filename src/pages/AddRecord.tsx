import AddRecordSelector from "../components/addRecord/AddRecordSelector";
import { useContext } from "react";
import { AddRecordContext } from "../context/AddRecordContext";

import AddRecordForm from "../components/addRecord/AddRecordForm";
import LatestRecords from "../components/addRecord/LastestRecords";

function AddRecord() {
  const { isDetailed, toggleFormType } = useContext(AddRecordContext);

  return (
    <>
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
    </>
  );
}

export default AddRecord;
