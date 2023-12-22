import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index, deleteTask }) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="task-item">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
            <p className={`text-sm ${getPriorityClass(task.priority)}`}>
              Priority: {task.priority}
            </p>
            <button onClick={deleteTask} className="text-red-500">
              Delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const getPriorityClass = (priority) => {
  switch (priority) {
    case 'low':
      return 'text-green-500';
    case 'moderate':
      return 'text-yellow-500';
    case 'high':
      return 'text-red-500';
    default:
      return '';
  }
};

export default Task;
