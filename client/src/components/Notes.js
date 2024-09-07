import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../css/notes.css';

const notesData = [
  { id: 1, title: 'Algorithm Basics', content: 'Introduction to algorithms and their importance in computer science. Covers basic concepts like time complexity and space complexity.', category: 'CS Core' },
  { id: 2, title: 'HTML Structure', content: 'Basic HTML document structure, including DOCTYPE, html, head, and body tags. Overview of semantic HTML elements.', category: 'CS Electives' },
  { id: 3, title: 'Anatomy Overview', content: 'Introduction to human anatomy, covering major body systems and their functions. Includes basic terminology used in medical fields.', category: 'Medical' },
  { id: 4, title: 'Calculus Fundamentals', content: 'Introduction to calculus, covering limits, derivatives, and integrals. Includes practical applications in physics and engineering.', category: 'Mathematics' },
  { id: 5, title: 'Quantum Mechanics Basics', content: 'Introduction to quantum mechanics principles, including wave-particle duality, Schrödinger equation, and quantum states.', category: 'Physics' },
  { id: 6, title: 'Organic Chemistry Intro', content: 'Basic principles of organic chemistry, including carbon bonding, functional groups, and nomenclature of organic compounds.', category: 'Chemistry' },
  { id: 7, title: 'Genetics 101', content: 'Introduction to genetics, covering DNA structure, gene expression, and basic inheritance patterns. Includes Mendel\'s laws of inheritance.', category: 'Biology' },
  { id: 8, title: 'Thermodynamics Principles', content: 'Fundamental principles of thermodynamics, including laws of thermodynamics, entropy, and heat engines. Applications in engineering.', category: 'Engineering' },
  { id: 9, title: 'Data Structures Overview', content: 'Introduction to common data structures in computer science, including arrays, linked lists, stacks, queues, and trees.', category: 'CS Core' },
  { id: 10, title: 'JavaScript Basics', content: 'Introduction to JavaScript programming language, covering variables, data types, functions, and basic DOM manipulation.', category: 'CS Electives' },
  { id: 11, title: 'Neural Networks Intro', content: 'Basic concepts of neural networks and deep learning. Covers perceptrons, activation functions, and simple network architectures.', category: 'CS Electives' },
  { id: 12, title: 'Pharmacology Basics', content: 'Introduction to pharmacology, including drug classifications, mechanisms of action, and basic principles of drug interactions.', category: 'Medical' },
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
    const { id, title, content, category } = note;

    return (
      <div className="note-card">
        <h3>{title}</h3>
        <p>{content.substring(0, 100)}...</p>
        <p>Category: {category}</p>
        <a href={`/notes/${id}`} className="note-link">View Full Note</a>
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