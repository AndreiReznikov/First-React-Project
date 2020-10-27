import React from 'react';

const CommentItem = (props) => {
  return (
    <li 
  >
    {props.name}
  <div
  className = 'items'
  >
  <span
    className = 'user'
  >
    Пользователь: {props.user}
  </span>
  <span
    className = 'date'
  >
    Дата: {props.date}
  </span>
  <span
    className = 'time'
  >
    Время: {props.time}
  </span>
  </div>
  <button
    className = 'btn-remove'
      onClick = {props.removeComment}
  />
  </li>
  );
}

export default CommentItem;