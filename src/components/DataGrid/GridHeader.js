import "./DataGrid.css";

function GridHeader({ title, searchInput, handleSearch }) {
  return (
    <>
      <div className="DataGrid__box">
        <div className="DataGrid__title">{title}</div>
        <input
          type="text"
          value={searchInput}
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default GridHeader;
