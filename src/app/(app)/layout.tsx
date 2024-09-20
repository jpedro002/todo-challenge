import { AppHeader } from '@/components/AppHeader/AppHeader'
import styles from '@/styles/appLayout.module.scss'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.layout}>
			<AppHeader />
			{children}
		</div>
	)
}
export default MainLayout
