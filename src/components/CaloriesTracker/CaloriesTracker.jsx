import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./CaloriesTracker.css";

const CaloriesTracker = () => {
  const [entries, setEntries] = useState([]);
  const [calories, setCalories] = useState("");

  const handleAddEntry = () => {
    if (calories) {
      setEntries([...entries, { date: new Date().toLocaleDateString(), calories: Number(calories) }]);
      setCalories("");
    }
  };

  
  const chartData = {
    labels: entries.map((entry) => entry.date),
    datasets: [
      {
        label: "Calories Intake",
        data: entries.map((entry) => entry.calories),
        borderColor: "#1a5d0c",
        backgroundColor: "rgba(26, 93, 12, 0.3)",
        fill: true
      }
    ]
  };

  return (
    <div className="tracker-container">
      <h2> Calories  Tracker</h2>
      <input 
        type="number" 
        placeholder="Enter Calories" 
        value={calories} 
        onChange={(e) => setCalories(e.target.value)} 
      />
      <button onClick={handleAddEntry}>Add Entry</button>
      
      {entries.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p className="no-data">No data yet. Start tracking your calories!</p>
      )}
    </div>
  );
};

export default CaloriesTracker;
