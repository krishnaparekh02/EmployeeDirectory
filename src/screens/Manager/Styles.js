// --------------- LIBRARY ---------------
import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Constants, Icons, Images, Matrics, MainStyles, Fonts } from '../../CommonConfig';

const { width } = Dimensions.get('window');
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
    itemContainer: {
       backgroundColor: Colors.GREY,
       width: (width/2)-Matrics.vs(15),
       marginBottom: Matrics.vs(10),
       borderRadius: Matrics.vs(5),
       padding: Matrics.vs(5)
    },
    TitleText: {
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.vs(18),
        fontWeight: '600',
        color: Colors.BLACK
    },
    countText: {
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.vs(14),
        fontWeight: '600',
        color: Colors.BLACK ,
        marginVertical: Matrics.vs(5)
    }
});