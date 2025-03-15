
import React, { useState } from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";

const UserProfile = ({ onSave }) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    goal: "Maintain"
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <h2>👤 User Profile</h2>
      <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} />
      <input type="number" name="weight" placeholder="Weight (kg)" value={user.weight} onChange={handleChange} />
      <input type="number" name="height" placeholder="Height (cm)" value={user.height} onChange={handleChange} />
      <select name="goal" value={user.goal} onChange={handleChange}>
        <option value="Lose">Lose Weight</option>
        <option value="Maintain">Maintain Weight</option>
        <option value="Gain">Gain Weight</option>
      </select>

      {/* Save Button (Checks if onSave exists) */}
      <button onClick={() => onSave && onSave(user)}>Save Profile</button>

      {/* Navigation to Calories Tracker */}
      <Link to="/calories-tracker">
        <button className="track-btn">Track Calories</button>
      </Link>
    </div>
  );
};

export default UserProfile;
