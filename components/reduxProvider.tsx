'use client'

import { Provider } from 'react-redux'
import { store } from '../store'

type Props = {
	children: Readonly<React.ReactNode>
}

export const ReduxProvider = ({ children }: Props) => {
  return (

	<Provider store={store}>
		{children}
	</Provider>
	)
}

