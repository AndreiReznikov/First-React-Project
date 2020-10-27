import React from 'react';

const InputItem = (props) => {
  return (
      <input
        type = 'text'
        placeholder = 'Имя'
        value = {props.newName}
        onChange = {props.setState}
      />
  );
}

export default InputItem;