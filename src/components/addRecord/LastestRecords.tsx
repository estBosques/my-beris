import LatestRecordsRow from "./LatestRecordsRow";
import RecordInterface from "../../interfaces/Record";

function LastedRecords() {
  const testData = [
    {
      date: "2020-01-01",
      type: "expense",
      amount: 100,
      category: "food",
      tags: ["tag1", "tag2"],
      notes: "notes",
    },
    {
      date: "2020-01-01",
      type: "income",
      amount: 100,
      category: "gift",
      tags: ["tag1", "tag2"],
      notes: "notes",
    },
    {
      date: "2020-01-01",
      type: "expense",
      amount: 100,
      category: "food",
      tags: ["tag1", "tag2"],
      notes: "notes",
    },
    {
      date: "2020-01-01",
      type: "income",
      amount: 100,
      category: "gift",
      tags: ["tag1", "tag2"],
      notes: "notes",
    },
    {
      date: "2020-01-01",
      type: "expense",
      amount: 100,
      category: "food",
      tags: ["tag1", "tag2"],
      notes: "notes",
    },
  ];

  const tableRows = testData.map((record: RecordInterface, index) => {
    return (
      <LatestRecordsRow key={index} {...record}></LatestRecordsRow>
    );
  });

  return (
    <table className="border-collapse table-auto w-9/12 rounded-full mt-10 text-zinc-200">
      <thead className="bg-zinc-500 rounded-full">
        <tr>
          <th className="border-l-4 border-neutral-700">Date</th>
          <th>Type</th>
          <th>Ammount</th>
          <th>Category</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        { tableRows }
      </tbody>
    </table>
  );
}

export default LastedRecords;
