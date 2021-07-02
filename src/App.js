import { BrowserRouter, Route, Switch } from "react-router-dom";
import NodeTree from "components/Tasks/Hierarchy";
import AdminUI from "components/Tasks/AdminUI";
import Home, { HomeLink } from "./Home.js";

// ?? HomeLink Stays at the top always to take you home from anywhere

function App() {
  return (
    <BrowserRouter>
      <HomeLink />
      <Switch>
        <Route path="/Hierarchy" exact component={NodeTree} />
        <Route path="/AdminUI" exact component={AdminUI} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
