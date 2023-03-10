// --------------- LIBRARY ---------------
import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Constants, Icons, Images, Matrics, MainStyles, Fonts } from '../../CommonConfig';

const { width } = Dimensions.get('window');

export const EmployeeListStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        paddingTop: Matrics.vs(5)
    },
    headerText: {
        color: Colors.BLACK,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(20),
        textTransform: 'capitalize',
        flex: 1,
        marginLeft: Matrics.vs(15),
        marginBottom: Matrics.vs(10)
    },
    btnAdd: {
        alignItems: 'center',
        paddingVertical: Matrics.vs(5),
        paddingHorizontal: Matrics.vs(10),
        backgroundColor: Colors.PRIMARY,
        borderRadius: Matrics.vs(5),
        marginRight: Matrics.vs(15),
        marginBottom: Matrics.vs(10),
        flexDirection: 'row',
    },
    btnLabel: {
        color: Colors.WHITE,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(18),
    },
    addImg: {
        tintColor: Colors.WHITE,
        alignSelf: 'center',
        height: Matrics.vs(20),
        width: Matrics.vs(20),
        marginLeft: Matrics.vs(10)
    },
    itemContainer: {
        backgroundColor: Colors.GRIDBG,
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
     },
     btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: Matrics.vs(5)
     },
     editBtn: {
        tintColor: Colors.BLUE
     },
     deleteBtn: {
        tintColor: Colors.GREEN
     }
});

export const AddEmployeeStyle = StyleSheet.create({
    container : {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        paddingTop: Matrics.vs(5)
    },
    headerImg: {
        alignSelf: 'center',
        paddingLeft: Matrics.vs(15),
        marginBottom: Matrics.vs(10),
    },
    headerText: {
        color: Colors.BLACK,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(20),
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: Matrics.vs(10),
        flex: 0.9
    },
    InnerContainer: {
        flex: 1,
        marginHorizontal: Matrics.vs(15),
        marginTop: Matrics.vs(20)
    },  
    LabelText: {
        marginTop: Matrics.vs(10),
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.vs(13),
        fontWeight: '700',
        color: Colors.LABEL
    },
    input: {
        marginBottom: Matrics.vs(10),
    },
    dateText: {
        fontSize: Matrics.mvs(14),
        fontFamily: Fonts.RobotoRegular,
    },
    dateView: (error) => ({
        borderBottomColor: error? Colors.RED : Colors.INPUTLINE,
        borderBottomWidth: 1,
        paddingVertical: Matrics.vs(10)
    }),
    btnContainer: {
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        // padding: Matrics.vs(5),
        width: '70%',
        alignSelf: 'center',
        borderRadius: Matrics.vs(10),
        marginTop: Matrics.vs(30),
    },
    btnLabel: {
        fontSize: Matrics.mvs(16),
        fontFamily: Fonts.RobotoRegular,
        paddingVertical:Matrics.ms(10),
        fontWeight: '700',
        textAlign: 'center',
        color: Colors.PRIMARY,
	},
    dropdownContainer: {
        marginVertical: Matrics.vs(10),
    },
    containerMonthStyle: {
        borderWidth: 1,
        borderColor: Colors.DROPDOWNBORDER,
        paddingHorizontal: Matrics.vs(5),
        borderRadius: Matrics.vs(5),
        marginVertical: Matrics.vs(5)
    },
    placeholderStyle: {
        color: Colors.GREY,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(14)
    },
    selectedTextStyle: {
        color: Colors.BLACK,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(14)
    },
});