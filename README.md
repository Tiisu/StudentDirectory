# Student Profile Directory

A React-based web application that displays student profiles with interactive features. This project demonstrates core React concepts including components, props, state management, and conditional rendering.

## Project Overview

This application displays a directory of student profiles, allowing users to view student information and toggle their active/inactive status. Each student card shows their name, track, bio, skill level, and current status.

## Features

- Display multiple student profile cards
- View student information (name, track, bio, skill level)
- Toggle student status between Active and Inactive
- Responsive design with clean UI
- Dynamic rendering using React

## React Concepts Demonstrated

This project showcases the following React fundamentals:

1. **Components** - Modular component structure (Header, ProfileList, ProfileCard, Footer)
2. **Props** - Passing data and functions from parent to child components
3. **State Management** - Using `useState` hook to manage student data
4. **Conditional Rendering** - Displaying different UI based on student status
5. **Array Mapping** - Using `.map()` to render multiple components dynamically
6. **Event Handling** - Button click events to update state

## Component Structure

```
App
├── Header (displays title)
├── ProfileList (maps through students array)
│   └── ProfileCard (individual student cards)
└── Footer (shows total student count)
```

## Student Data

The application includes 6 student profiles with the following information:
- Name
- Track (area of study)
- Bio (short description)
- Skill Level (Beginner, Intermediate, Advanced)
- Status (Active/Inactive)

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/Tiisu/StudentDirectory.git
cd StudentDirectory
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- HTML5

## Color Scheme

- Primary Color: Yellow (#F4D03F)
- Background: White
- Text: Dark gray and black tones

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── ProfileList.js
│   ├── ProfileCard.js
│   └── Footer.js
├── App.js
├── App.css
└── index.js
```

## Key Functions

### toggleActive Function
```javascript
function toggleActive(id) {
  setStudents((prevStudents) =>
    prevStudents.map((student) =>
      student.id === id
        ? { ...student, isActive: !student.isActive }
        : student
    )
  );
}
```

This function updates the active status of a student by their ID, demonstrating immutable state updates in React.

## Learning Outcomes

Through this project, I learned:
- How to structure a React application with multiple components
- How to pass data between components using props
- How to manage and update state using React hooks
- How to render lists dynamically with the map function
- How to implement conditional rendering
- How to handle user interactions and events

## Author

Tiisu Sharif

## License

This project is licensed under the MIT License.
