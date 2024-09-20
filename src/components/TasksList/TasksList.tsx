'use client'

import { useTodos } from '@/contexts/todoContext'
import { useEffect, useState } from 'react'
import { TaskLine } from '../TaskLine/TaskLine'
import styles from './TasksList.module.scss'

export const TasksList = () => {
	const { todos, handleChangeCheck } = useTodos()

	return (
		<div className={styles.tasksContainer}>
			<h2>Suas tarefas de hoje</h2>
			<div className={styles.containerList}>
				{todos.map((t) => {
					if (!t.isChecked)
						return (
							<TaskLine
								key={t.id}
								checked={t.isChecked}
								content={t.todo}
								onCheck={() => {
									handleChangeCheck(t.id)
								}}
								todoId={t.id}
							/>
						)
				})}
				{(todos.length === 0 ||
					todos.filter((t) => !t.isChecked).length === 0) && (
					<p className={styles.emptyState}>Nenhuma tarefa para hoje</p>
				)}
			</div>
			<h2>Tarefas finalizadas</h2>
			<div className={styles.containerList}>
				{todos.map((t) => {
					if (t.isChecked)
						return (
							<TaskLine
								key={t.id}
								checked={t.isChecked}
								content={t.todo}
								onCheck={() => {
									handleChangeCheck(t.id)
								}}
								todoId={t.id}
							/>
						)
				})}
				{(todos.length === 0 ||
					todos.filter((t) => t.isChecked).length === 0) && (
					<p className={styles.emptyState}>Nenhuma tarefa finalizada</p>
				)}
			</div>
		</div>
	)
}
