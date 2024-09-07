import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../css/cources.css';

const coursesData = [
  { id: 1, title: 'Introduction to Python', subject: 'Computer Science', duration: '4 weeks', level: 'Beginner', url: 'https://www.python.org/about/gettingstarted/' },
  { id: 2, title: 'Data Structures and Algorithms', subject: 'Computer Science', duration: '8 weeks', level: 'Intermediate', url: 'https://www.geeksforgeeks.org/data-structures/' },
  { id: 3, title: 'Web Development with React', subject: 'Computer Science', duration: '6 weeks', level: 'Intermediate', url: 'https://reactjs.org/tutorial/tutorial.html' },
  { id: 4, title: 'Machine Learning Fundamentals', subject: 'Computer Science', duration: '10 weeks', level: 'Advanced', url: 'https://www.coursera.org/learn/machine-learning' },
  { id: 5, title: 'Calculus I', subject: 'Mathematics', duration: '12 weeks', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/' },
  { id: 6, title: 'Linear Algebra', subject: 'Mathematics', duration: '8 weeks', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/' },
  { id: 7, title: 'Statistics and Probability', subject: 'Mathematics', duration: '6 weeks', level: 'Beginner', url: 'https://www.khanacademy.org/math/statistics-probability' },
  { id: 8, title: 'Classical Mechanics', subject: 'Physics', duration: '10 weeks', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/physics/8-01sc-classical-mechanics-fall-2016/' },
  { id: 9, title: 'Quantum Mechanics', subject: 'Physics', duration: '12 weeks', level: 'Advanced', url: 'https://ocw.mit.edu/courses/physics/8-04-quantum-physics-i-spring-2013/' },
  { id: 10, title: 'Thermodynamics', subject: 'Physics', duration: '8 weeks', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/chemistry/5-60-thermodynamics-kinetics-spring-2008/' },
  { id: 11, title: 'Organic Chemistry', subject: 'Chemistry', duration: '10 weeks', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/chemistry/5-12-organic-chemistry-i-spring-2003/' },
  { id: 12, title: 'Inorganic Chemistry', subject: 'Chemistry', duration: '8 weeks', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/chemistry/5-04-principles-of-inorganic-chemistry-ii-fall-2008/' },
  { id: 13, title: 'Biochemistry', subject: 'Chemistry', duration: '12 weeks', level: 'Advanced', url: 'https://ocw.mit.edu/courses/chemistry/5-07sc-biological-chemistry-i-fall-2013/' },
  { id: 14, title: 'Cell Biology', subject: 'Biology', duration: '6 weeks', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/biology/7-06-cell-biology-spring-2007/' },
  { id: 15, title: 'Genetics and Evolution', subject: 'Biology', duration: '8 weeks', level: 'Intermediate', url: 'https://ocw.mit.edu/courses/biology/7-03-genetics-fall-2004/' },
];

const subjects = ['All', 'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];

const Courses = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const filteredCourses = selectedSubject === 'All'
    ? coursesData
    : coursesData.filter(course => course.subject === selectedSubject);

  return (
    <div className="courses-page">
      <Nav />
      <div className="courses-container">
        <h1>Courses</h1>
        <div className="subject-filter">
          <label htmlFor="subject-select">Filter by subject:</label>
          <select
            id="subject-select"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <a href={course.url} key={course.id} className="course-card-link" target="_blank" rel="noopener noreferrer">
              <div className="course-card">
                <h2>{course.title}</h2>
                <p>Subject: {course.subject}</p>
                <p>Duration: {course.duration}</p>
                <p>Level: {course.level}</p>
                <button className="enroll-btn" onClick={(e) => e.preventDefault()}>Enroll Now</button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;