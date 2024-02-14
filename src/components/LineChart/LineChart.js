import { useEffect, useRef } from "react";
import "./LineChart.css";
import * as d3 from "d3";

function LineChart({ data = [], height = 100, width = 400 }) {
  const svgRef = useRef();

  useEffect(() => {
    const w = width;
    const h = height;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#d3d3d3")
      .style("margin-top", "50")
      .style("overflow", "visible");

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // setting the axis
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);

    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);

    svg.append("g").call(yAxis);

    // setting the data
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data, height, width]);

  return (
    <div className="LineChart">
      <svg ref={svgRef} />
    </div>
  );
}

export default LineChart;
