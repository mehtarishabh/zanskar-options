import { useState } from "react";
import "./DataGrid.css";
import GridFooter from "./GridFooter";
import GridHeader from "./GridHeader";
import GridDataRow from "./GridDataRow";
import GridDataHead from "./GridDataHead";

function DataGrid({
  theader = [],
  tdata = [],
  width = "auto",
  title = "Options Data",
  footer = true,
}) {
  const [data, setData] = useState(tdata);
  const [sortParameter, setSortParameter] = useState({
    index: -1,
    type: "asc",
  });
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.target.value) {
      let newData = [...tdata];
      let filteredData = newData.filter((row) =>
        row.join("").includes(e.target.value)
      );
      setData(filteredData);
    } else {
      setData(tdata);
    }
    setSearchInput(e.target.value);
  };

  const handleSorting = (idx) => {
    let newData = [...data];
    let sortedData;
    let newSortParameter = { ...sortParameter };

    if (sortParameter.index === idx && sortParameter.type === "asc") {
      sortedData = newData.sort((a, b) => b[idx] - a[idx]);
      newSortParameter.type = "dsc";
    } else {
      sortedData = newData.sort((a, b) => a[idx] - b[idx]);
      newSortParameter.index = idx;
      newSortParameter.type = "asc";
    }

    setSortParameter(newSortParameter);
    setData(sortedData);
  };

  return (
    <div className="DataGrid" style={{ width: width }}>
      <GridHeader
        title={title}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <table>
        <thead>
          <GridDataHead theader={theader} handleSorting={handleSorting} />
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((row, idx) => <GridDataRow row={row} idx={idx} />)}
        </tbody>
      </table>
      <GridFooter data={data} footer={footer} />
    </div>
  );
}

export default DataGrid;
