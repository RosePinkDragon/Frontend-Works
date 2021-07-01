import { BrowserRouter, Route, Switch } from "react-router-dom";
import NodeTree from "components/Tasks/Task1";
import AdminUI from "components/Tasks/Task2";
import Home, { HomeLink } from "./Home.js";

// ?? HomeLink Stays at the top always to take you home from anywhere

function App() {
  return (
    <BrowserRouter>
      <HomeLink />
      <Switch>
        <Route path="/task-1" exact component={NodeTree} />
        <Route path="/task-2" exact component={AdminUI} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
