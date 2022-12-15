// --------------- LIBRARIES ---------------
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

// --------------- ASSETS ---------------
import { Colors, Constants, Icons, Images, Matrics, MainStyles, Fonts } from '../../CommonConfig';

const NoData = ({message, image, Top = 0}) => {
    return (
        <View
            style={[styles.container, { backgroundColor: Colors.WHITE} ]}
        >
            <Image 
                source={image ?? Images.IC_NoData}
                style={styles.Img}
                resizeMode="contain"
            />
            <Text style={[styles.textMsg,{
                color: Colors.BLACK,
            }]}>
                {!message ? Constants.NoData : message}
            </Text>
        </View>
    );
};

export default NoData;

NoData.propTypes = {
	message: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: Matrics.screenWidth,
        height: Matrics.screenHeight-200
    },
    Img: {
        height: Matrics.vs(150),
        width: Matrics.vs(183),
        alignSelf: 'center',
    },
	textMsg: {
		textAlign: 'center',
		alignSelf: 'center',
		fontSize: Matrics.mvs(16),
		lineHeight: Matrics.ms(30),
		textTransform: 'capitalize',
		fontFamily: Fonts.RobotoRegular,
	},
});
