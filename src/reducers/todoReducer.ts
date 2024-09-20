interface Todo {
	id: number
	todo: string
	isChecked: boolean
}

type ADD_TODO = {
	type: 'ADD_TODO'
	payload: { todo: string }
}

type REMOVE_TODO = {
	type: 'REMOVE_TODO'
	payload: { todoId: number }
}

type TOGGLE_TODO_CHECK = {
	type: 'TOGGLE_TODO_CHECK'
	payload: { todoId: number }
}

type TodoAction = ADD_TODO | REMOVE_TODO | TOGGLE_TODO_CHECK

const todoReducer = (todos: Todo[], action: TodoAction) => {
	switch (action.type) {
		case 'ADD_TODO': {
			return [
				...todos,
				{
					id: Date.now(),
					todo: action.payload.todo,
					isChecked: false,
				},
			]
		}
		case 'TOGGLE_TODO_CHECK': {
			return todos.map((todo) =>
				todo.id === action.payload.todoId
					? { ...todo, isChecked: !todo.isChecked }
					: todo,
			)
		}
		case 'REMOVE_TODO': {
			return todos.filter((todo) => todo.id !== action.payload.todoId)
		}

		default:
			return todos
	}
}

export { todoReducer, type Todo }
