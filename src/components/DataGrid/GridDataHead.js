import "./DataGrid.css";

function GridDataHead({ theader, handleSorting }) {
  return (
    <>
      <tr className="DataGrid__row">
        {theader.map((head, index) => (
          <th
            className="DataGrid__col"
            key={head}
            onClick={() => handleSorting(index)}
          >
            {head}
          </th>
        ))}
      </tr>
    </>
  );
}

export default GridDataHead;
