import {
  SHOW_GREETING
} from '../actions/types'
import { handleActions } from 'redux-actions';

export default handleActions({
  
  SHOW_GREETING: (state, action) => ({
    greeting: action.payload
  })

}, { greeting: '' })