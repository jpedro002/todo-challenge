import Image from 'next/image'
import styles from './AppHeader.module.scss'

export const AppHeader = () => {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.logoContainer}>
				<Image
					src={'Logomark.svg'}
					alt="logo"
					width={33}
					height={33}
					quality={100}
				/>
				<Image
					src={'Logotype.svg'}
					alt="brand name"
					width={106}
					height={15}
					quality={100}
				/>
			</div>
			<h1 className={styles.welcomeTitle}>Bem-vindo de volta, Marcus</h1>
			<p className={styles.dateHeader}>Segunda, 01 de dezembro de 2025</p>
		</header>
	)
}
