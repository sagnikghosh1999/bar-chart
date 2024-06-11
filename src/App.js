import BarChart from "./components/barchart/BarChart";

import CHART_DATA from "./constants/data";

import "./App.css";
import { useState } from "react";

function App() {
  const [showChart, setShowChart] = useState(false);
  return (
    <main className="container">
      <button
        className="toggle_btn"
        onClick={() => setShowChart((prev) => !prev)}
      >
        Toggle Chart
      </button>
      {showChart && (
        <BarChart
          data={CHART_DATA}
          labels={{ y_axis: "Number of Tickets", x_axis: "Departments" }}
        />
      )}
    </main>
  );
}

export default App;
