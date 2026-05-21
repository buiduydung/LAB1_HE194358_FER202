import { useState } from "react";
import "./App.css";

function App() {
  const student = {
    avatar:
      "https://cdn-media.sforum.vn/storage/app/media/anh-hoat-hinh-cute-9.jpg",
    fullName: "Bùi Duy Dũng",
    studentId: "HE194358",
    className: "SE2009",
    major: "Software Engineering",
    hobbies: ["Coding", "Gym", "Photography", "Listening to music"],
  };

  const [isOnline, setIsOnline] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const increaseLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className={isDarkMode ? "app dark" : "app light"}>
      <div className="profile-card">
        <img className="avatar" src={student.avatar} alt="Student Avatar" />

        <h1>{student.fullName}</h1>

        <p>
          <strong>Student ID:</strong> {student.studentId}
        </p>

        <p>
          <strong>Class:</strong> {student.className}
        </p>

        <p>
          <strong>Major:</strong> {student.major}
        </p>

        <p className={isOnline ? "status online" : "status offline"}>
          {isOnline ? "Online" : "Offline"}
        </p>

        <h2>Hobbies</h2>

        <ul>
          {student.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        <p className="like-text">Total Likes: {likes}</p>

        <div className="button-group">
          <button onClick={toggleStatus}>
            Change to {isOnline ? "Offline" : "Online"}
          </button>

          <button onClick={toggleDarkMode}>
            Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button onClick={increaseLike}>Like</button>
        </div>
      </div>
    </div>
  );
}

export default App;
