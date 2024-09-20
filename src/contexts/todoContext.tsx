'use client'

import { type Todo, todoReducer } from '@/reducers/todoReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'

type TodosContext = {
	todos: Todo[]
	handleAddTodo: (todo: string) => void
	handleChangeCheck: (id: number) => void
	handleRemove: (id: number) => void
}

const todosContext = createContext({} as TodosContext)

const TodosProvider = ({ children }: { children: React.ReactNode }) => {
	const [todos, dispatchTodos] = useReducer(todoReducer, [] as Todo[])

	const handleAddTodo = (todo: string) => {
		dispatchTodos({
			type: 'ADD_TODO',
			payload: { todo },
		})
	}

	const handleChangeCheck = (id: number) => {
		dispatchTodos({
			type: 'TOGGLE_TODO_CHECK',
			payload: { todoId: id },
		})
	}

	const handleRemove = (id: number) => {
		dispatchTodos({
			type: 'REMOVE_TODO',
			payload: { todoId: id },
		})
	}

	return (
		<todosContext.Provider
			value={{
				todos,
				handleAddTodo,
				handleChangeCheck,
				handleRemove,
			}}
		>
			{children}
		</todosContext.Provider>
	)
}

const useTodos = () => useContext(todosContext)

export { TodosProvider, useTodos }
