import React, { createContext, useState } from 'react';
import mockData from '../data.json';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(mockData);

  const addStudent = (student) => setStudents([...students, student]);

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
