import { useStore } from "./store"

function ListTodo() {
    const [state] = useStore();
    const { todos } = state;
    
    return (
        <ul className="list">
            {todos.map((todo, index) => {
                return (
                    <li className="list-item" key={index}>
                        {todo}
                    </li>
                )
            })}
        </ul>
    )
}

export default ListTodo