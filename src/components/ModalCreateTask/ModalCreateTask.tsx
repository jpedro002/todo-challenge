'use client'

import { useTodos } from '@/contexts/todoContext'
import * as Dialog from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import styles from './ModalCreateTask.module.scss'

type FormType = {
	titulo: string
}

export const ModalCreateTask = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const { handleAddTodo } = useTodos()

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm<FormType>()

	const handleChangeModalOpen = () => setIsModalOpen((prev) => !prev)

	const onSubmit = (data: FormType) => {
		handleAddTodo(data.titulo)
		reset()
		handleChangeModalOpen()
	}

	return (
		<Dialog.Root open={isModalOpen} onOpenChange={handleChangeModalOpen}>
			<Dialog.Trigger asChild>
				<Button size="full" variant="primary-blue">
					Adicionar nova tarefa
				</Button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.Overlay} />
				<Dialog.Content
					title="Adicionar nova tarefa"
					className={styles.Content}
					aria-describedby={undefined}
				>
					<Dialog.DialogTitle hidden>Task Creation</Dialog.DialogTitle>

					<h2 className={styles.title}>Nova tarefa</h2>

					<form
						action=""
						className={styles.formContainer}
						onSubmit={handleSubmit((data) => {
							if (data.titulo.trim()) {
								onSubmit(data)
							} else {
								setError('titulo', {
									type: 'manual',
									message: 'O campo é obrigatório',
								})
							}
						})}
					>
						<div className={styles.inputContainer}>
							<label htmlFor="titulo" className={styles.Label}>
								Título
							</label>
							<input
								id="titulo"
								type="text"
								placeholder="Digite"
								className={styles.Input}
								{...register('titulo')}
							/>
							{errors.titulo && (
								<span className={styles.FormError}>O campo é obrigatório</span>
							)}
						</div>

						<div className={styles.controlsContainer}>
							<Button className={styles.controlItem}>Adicionar</Button>
							<Button
								variant="secondary-blue"
								className={styles.controlItem}
								onClick={handleChangeModalOpen}
							>
								Cancelar
							</Button>
						</div>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
