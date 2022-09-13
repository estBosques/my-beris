import AddRecord from "./addRecord/AddRecord";

function Content() {
  return (
    <div
      className="w-10/12 min-h-screen bg-gray-50 fixed inset-y-0 right-0 overflow-y-auto py-10"
      id="contentContainer"
    >
      <AddRecord></AddRecord>
    </div>
  );
}

export default Content;
