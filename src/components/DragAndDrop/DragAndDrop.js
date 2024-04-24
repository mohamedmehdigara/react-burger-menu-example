import React, { useState } from 'react';
import './DragAndDrop.css';

const DragAndDrop = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const taskId = parseInt(e.dataTransfer.getData('text/plain'));
    const task = tasks.find((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks.splice(index, 0, task);
    setTasks(newTasks);
  };

  return (
    <div className="drag-and-drop">
      <h2>Drag and Drop Tasks</h2>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="task"
            draggable
            onDragStart={(e) => handleDragStart(e, task.id)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            {task.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
