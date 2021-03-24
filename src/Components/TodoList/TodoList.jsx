import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="list__element">
          <div className="list__element__user">
            {`User: ${todo.user.name}`}
          </div>
          <div className="list__element__title">
            {`Title: ${todo.title}`}
          </div>
          <div className="list__element__completed">
            {`Completed: ${todo.completed ? 'true' : 'false'}`}
          </div>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
