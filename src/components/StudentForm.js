import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

function StudentForm() {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (!formData.phoneNumber.match(/^\d{10}$/))
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      addStudent({ ...formData, id: Date.now() });
      setFormData({ name: '', email: '', age: '', class: '', address: '', phoneNumber: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields with validation */}
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      {errors.name && <span>{errors.name}</span>}
      {/* Repeat for other fields with similar pattern */}
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
