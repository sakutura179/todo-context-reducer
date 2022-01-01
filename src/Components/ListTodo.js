import { useState } from "react";
import { useStore } from "./store"
import { deleteJob, editJob } from "./Todo/actions";

function ListTodo() {
    const [state, dispatch] = useStore();
    const { todos } = state;

    const [activeEdit, setActiveEdit] = useState({
        active: -1,
        editValue: ''
    })

    const openEdit = (index, todo) => {
        setActiveEdit({
            active: index,
            editValue: todo
        })
    }

    const handleEdit = (index) => {
        setActiveEdit({
            ...activeEdit,
            active: -1
        })
        dispatch(editJob(index, activeEdit.editValue))
    }

    const handleDelete = (index) => {
        dispatch(deleteJob(index))
    }
    
    return (
        <ul className="list">
            {todos.map((todo, index) => {
                if (activeEdit.active !== index)
                    return (
                        <li className="list-item" key={index}>
                            {todo}
                            <box-icon name='edit-alt' onClick={() => openEdit(index, todo)}></box-icon>
                            <box-icon name='trash' onClick={() => handleDelete(index)}></box-icon>
                        </li>
                    )
                else 
                    return (
                        <li className="list-item" key={index}>
                            <input 
                                type={'text'} 
                                value={activeEdit.editValue}
                                onChange={(e) => setActiveEdit({
                                    ...activeEdit,
                                    editValue: e.target.value
                                })}
                            />
                            <button onClick={() => handleEdit(index)}>
                                Edit
                            </button>
                        </li>
                    )
            })}
        </ul>
    )
}

export default ListTodo