import "./PieChart.css";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

function PieChart({ data = [], height = 300, width = 300 }) {
  const svgRef = useRef();
  const [chartData] = useState(data);

  useEffect(() => {
    const w = width;
    const h = height;
    const radius = w / 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("padding-left", `${w / 2 + 50}px`)
      .style("padding-top", `${w / 2 + 50}px`)
      .style("overflow", "visible");

    // setting up chart
    const formattedData = d3.pie().value((d) => d.value)([...chartData]);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet2);

    // tooltip
    // create a tooltip
    // var Tooltip = d3
    //   .select("#div_template")
    //   .append("div")
    //   .style("opacity", 0)
    //   .attr("class", "tooltip")
    //   .style("background-color", "white")
    //   .style("border", "solid")
    //   .style("border-width", "2px")
    //   .style("border-radius", "5px")
    //   .style("padding", "5px");

    // // Three function that change the tooltip when user hover / move / leave a cell
    // var mouseover = function (d) {
    //   Tooltip.style("opacity", 1);
    //   d3.select(this).style("stroke", "black").style("opacity", 1);
    // };
    // var mousemove = function (d) {
    //   Tooltip.html("The exact value of<br>this cell is: " + d.value)
    //     .style("left", d3.mouse(this)[0] + 70 + "px")
    //     .style("top", d3.mouse(this)[1] + "px");
    // };
    // var mouseleave = function (d) {
    //   Tooltip.style("opacity", 0);
    //   d3.select(this).style("stroke", "none").style("opacity", 0.8);
    // };

    // setting the data
    svg
      .selectAll()
      .data(formattedData)
      .join("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => color(d.value))
      .style("opacity", 0.7);

    // setting annotation
    svg
      .selectAll()
      .data(formattedData)
      .join("text")
      .text((d) => d.data.property)
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
      .style("text-anchor", "middle");

    // svg.selectAll()
    //   .data(data, function(d) {return d.group+':'+d.variable;})
    //   .enter()
    //   .on("mouseover", mouseover)
    //   .on("mousemove", mousemove)
    //   .on("mouseleave", mouseleave)
  }, [chartData, height, width]);

  return (
    <div className="PieChart">
      <svg ref={svgRef} />
      <div id={"div_template"}></div>
    </div>
  );
}

export default PieChart;
