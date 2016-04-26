import React, { Component } from 'react-native'
import { Router } from 'react-native-router-flux'
import { createStore, applyMiddleware, compose } from 'redux'
import { connect, Provider } from 'react-redux'
import AppRoutes from './routes'
import reactThunk from 'redux-thunk'
import reducers from './reducers'

const RouterWithRedux = connect()(Router)
const middlewares = [reactThunk]
const store = compose(
	applyMiddleware(...middlewares)
)(createStore)(reducers)

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<RouterWithRedux>{AppRoutes}</RouterWithRedux>
			</Provider>
		)
	}
}

export default App