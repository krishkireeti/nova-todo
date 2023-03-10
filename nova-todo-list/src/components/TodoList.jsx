import React from "react";
import Item from './Item';
import PropTypes from 'prop-types';

const ToDoList = ({ toDoItems }) => {
 
    return (
        <ul>
            {toDoItems.map(({id, content, complete})=> (
                <Item id = {id} content={content} complete = {complete} />
            ))}
        </ul>
    );
}

ToDoList.PropTypes = {
  toDoItems: PropTypes.arrayOf(
     PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        complete: PropTypes.bool.isRequired,
     })
  ).isRequired,
};

export default ToDoList;