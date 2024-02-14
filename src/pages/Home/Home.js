import "./Home.css";
import DataGrid from "../../components/DataGrid/DataGrid";

function Home() {
  return (
    <div className="Home">
      <DataGrid
        theader={["ABC", "PQR"]}
        tdata={[
          [1, 2],
          [2, 3],
          [4, 5],
          [6, 7],
        ]}
      />
      <DataGrid
        theader={["ABC", "PQR", "LMN", "XYZ"]}
        tdata={[
          [1, 2, 11, 22],
          [2, 3, 22, 33],
          [4, 5, 44, 55],
          [6, 7, 66, 77],
        ]}
        footer={false}
      />
      <DataGrid
        theader={["ABC", "PQR", "LMN", "XYZ", "STU", "TTT"]}
        tdata={[
          [1, 2, 111, 22, 111, 222],
          [2, 3, 22, 33, 222, 333],
          [4, 5, 44, 55, 444, 555],
          [6, 7, 66, 77, 666, 777],
          [6, 7, 66, 77, 666, 777],
          [61, 71, 661, 771, 6661, 7771],
          [6, 7, 66, 77, 666, 777],
        ]}
      />
    </div>
  );
}

export default Home;