// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { View,Text, Image, SafeAreaView, ImageBackground } from 'react-native';


// --------------- ASSETS ---------------
import { ManagerListStyle as styles } from './Styles';
import { Colors, Constants, Icons, Images, Matrics, MainStyles } from '../../CommonConfig';
// --------------- FUNCTION DECLARATION ---------------
const ManagerList = ({ navigation }) => {
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
                <Text style={styles.headerText}>Manager</Text>
            </SafeAreaView>
        </View>
    );
}

export default ManagerList;