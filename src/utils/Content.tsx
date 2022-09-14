import AddRecord from "../pages/AddRecord";

function Content(props: React.PropsWithChildren<{}>) {
  return (
    <div
      className="w-10/12 min-h-screen bg-gray-50 fixed inset-y-0 right-0 overflow-y-auto py-10"
      id="contentContainer"
    >
      <div className="flex flex-col items-center justify-center w-full min-h-full">
        {props.children}
      </div>
    </div>
  );
}

export default Content;
