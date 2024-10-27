// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Student Registration App</h1>
      <nav>
        <Link to="/register">Register Student</Link> |{' '}
        <Link to="/students">View Students</Link>
      </nav>
    </div>
  );
}

export default HomePage;
