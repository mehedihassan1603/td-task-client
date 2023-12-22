// Dashboard.js
import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";


const initialTasks = {
  todo: [],
  ongoing: [],
  completed: [],
};

const Dashboard = () => {
  const allTask = useLoaderData()
  console.log(allTask)
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState(initialTasks);

  // useEffect(() => {
  //   // Fetch tasks from the server when the component mounts
  //   fetch("https://td-task-server.vercel.app/task")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Update state with fetched tasks
  //       setTasks(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching tasks:", error);
  //       toast.error("Error fetching tasks", {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 2000,
  //       });
  //     });
  // }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const updatedTasks = { ...tasks };
    const [movedTask] = updatedTasks[source.droppableId].splice(
      source.index,
      1
    );
    updatedTasks[destination.droppableId].splice(
      destination.index,
      0,
      movedTask
    );

    setTasks(updatedTasks);
  };

  const addTask = async (newTask) => {
    // Create a copy of tasks
    const updatedTasks = { ...tasks };
  
    // Assign a unique ID to the new task
    newTask.id = uuid();
  
    // Update the corresponding task list with the new task
    updatedTasks.todo = [...updatedTasks.todo, newTask];
  
    try {
      // Send only the new task data to the server
      const response = await fetch("https://td-task-server.vercel.app/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTasks), // Send only the new task, not the entire todo list
      });
  
      const data = await response.json();
  
      if (data.insertedId) {
        // Update state with the new task
        setTasks(updatedTasks);
        toast.success("Add Product successfully!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } else {
        console.error("Failed to add task:", data);
        toast.error("Failed to add task", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Error adding task", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  const deleteTask = (taskId, status) => {
    const updatedTasks = { ...tasks };
    updatedTasks[status] = updatedTasks[status].filter(
      (task) => task.id !== taskId
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="user-profile">
        <img src={user.photoURL} alt="Profile" className="profile-picture" />
        <h2>{user.displayName}</h2>
      </div>
      {user ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="dashboard flex space-x-4">
            {Object.keys(tasks).map((status) => (
              <Droppable key={status} droppableId={status}>
                {(provided) => (
                  <div
                    className={`task-list ${status}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <h2 className="text-xl font-semibold mb-2">{status}</h2>
                    {tasks[status].map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              task={task}
                              index={index}
                              deleteTask={() => deleteTask(task.id, status)}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
          <TaskForm onSubmit={addTask} />
        </DragDropContext>
      ) : (
        <p>Please log in to explore the task management dashboard.</p>
      )}
    <ToastContainer></ToastContainer>
    </div>
  );
};

export default Dashboard;
