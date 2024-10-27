// StudentsPage.js
import React, { useState } from 'react';
import StudentList from '../components/StudentList';
import Pagination from '../components/Pagination';

function StudentsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  return (
    <div>
      <h2>Student List</h2>
      <StudentList currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Pagination
        totalItems={50}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default StudentsPage;
