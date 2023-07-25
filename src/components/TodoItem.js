import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/app.css';

const TodoItem = ({ itemProp, setTodos, delTodo }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(itemProp.title);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSave = () => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === itemProp.id) {
        return {
          ...todo,
          title: editedTitle,
        };
      }
      return todo;
    }));
    setEditing(false);
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {editing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
            className={styles['edit-input']}
          />
        ) : (
          itemProp.title
        )}
      </div>
      {editing ? (
        <button type="button" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button type="button" onClick={handleEditing}>
          Edit
        </button>
      )}
      <button type="button" onClick={() => delTodo(itemProp.id)}>
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
