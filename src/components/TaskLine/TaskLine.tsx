import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'lucide-react'
import { ModalDeleteTask } from '../ModalDeleteTask/ModalDeleteTask'
import styles from './TaskLine.module.scss'

interface TaskLineProps {
	content: string
	checked: boolean
	todoId: number
	onCheck: () => void
}
export const TaskLine = ({
	content,
	checked,
	onCheck,
	todoId,
}: TaskLineProps) => {
	return (
		<div className={styles.taskLineContainer}>
			<Checkbox.Root
				className={styles.checkbox}
				checked={checked}
				onCheckedChange={onCheck}
			>
				<Checkbox.Indicator>
					<Check className={styles.checkboxIcon} size={18} />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<h3 data-state={checked}>{content}</h3>
			<ModalDeleteTask todoId={todoId} />
		</div>
	)
}
