import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import '@/styles/globals.scss'
import { TodosProvider } from '@/contexts/todoContext'

export const metadata: Metadata = {
	title: 'Teste Dev jr',
}

const interTight = Inter_Tight({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt">
			<body className={interTight.className}>
				<TodosProvider>{children}</TodosProvider>
			</body>
		</html>
	)
}
