import React, { 
	Component,
	PropTypes,
	View,
	Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class MyComponent extends Component {

	static propTypes = {
		routes: PropTypes.object
	}

	componentWillMount() {
		this.props.showGreeting('David')
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>
				The current scene is titled {this.props.routes.scene.title}
				</Text>
				<Text>
				{this.props.messages.greeting}
				</Text>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export default connect((state) => ({
	routes: state.routes,
	messages: state.messages
}), actions)(MyComponent)