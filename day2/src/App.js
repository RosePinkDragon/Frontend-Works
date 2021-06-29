import reporters from "./Reporters.json";
import "./App.css";
import * as d3 from "d3";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    graph();
  }, []);

  function graph() {
    const svg = d3
      .select(".graph")
      .append("svg")
      .attr("width", 600)
      .attr("height", 600)
      .append("g")
      .attr("transform", "translate(50,50)");

    const data = reporters;

    const dataStructure = d3
      .stratify()
      .id((d) => d.id)
      .parentId((d) => d.reporting_id)(data);

    var information = d3.tree().size([500, 300])(dataStructure);
    console.log(information.descendants());

    var circles = svg
      .append("g")
      .selectAll("circle")
      .data(information.descendants());

    circles
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 5);

    var connections = svg
      .append("g")
      .selectAll("path")
      .data(information.links());

    connections
      .enter()
      .append("path")
      .attr("d", function (d) {
        return (
          "M" +
          d.source.x +
          "," +
          d.source.y +
          " C " +
          d.source.x +
          "," +
          (d.source.y + d.target.y) / 2 +
          " " +
          d.target.x +
          "," +
          (d.source.y + d.source.y) / 2 +
          " " +
          d.target.x +
          "," +
          d.target.y
        );
      });

    var names = svg
      .append("g")
      .selectAll("text")
      .data(information.descendants());
    names
      .enter()
      .append("text")
      .text((d) => d.data.id.split("/")[2])
      .attr("x", (d) => d.x + 7)
      .attr("y", (d) => d.y + 5);
  }

  return <div className="graph"></div>;
}

export default App;
