import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUrlComponent from "./components/AddUrlComponent";
import ViewUrlComponent from "./components/ViewUrlComponent";
import { useState } from "react";

function App() {
  const [refreshList, setRefreshList] = useState(true);

  function refreshListFun() {
    setRefreshList((prev) => !prev);
  }
  return (
    <div className="App container mt-5">
      <AddUrlComponent refreshListFun={refreshListFun} />
      <ViewUrlComponent refreshList={refreshList} />
    </div>
  );
}

export default App;
