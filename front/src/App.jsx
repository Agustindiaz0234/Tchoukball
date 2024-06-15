import "./App.css";

import Home from "./components/home/Home.jsx";
import SideNavBar from "./components/home/Sidebar.jsx";

function App() {
  return (
    <div>
      <SideNavBar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
