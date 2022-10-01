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
      notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe rem modi laboriosam repellendus velit iure similique eveniet placeat dicta! Et exercitationem veniam repudiandae dignissimos sunt debitis nihil error est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi doloribus ratione molestiae corporis possimus, vel exercitationem hic optio nam soluta at quidem iste sunt dolorem in nesciunt alias molestias?",
    },
  ];

  const tableRows = testData.map((record: RecordInterface, index) => {
    return (
      <LatestRecordsRow key={index} {...record}></LatestRecordsRow>
    );
  });

  return (
    <table className="border-collapse table-fixed w-8/12 mt-10">
      <thead className="bg-zinc-600 text-center text-zinc-200">
        <tr>
          <th className="border-l-4 border-neutral-700">Date</th>
          <th>Ammount</th>
          <th>Category</th>
          <th>Tags</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody className="text-center">
        { tableRows }
      </tbody>
    </table>
  );
}

export default LastedRecords;
