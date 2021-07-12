import * as d3 from "d3";

export const graph = (data, element) => {
  const svg = d3
    .select(element)
    .append("svg")
    .attr("width", 600)
    .attr("height", 600)
    .append("g")
    .attr("transform", "translate(50,50)");

  const dataStructure = d3
    .stratify()
    .id((d) => d.id)
    .parentId((d) => d.reporting_id)(data);

  const information = d3.tree().size([500, 300])(dataStructure);

  const circles = svg
    .append("g")
    .selectAll("circle")
    .data(information.descendants());

  circles
    .enter()
    .append("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 5);

  const connections = svg
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

  const names = svg
    .append("g")
    .selectAll("text")
    .data(information.descendants());
  names
    .enter()
    .append("text")
    .text((d) => d.data.id.split("/")[2])
    .attr("x", (d) => d.x + 7)
    .attr("y", (d) => d.y + 5);
};
