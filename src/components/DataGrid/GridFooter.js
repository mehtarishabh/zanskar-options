import "./DataGrid.css";

function GridFooter({ data, footer }) {
  return <>
    {footer && <hr style={{ margin: 0 }} />}
      {footer && (
        <div className="DataGrid__box">
          <div>Count: {data.length}</div>
        </div>
      )}
  </>
}

export default GridFooter;