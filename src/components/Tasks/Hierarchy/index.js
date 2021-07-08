import { Component } from "react";
import reporters from "./Reporters.json";
import { graph } from "./utils";

import "./styles.css";

class NodeTree extends Component {
  // ?? use graph to pass create a node.
  // ?? first param is data second is the dom element to place it in.
  //  !! Make sure you use it in useEffect or componentDidMount only else will cause errors

  componentDidMount = () => {
    return graph(reporters, ".graph");
  };

  render() {
    return <div className="graph" />;
  }
}

export default NodeTree;
