import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trends from "./components/Trends";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Trends />
    </div>
  );
}

export default App;
