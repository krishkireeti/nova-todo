import React, {useState} from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const AddToDoButton = () => {

    const [ inputValue, setInputValue ] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    AddToDoButton.propTypes = {
        onAddToDo: PropTypes.func.isRequired,
       }

    const addToDoItem = e => {
      e.preventDefault();

      const item = {
         id: uuidv4(),
         content: inputValue,
         complete: false
      }

      onAddToDo(item);
      setInputValue("");
    };
 

    return (

        <div>
            <form onSubmit = {addToDoItem}>
                <input onChange = {handleChange} value={inputValue} placeholder="Enter Task" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddToDoButton;