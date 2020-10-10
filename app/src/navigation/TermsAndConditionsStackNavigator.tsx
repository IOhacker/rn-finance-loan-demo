import React from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';
import { Colors } from '../styles';

const TermsAndConditionsStack = createStackNavigator();

const TermsAndConditionsStackNavigator = ({ navigation }: any) => (
	<TermsAndConditionsStack.Navigator>
		<TermsAndConditionsStack.Screen
			name="TermsAndConditionsScreen"
			component={TermsAndConditionsScreen}
			options={{
				headerStyle: {
					elevation: Platform.OS === 'ios' ? 0 : 0,
					shadowOpacity: Platform.OS === 'ios' ? 0 : 0,
					borderBottomWidth: 0,
				},
				headerTitle: () => null,
				headerLeft: () => {
					return (
						<TouchableOpacity
							style={styles.headerIconContainer}
							onPress={() => navigation.openDrawer()}
						>
							<Ionicons style={styles.hederMenuIcon} name="md-menu" size={28} />
						</TouchableOpacity>
					);
				},
			}}
		/>
	</TermsAndConditionsStack.Navigator>
);

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.mediumGray,
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
});

export default TermsAndConditionsStackNavigator;
