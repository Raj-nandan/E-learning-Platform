import React from 'react'
import Nav from './Nav'
import '../css/dashboard.css';

const Dashboard = () => {
  // Dummy data
  const userData = {
    user: {
      email: 'user@example.com',
      created_at: '2023-05-01T00:00:00.000Z'
    },
    courses: [
      { _id: '1', title: 'Introduction to React' },
      { _id: '2', title: 'Advanced JavaScript' },
      { _id: '3', title: 'Node.js Fundamentals' }
    ],
    lectures: [
      { _id: '1', title: 'React Components' },
      { _id: '2', title: 'State and Props' },
      { _id: '3', title: 'Hooks in React' }
    ],
    assessments: [
      { _id: '1', title: 'React Basics Quiz' },
      { _id: '2', title: 'JavaScript ES6 Test' }
    ],
    notes: [
      { _id: '1', title: 'React Lifecycle Methods' },
      { _id: '2', title: 'Async/Await in JavaScript' },
      { _id: '3', title: 'Express.js Middleware' },
      { _id: '4', title: 'MongoDB Queries' }
    ]
  }

  return (
    <div>
      <Nav />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="dashboard-section">
          <h2>User Info</h2>
          <p>Email: {userData.user.email}</p>
          <p>Joined: {new Date(userData.user.created_at).toLocaleDateString()}</p>
        </div>

        <div className="dashboard-section">
          <h2>Courses ({userData.courses.length})</h2>
          <ul>
            {userData.courses.map(course => (
              <li key={course._id}>{course.title}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-section">
          <h2>Lectures ({userData.lectures.length})</h2>
          <ul>
            {userData.lectures.map(lecture => (
              <li key={lecture._id}>{lecture.title}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-section">
          <h2>Assessments ({userData.assessments.length})</h2>
          <ul>
            {userData.assessments.map(assessment => (
              <li key={assessment._id}>{assessment.title}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-section">
          <h2>Notes ({userData.notes.length})</h2>
          <ul>
            {userData.notes.map(note => (
              <li key={note._id}>{note.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard