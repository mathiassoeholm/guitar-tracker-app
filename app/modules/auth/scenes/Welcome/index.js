import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';
import theme from '../../../../../styles/theme';
import svg from '../../../../assets/images/svg';
import authActions from '../../actions';
import Button from '../../../../components/Button';

const Welcome = ({ navigate }) =>
{
	// Calculate size of image
	const minButtonContainerHeight = 300;
	const titleStyle = StyleSheet.flatten(styles.title);
	const imageSize = Math.min(
		theme.windowWidth,
		theme.windowHeight - (titleStyle.fontSize + titleStyle.paddingTop +  titleStyle.paddingBottom) - minButtonContainerHeight);

    return (
      <View style={styles.container}>
		<Text style={styles.title}>
		Guitar Tracker
		</Text>
        <SvgUri
          width={(imageSize).toString()}
          height={(imageSize).toString()}
          svgXmlData={svg.guitar}
        />
        <View style={styles.buttonContainer}>
			<Button text="CREATE ACCOUNT" style={styles.createButton}/>
          	<Button text="LOGIN" style={styles.signInButton}/>
        </View>
      </View>);
};

const mapDispatchToProps = (dispatch) =>
({
	onClickedButton: () => dispatch(authActions.login('username', 'password'))
});

export default connect(null, mapDispatchToProps)(Welcome);
