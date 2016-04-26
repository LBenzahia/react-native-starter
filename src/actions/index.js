import {
	SHOW_GREETING
} from './types'
import { createAction} from 'redux-actions'

export const showGreeting = createAction(SHOW_GREETING, (message) => {
	return `Hi! ${message}`
})