import { useEffect } from "react";
import reporters from "./Reporters.json";
import { graph } from "./utils";

import "./styles.css";

const NodeTree = () => {
  // ?? use graph to pass create a node.
  // ?? first param is data second is the dom element to place it in.
  //  !! Make sure you use it in useEffect only else will cause errors

  useEffect(() => {
    graph(reporters, ".graph");
  }, []);

  return <div className="graph"></div>;
};

export default NodeTree;
