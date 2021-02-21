import todoData from "../data/myTodoData";
import TodoItem from "./TodoItem"

function MainContent() {
    const todoItems = todoData.map(todo => <TodoItem key={todo.id} item={todo} />)
    return (
        <div className="todo-list">
            {todoItems}
        </div>

    )
}

export default MainContent;