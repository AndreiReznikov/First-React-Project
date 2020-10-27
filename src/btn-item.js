import React from 'react';

const ButtonItem = (props) => {
  return (
    <button
      className = 'btn-add'
      onClick = {props.addTodo}
    >
      Добавить комментарий
    </button>
  );
}

export default ButtonItem;