import { combineReducers } from 'redux';
import RouteReducer from './route_reducer'
import GreetingReducer from './greeting_reducer'

const rootReducer = combineReducers({
  routes: RouteReducer,
  messages: GreetingReducer
});

export default rootReducer;