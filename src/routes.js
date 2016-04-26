import React from 'react-native'
import { Scene } from 'react-native-router-flux'

import MyComponent from './components/my_component'

export default (
	<Scene key="root" hideNavBar={true}>
		<Scene key="myComponent" component={MyComponent} title="My Component" />
	</Scene>
)