import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import Settings from "./components/Settings";
import DataPrivacy from "./components/DataPrivacy";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Settings />
      <DataPrivacy />
    </div>
  );
}

export default App;
