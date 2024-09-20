import { ModalCreateTask } from '@/components/ModalCreateTask/ModalCreateTask'
import { TasksList } from '@/components/TasksList/TasksList'
import styles from '@/styles/home.module.scss'

export default function Home() {
	return (
		<main className={styles.mainContainer}>
			<TasksList />
			<ModalCreateTask />
		</main>
	)
}
