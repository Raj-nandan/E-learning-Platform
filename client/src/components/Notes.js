import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../css/notes.css';

const notesData = [
  { id: 1, title: 'Algorithm Basics', content: 'Introduction to algorithms and their importance in computer science. Covers basic concepts like time complexity and space complexity.', category: 'CS Core', link: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/' },
  { id: 2, title: 'HTML Structure', content: 'Basic HTML document structure, including DOCTYPE, html, head, and body tags. Overview of semantic HTML elements.', category: 'CS Electives', link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started' },
  { id: 3, title: 'Anatomy Overview', content: 'Introduction to human anatomy, covering major body systems and their functions. Includes basic terminology used in medical fields.', category: 'Medical', link: 'https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology' },
  { id: 4, title: 'Calculus Fundamentals', content: 'Introduction to calculus, covering limits, derivatives, and integrals. Includes practical applications in physics and engineering.', category: 'Mathematics', link: 'https://www.khanacademy.org/math/calculus-1' },
  { id: 5, title: 'Quantum Mechanics Basics', content: 'Introduction to quantum mechanics principles, including wave-particle duality, Schrödinger equation, and quantum states.', category: 'Physics', link: 'https://www.feynmanlectures.caltech.edu/III_01.html' },
  { id: 6, title: 'Organic Chemistry Intro', content: 'Basic principles of organic chemistry, including carbon bonding, functional groups, and nomenclature of organic compounds.', category: 'Chemistry', link: 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Map%3A_Organic_Chemistry_(McMurry)' },
  { id: 7, title: 'Genetics 101', content: 'Introduction to genetics, covering DNA structure, gene expression, and basic inheritance patterns. Includes Mendel\'s laws of inheritance.', category: 'Biology', link: 'https://www.nature.com/scitable/topic/genetics-5' },
  { id: 8, title: 'Thermodynamics Principles', content: 'Fundamental principles of thermodynamics, including laws of thermodynamics, entropy, and heat engines. Applications in engineering.', category: 'Engineering', link: 'https://www.grc.nasa.gov/www/k-12/airplane/thermo.html' },
  { id: 9, title: 'Data Structures Overview', content: 'Introduction to common data structures in computer science, including arrays, linked lists, stacks, queues, and trees.', category: 'CS Core', link: 'https://www.geeksforgeeks.org/data-structures/' },
  { id: 10, title: 'JavaScript Basics', content: 'Introduction to JavaScript programming language, covering variables, data types, functions, and basic DOM manipulation.', category: 'CS Electives', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
  { id: 11, title: 'Neural Networks Intro', content: 'Basic concepts of neural networks and deep learning. Covers perceptrons, activation functions, and simple network architectures.', category: 'CS Electives', link: 'https://www.3blue1brown.com/topics/neural-networks' },
  { id: 12, title: 'Pharmacology Basics', content: 'Introduction to pharmacology, including drug classifications, mechanisms of action, and basic principles of drug interactions.', category: 'Medical', link: 'https://www.khanacademy.org/test-prep/mcat/organ-systems' },
];

const categories = ['CS Core', 'CS Electives', 'Medical', 'Engineering', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];

const Notes = () => {
  const [notes, setNotes] = useState(notesData);
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    applyFilters();
  }, [searchTerm, categoryFilter, notes]);

  const applyFilters = () => {
    let result = notes;

    if (searchTerm) {
      result = result.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      result = result.filter((note) => note.category === categoryFilter);
    }

    setFilteredNotes(result);
  };

  const NoteCard = ({ note }) => {
    const { id, title, content, category, link } = note;

    return (
      <div className="note-card">
        <h3>{title}</h3>
        <p>{content.substring(0, 100)}...</p>
        <p>Category: {category}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="note-link">View Full Note</a>
      </div>
    );
  };

  return (
    <div className="notes-container">
      <Nav />
      <h1>Notes</h1>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <select onChange={(e) => setCategoryFilter(e.target.value)} className="category-filter">
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="note-list">
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;