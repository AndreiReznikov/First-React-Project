import React from 'react';
import CommentItem from './comment-item';
import TextareaItem from './textarea-item';
import InputItem from './input-item';
import ButtonItem from './btn-item';

class CommentApp extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      newCommentText: '',
      newName: ''
    };
  }

  removeComment(key) {
    const comments = this.state.comments;
    const commentList = JSON.parse(localStorage.getItem('commentsList'));
    
      commentList.forEach((comment, i) => {
        if (key === i) {
          commentList.splice(i, 1);
        }
      });

    this.setState({comments});

    localStorage.setItem('commentsList', JSON.stringify(commentList));
  }

  addTodo() {
    const comments = this.state.comments;
    const newCommentText = this.state.newCommentText;
    const newName = this.state.newName;
    const commentList = JSON.parse(localStorage.getItem('commentsList'));

    if (newCommentText !== '' && newName !== '' && commentList == null) {
      comments.push({
        name: this.state.newCommentText,
        user: this.state.newName,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      });
    }
    else {
      commentList.push({
        name: this.state.newCommentText,
        user: this.state.newName,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      });
    }

    this.setState({
      comments,
      newCommentText: '',
      newName: ''
  });

  if (localStorage.getItem('commentsList') == null) {
      localStorage.setItem('commentsList', JSON.stringify(comments));
    }
  else {
      localStorage.setItem('commentsList', JSON.stringify(commentList));
    }
  }

  getCommentList() {
    if (localStorage.getItem('commentsList') !== null) {
      const commentList = JSON.parse(localStorage.getItem('commentsList'));
      
      return commentList;
    }
     return this.state.comments;
  }

  render() {
    return (
      <div
        className = 'container'
      >
      <ul>
        {
          
          this.getCommentList().map((comment, i) => {

        return (
        <CommentItem
            key = {i}
            name = {comment.name}
            user = {comment.user}
            date = {comment.date}
            time = {comment.time}
            removeComment = {this.removeComment.bind(this, i)}
          />
        )
        })
      }
      </ul>

      <form>
        <TextareaItem
          newCommentText = {this.state.newCommentText}
          setState = {ev => {
            this.setState({
              newCommentText: ev.target.value
            });
          }}
        />
        <InputItem
          newName = {this.state.newName}
          setState = {ev => {
            this.setState({
              newName: ev.target.value
            });
          }}
        />
      </form>
      <div
        className = 'btn-container'
      >
        <ButtonItem
          addTodo = {ev => {this.addTodo()}}
        />
      </div>
      </div>
    );
  }
}

export default CommentApp;
