import { setJob, addJob } from "./actions";
import { useRef } from "react"
import { useStore } from '../store'

function TodoList() {
    const [state, dispatch] = useStore();

    const inputRef = useRef();

    const handleAdd = () => {
        if (state.todoInput !== '') {
            dispatch(addJob(state.todoInput))
            dispatch(setJob(''))
            inputRef.current.focus()
        }
    }

    return (
        <div className="container">
            <input 
                ref={inputRef}
                type={'text'}
                placeholder="Nhập vào công việc..."
                value={state.todoInput}
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button
                className="add-btn"
                onClick={handleAdd}
            >
                Thêm
            </button>
        </div>
    )
}

export default TodoList