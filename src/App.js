import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import Footer from './components/Footer';

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amina Hassan",
      track: "Frontend Development",
      bio: "Passionate about creating beautiful user interfaces with React",
      skillLevel: "Beginner",
      isActive: true,
    },
    {
      id: 2,
      name: "Kofi Mensah",
      track: "Backend Development",
      bio: "Building robust APIs and working with databases",
      skillLevel: "Intermediate",
      isActive: false,
    },
    {
      id: 3,
      name: "Fatima Abdullahi",
      track: "Full Stack Development",
      bio: "Combining frontend and backend skills to build complete solutions",
      skillLevel: "Advanced",
      isActive: true,
    },
    {
      id: 4,
      name: "Chidi Okafor",
      track: "Mobile Development",
      bio: "Creating cross-platform mobile apps using React Native",
      skillLevel: "Intermediate",
      isActive: true,
    },
    {
      id: 5,
      name: "Zainab Mohammed",
      track: "UI/UX Design",
      bio: "Designing intuitive user experiences and interfaces",
      skillLevel: "Beginner",
      isActive: false,
    },
    {
      id: 6,
      name: "Kwame Asante",
      track: "Data Science",
      bio: "Analyzing data and building machine learning models",
      skillLevel: "Advanced",
      isActive: true,
    },
  ]);

  function toggleActive(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <ProfileList students={students} toggleActive={toggleActive} />
      <Footer totalStudents={students.length} />
    </div>
  );
}

export default App;
