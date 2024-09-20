'use client'

import { useTodos } from '@/contexts/todoContext'
import * as Dialog from '@radix-ui/react-dialog'
import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../Button/Button'
import styles from './ModalDeleteTask.module.scss'

export const ModalDeleteTask = ({ todoId }: { todoId: number }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleChangeModalOpen = () => setIsModalOpen((prev) => !prev)

	const { handleRemove } = useTodos()

	return (
		<Dialog.Root open={isModalOpen} onOpenChange={handleChangeModalOpen}>
			<Dialog.Trigger className={styles.ghostButton}>
				<Trash size={24} className={styles.trashIcon} />
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.Overlay} />
				<Dialog.Content
					title="remover tarefa"
					className={styles.Content}
					aria-describedby={undefined}
				>
					<Dialog.DialogTitle hidden>Task Delete</Dialog.DialogTitle>

					<h2 className={styles.title}>Nova tarefa</h2>

					<p className={styles.description}>
						Tem certeza que você deseja deletar essa tarefa?
					</p>

					<div className={styles.controlsContainer}>
						<Button
							variant="primary-red"
							className={styles.controlItem}
							onClick={() => {
								handleRemove(todoId)
							}}
						>
							Deletar
						</Button>
						<Button
							variant="secondary-blue"
							className={styles.controlItem}
							onClick={() => {
								handleChangeModalOpen()
							}}
						>
							Cancelar
						</Button>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
