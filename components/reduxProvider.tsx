'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'
import { Snackbar } from '@/components/mui'

type Props = {
	children: Readonly<React.ReactNode>
}

export const ReduxProvider = ({ children }: Props) => {

  return (
		<Provider store={store}>
			<Snackbar />
			{children}
		</Provider>
	)
}



