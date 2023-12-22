
import React from 'react';
import { useForm } from 'react-hook-form';

const TaskForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input {...register('title')} placeholder="Title" />
      <textarea {...register('description')} placeholder="Description" />
      <input {...register('deadline')} placeholder="Deadline" />
      <select {...register('priority')}>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
