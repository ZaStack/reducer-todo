import React from 'react';

const TodoList = (props) => {
    const handleToggle = (id) => {
        props.dispatch({type: "COMPLETED", id: id})
    }

    return(
        <div>
                {props.state.map(todo => {
                    return (
                        <div key={todo.id}>
                            <p>{todo.item}</p>
                        </div>
                    )
            })}
        </div>
)}

export default TodoList;