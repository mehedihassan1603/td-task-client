// TaskList.js
import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const TaskList = ({ tasks, status, addTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskDeadline, setNewTaskDeadline] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('low');

  const handleAddTask = () => {
    // Validate input fields before adding the task
    if (!newTaskTitle || !newTaskDescription || !newTaskDeadline) {
      // Handle validation error (e.g., display a message)
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now().toString(), // Use a unique identifier
      title: newTaskTitle,
      description: newTaskDescription,
      deadline: newTaskDeadline,
      priority: newTaskPriority,
    };

    // Clear input fields
    setNewTaskTitle('');
    setNewTaskDescription('');
    setNewTaskDeadline('');
    setNewTaskPriority('low');

    // Add the new task
    addTask(newTask);
  };

  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          className={`task-list ${status}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{status}</h2>
            <form>
              <input
                type="text"
                placeholder="Title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="w-full border rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Description"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                className="w-full border rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Deadline"
                value={newTaskDeadline}
                onChange={(e) => setNewTaskDeadline(e.target.value)}
                className="w-full border rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
              />
              <select
                value={newTaskPriority}
                onChange={(e) => setNewTaskPriority(e.target.value)}
                className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
              >
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
              <button
                type="button"
                onClick={handleAddTask}
                className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none"
              >
                Add Task
              </button>
            </form>
          </div>

          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
