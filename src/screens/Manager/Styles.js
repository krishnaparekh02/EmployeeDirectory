// --------------- LIBRARY ---------------
import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Constants, Icons, Images, Matrics, MainStyles, Fonts } from '../../CommonConfig';

export const ManagerListStyle = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    headerText: {
        color: Colors.BLACK,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(20),
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: Matrics.vs(10)
    },
});