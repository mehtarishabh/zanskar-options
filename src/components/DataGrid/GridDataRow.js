import "./DataGrid.css";

function GridDataRow({ row, idx }) {
  return (
    <>
      <tr className="DataGrid__row" key={row.join("") + idx}>
        {row.map((col, colIdx) => (
          <td className="DataGrid__col" key={col + colIdx}>
            {col}
          </td>
        ))}
      </tr>
    </>
  );
}

export default GridDataRow;
