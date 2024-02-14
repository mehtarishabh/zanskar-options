import LineChart from "../../components/LineChart/LineChart";
import PieChart from "../../components/PieChart/PieChart";
import "./Charts.css";

function Charts() {
  return (
    <div className="Charts">
      <LineChart data={[25, 50, 35, 15, 94, 10]} />
      <LineChart
        data={[50, 20, 15, 10, 90, 90, 110, 160]}
        height={200}
        width={500}
      />
      <PieChart
        data={[
          { property: "angular", value: 4 },
          { property: "web", value: 3 },
          { property: "react", value: 10 },
          { property: "vue", value: 2 },
        ]}
      />
      <PieChart
        data={[
          { property: "india", value: 4 },
          { property: "pakistan", value: 3 },
        ]}
        width={500}
        height={500}
      />
    </div>
  );
}

export default Charts;
