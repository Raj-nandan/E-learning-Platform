import React, { useState } from 'react';
import Nav from './Nav';
import '../css/assesments.css';

const assessmentsData = [
  { id: 1, title: 'Introduction to Programming', subject: 'Computer Science', duration: '45 min', difficulty: 'Beginner', url: 'https://www.hackerrank.com/domains/tutorials/10-days-of-javascript' },
  { id: 2, title: 'Data Structures and Algorithms', subject: 'Computer Science', duration: '60 min', difficulty: 'Intermediate', url: 'https://leetcode.com/explore/featured/card/top-interview-questions-easy/' },
  { id: 3, title: 'Web Development Basics', subject: 'Computer Science', duration: '30 min', difficulty: 'Beginner', url: 'https://www.freecodecamp.org/learn/responsive-web-design/' },
  { id: 4, title: 'Calculus I', subject: 'Mathematics', duration: '90 min', difficulty: 'Intermediate', url: 'https://www.khanacademy.org/math/calculus-1' },
  { id: 5, title: 'Linear Algebra', subject: 'Mathematics', duration: '60 min', difficulty: 'Intermediate', url: 'https://www.edx.org/course/linear-algebra-foundations-to-frontiers' },
  { id: 6, title: 'Statistics Fundamentals', subject: 'Mathematics', duration: '45 min', difficulty: 'Beginner', url: 'https://www.coursera.org/learn/basic-statistics' },
  { id: 7, title: 'Classical Mechanics', subject: 'Physics', duration: '75 min', difficulty: 'Advanced', url: 'https://ocw.mit.edu/courses/physics/8-01sc-classical-mechanics-fall-2016/' },
  { id: 8, title: 'Quantum Mechanics', subject: 'Physics', duration: '90 min', difficulty: 'Advanced', url: 'https://www.edx.org/course/quantum-mechanics-for-everyone' },
  { id: 9, title: 'Thermodynamics', subject: 'Physics', duration: '60 min', difficulty: 'Intermediate', url: 'https://www.coursera.org/learn/thermodynamics-intro' },
  { id: 10, title: 'Organic Chemistry', subject: 'Chemistry', duration: '75 min', difficulty: 'Intermediate', url: 'https://www.edx.org/course/introduction-to-organic-chemistry' },
  { id: 11, title: 'Inorganic Chemistry', subject: 'Chemistry', duration: '60 min', difficulty: 'Intermediate', url: 'https://www.coursera.org/learn/chemistry-1' },
  { id: 12, title: 'Biochemistry', subject: 'Chemistry', duration: '90 min', difficulty: 'Advanced', url: 'https://www.edx.org/course/principles-of-biochemistry' },
  { id: 13, title: 'Cell Biology', subject: 'Biology', duration: '45 min', difficulty: 'Intermediate', url: 'https://www.coursera.org/learn/cell-biology' },
  { id: 14, title: 'Genetics', subject: 'Biology', duration: '60 min', difficulty: 'Intermediate', url: 'https://www.edx.org/course/introduction-to-biology-the-secret-of-life-3' },
  { id: 15, title: 'Ecology', subject: 'Biology', duration: '30 min', difficulty: 'Beginner', url: 'https://www.coursera.org/learn/ecology-conservation' },
];

const subjects = ['All', 'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];

const Assessments = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const filteredAssessments = selectedSubject === 'All'
    ? assessmentsData
    : assessmentsData.filter(assessment => assessment.subject === selectedSubject);

  return (
    <div className="assessments-page">
      <Nav />
      <div className="assessments-container">
        <h1>Assessments</h1>
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
        <div className="assessments-grid">
          {filteredAssessments.map(assessment => (
            <a href={assessment.url} key={assessment.id} className="assessment-card-link" target="_blank" rel="noopener noreferrer">
              <div className="assessment-card">
                <h2>{assessment.title}</h2>
                <p>Subject: {assessment.subject}</p>
                <p>Duration: {assessment.duration}</p>
                <p>Difficulty: {assessment.difficulty}</p>
                <button className="start-assessment-btn" onClick={(e) => e.preventDefault()}>Start Assessment</button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assessments;