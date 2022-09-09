import { useEffect, useRef, useState } from "react";
import { slideDown, slideUp } from "./Animations";
import RecordInterface from "../../interfaces/Record";
import "./LatestRecordsRow.scss";

function LatestRecordsRow({date, type, amount, category, tags, notes}: RecordInterface) {
  let [expanded, setExpanded] = useState(false);
  let expanderBody = useRef<HTMLDivElement>(null);

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return
    }
    
    if(expanded) {slideDown(expanderBody)}
  }, [expanded])

  const toggleExpander = (e: any) => {
    if (!expanded) {
      setExpanded(true);
    } else {
      slideUp(expanderBody, () => {
        setExpanded(false);
      });
    }
  };

  const color = type === "expense" ? "red" : "green";

  return (
    <>
      <tr key="main" className={"bg-zinc-700"} onClick={toggleExpander}>
        <td className={"border-l-4 border-" + color + "-600"}>{date}</td>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{category}</td>
        <td>{tags}</td>
      </tr>
      {expanded && (
        <tr className={"expandable bg-zinc-400"}>
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
