import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import "./App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
  </Routes>
);

export default App;
