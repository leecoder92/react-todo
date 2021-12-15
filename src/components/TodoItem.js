import React, { Component } from 'react';
import './TodoItem.css'
import classNames from 'classnames'

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation()
          onRemove(id)
        }}>
          &times;
        </div>
        <div className={classNames('todo-text', {checked})}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}

export default TodoItem;