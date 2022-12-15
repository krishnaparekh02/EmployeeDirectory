// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { View,Text, Image, SafeAreaView, Pressable } from 'react-native';


// --------------- ASSETS ---------------
import { EmployeeListStyle as styles } from './Styles';
import { Colors, Constants, Icons, Images, Matrics, MainStyles } from '../../CommonConfig';

// --------------- FUNCTION DECLARATION ---------------
const EmployeeList = ({ navigation }) => {
    // --------------- REDUCER STATE ---------------

    // --------------- STATE ---------------
    const [isLoading, setIsLoading] = React.useState(false);

    // --------------- LIFECYCLE ---------------   
    useEffect(() => {   
    }, []);


    
    // --------------- METHODS ---------------

    // --------------- UI METHODS ---------------

    // --------------- RENDER ---------------
    return (
        <View style={ MainStyles.container }>
            <SafeAreaView style={styles.headerContainer}>
                <Text style={styles.headerText}>Employee</Text>
                <Pressable style={styles.btnAdd} onPress={() => {navigation.navigate('AddEmployee')}}>
                    <Text style={styles.btnLabel}>Add Employee</Text>
                    <Image source={Icons.Ic_Add} style={styles.addImg}/>
                </Pressable>
            </SafeAreaView>
        </View>
    );
}

export default EmployeeList;