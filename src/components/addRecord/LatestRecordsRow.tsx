import { useEffect, useRef, useState } from "react";
import { slideDown, slideUp } from "./Animations";
import RecordInterface from "../../interfaces/Record";
import "./LatestRecordsRow.scss";

interface decoratorProperty {
  [key: string]: string;
}
interface decorator {
  [key: string]: decoratorProperty;
}
function LatestRecordsRow({
  date,
  type,
  amount,
  category,
  tags,
  notes,
}: RecordInterface) {
  let [expanded, setExpanded] = useState(false);
  let expanderBody = useRef<HTMLDivElement>(null);

  const decorators: decorator = {
    income: {
      borderColor: "border-green-600",
      rowBg: "bg-green-100",
      pillBg: "bg-green-600",
      pillText: "text-black",
    },
    expense: {
      borderColor: "border-red-600",
      rowBg: "bg-red-100",
      pillBg: "bg-red-600",
      pillText: "text-white",
    },
  };

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    if (expanded) {
      slideDown(expanderBody);
    }
  }, [expanded]);

  const toggleExpander = (e: any) => {
    if (!expanded) {
      setExpanded(true);
    } else {
      slideUp(expanderBody, () => {
        setExpanded(false);
      });
    }
  };

  const borderColor = decorators[type].borderColor;
  const pillBg = decorators[type].pillBg;
  const pillText = decorators[type].pillText;

  return (
    <>
      <tr
        key="main"
        className={`odd:bg-zinc-200 even:bg-zinc-100} h-9`}
        onClick={toggleExpander}
      >
        <td className={`border-l-4 ${borderColor}`}>{date}</td>
        <td>{amount}</td>
        <td>{category}</td>
        <td>{tags}</td>
        <td>
          <div className="flex w-100 justify-center">
            <div
              className={`rounded-full ${pillBg} ${pillText} w-fit px-2 mx-0 font-medium uppercase`}
            >
              {type}
            </div>
          </div>
        </td>
      </tr>
      {expanded && (
        <tr className={"expandable bg-zinc-400 text-left"}>
          <td colSpan={5}>
            <div ref={expanderBody} className="inner">
              <p>{notes}</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default LatestRecordsRow;
