import { Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import "./App.css";

const App = () => {
  console.log("Hi");
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
