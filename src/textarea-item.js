import React from 'react';

const TextareaItem = (props) => {
  return (
      <textarea 
        placeholder = 'Новый комментарий'
        value = {props.newCommentText}
        onChange = {props.setState}
      />
  );
}

export default TextareaItem;