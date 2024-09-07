import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../css/lectures.css';

const subjectCategories = [
  "CS Core", "CS Electives", "Medical", "Engineering", "Mathematics", 
  "Physics", "Chemistry", "Biology", "Economics", "Psychology", 
  "Literature", "History"
];


const lecturesData = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    description: "Fundamental algorithms and data structures",
    duration: "1 hr",
    skillLevel: "Intermediate",
    category: "CS Core",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/dummy${i+1}`,
      seen: false
    }))
  },
  {
    id: 2,
    title: "Web Development Basics",
    description: "HTML, CSS, and JavaScript fundamentals",
    duration: "1.5 hrs",
    skillLevel: "Beginner",
    category: "CS Electives",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/webdev${i+1}`,
      seen: false
    }))
  },
  {
    id: 3,
    title: "Human Anatomy",
    description: "Introduction to human body systems",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Medical",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/anatomy${i+1}`,
      seen: false
    }))
  },
  {
    id: 4,
    title: "Mechanical Engineering Principles",
    description: "Basics of mechanical engineering",
    duration: "1.5 hrs",
    skillLevel: "Beginner",
    category: "Engineering",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/mecheng${i+1}`,
      seen: false
    }))
  },
  {
    id: 5,
    title: "Calculus I",
    description: "Limits, derivatives, and integrals",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Mathematics",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/calculus${i+1}`,
      seen: false
    }))
  },
  {
    id: 6,
    title: "Quantum Mechanics",
    description: "Introduction to quantum physics",
    duration: "2.5 hrs",
    skillLevel: "Advanced",
    category: "Physics",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/quantum${i+1}`,
      seen: false
    }))
  },
  {
    id: 7,
    title: "Organic Chemistry",
    description: "Fundamentals of organic compounds",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Chemistry",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/orgchem${i+1}`,
      seen: false
    }))
  },
  {
    id: 8,
    title: "Genetics",
    description: "Principles of heredity and gene function",
    duration: "1.5 hrs",
    skillLevel: "Intermediate",
    category: "Biology",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/genetics${i+1}`,
      seen: false
    }))
  },
  {
    id: 9,
    title: "Microeconomics",
    description: "Individual decision-making in economics",
    duration: "1.5 hrs",
    skillLevel: "Beginner",
    category: "Economics",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/microecon${i+1}`,
      seen: false
    }))
  },
  {
    id: 10,
    title: "Cognitive Psychology",
    description: "Mental processes and their effects on behavior",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Psychology",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/cogpsych${i+1}`,
      seen: false
    }))
  },
  {
    id: 11,
    title: "Shakespeare's Plays",
    description: "Analysis of major Shakespearean works",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Literature",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/shakespeare${i+1}`,
      seen: false
    }))
  },
  {
    id: 12,
    title: "World War II",
    description: "Major events and impacts of WWII",
    duration: "2.5 hrs",
    skillLevel: "Intermediate",
    category: "History",
    videos: Array(10).fill().map((_, i) => ({
      id: `v${i+1}`,
      url: `https://youtu.be/ww2${i+1}`,
      seen: false
    }))
  }
];



const Lectures = () => {
  const [lectures, setLectures] = useState(lecturesData);
  const [filteredLectures, setFilteredLectures] = useState(lectures);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [skillLevelFilter, setSkillLevelFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');

  useEffect(() => {
    applyFilters();
  }, [searchTerm, categoryFilter, skillLevelFilter, durationFilter, lectures]);

  const applyFilters = () => {
    let result = lectures;

    if (searchTerm) {
      result = result.filter((lecture) =>
        lecture.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      result = result.filter((lecture) => lecture.category === categoryFilter);
    }

    if (skillLevelFilter) {
      result = result.filter((lecture) => lecture.skillLevel === skillLevelFilter);
    }

    if (durationFilter) {
      result = result.filter((lecture) => lecture.duration === durationFilter);
    }

    setFilteredLectures(result);
  };

  const handleVideoSeen = (lectureId, videoId) => {
    setLectures(prevLectures => prevLectures.map(lecture => {
      if (lecture.id === lectureId) {
        const updatedVideos = lecture.videos.map(video => 
          video.id === videoId ? { ...video, seen: true } : video
        );
        return { ...lecture, videos: updatedVideos };
      }
      return lecture;
    }));
  };

  const calculateProgress = (lecture) => {
    const seenVideos = lecture.videos.filter(video => video.seen).length;
    return Math.round((seenVideos / lecture.videos.length) * 100);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submission
    applyFilters();
  };

  const LectureCard = ({ lecture, onVideoSeen }) => {
    const { id, title, description, duration, skillLevel, category, videos } = lecture;
    const progress = calculateProgress(lecture);

    return (
      <div className="lecture-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Duration: {duration}</p>
        <p>Skill Level: {skillLevel}</p>
        <p>Category: {category}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
        <div className="video-list">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <button 
                onClick={() => onVideoSeen(id, video.id)}
                className={video.seen ? 'seen' : ''}
              >
                {video.seen ? 'Seen' : 'Mark as Seen'}
              </button>
              <a href={video.url} target="_blank" rel="noopener noreferrer">Video Link</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Nav />
      <div className="lectures-container">
        <h1>Lectures</h1>

        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search lectures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <button type="submit">Search</button>
        </form>

        <div className="filters">
          <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            {subjectCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select onChange={(e) => setSkillLevelFilter(e.target.value)}>
            <option value="">All Skill Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select onChange={(e) => setDurationFilter(e.target.value)}>
            <option value="">All Durations</option>
            <option value="30 mins">30 mins</option>
            <option value="1 hr">1 hr</option>
            <option value="1.5 hrs">1.5 hrs</option>
            <option value="2 hrs">2 hrs</option>
          </select>
        </div>

        <div className="lecture-list">
          {filteredLectures.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} onVideoSeen={handleVideoSeen} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lectures;