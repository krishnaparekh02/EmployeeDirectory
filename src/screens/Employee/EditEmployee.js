// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Text, Pressable, TouchableOpacity, Image, Modal, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// --------------- ASSETS ---------------
import { Colors, Fonts, MainStyles, Images, Icons, Matrics, Constants } from '../../CommonConfig';
import { AddEmployeeStyle as styles } from './Styles';
import { Input, Loader } from '../../Components/Common';
import { Popup } from '../../Helpers';

const EditEmployee = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [nameError, setNameError] = React.useState('');
    const [dobError, setDobError] = React.useState('');
    const [mobileNumberError, setMobileNumberError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    //----------LIFECYCLE/ HOOKS---------------
    React.useEffect(() => {
        
    },[]);

    //----------METHOD---------------

    const onPressAddEmployee = () => {
        if (name == "") {
            setNameError('Please enter the employee name');
        } else if (dob == "") {
            setDobError('Please select the date of birth');
        } else if (mobileNumber == "") {
            setMobileNumberError('Please enter the mobile number');
        } else if (mobileNumber.length < 10) {
            setMobileNumberError('Please enter the valid mobile number');
        } else {
            const params = {
                "userId": global.userId,
                "name": name,
                "price": price,
                "offerPrice": offerPrice,
                "image": ImageName
            }
        }
    }

    //----------RENDER---------------
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Pressable onPress={() => navigation.goBack()} style={styles.headerImg}>
                    <Image source={Icons.IC_BACK_BUTTON}  />
                </Pressable>
                <Text style={styles.headerText}>Create Employee</Text>
            </SafeAreaView>
            <KeyboardAwareScrollView
                    bounces={false}
                    contentContainerStyle={styles.InnerContainer}
                >
                <Text style={styles.LabelText}>Employee Name</Text>
                <Input
                    style={styles.input}
                    placeholder={'Enter Employee Name'}
                    value={name}
                    onChangeText={(text) => {
                        setName(text), setNameError('');
                    }}
                    errorMsg={nameError}
                    inputStyle={{ color: Colors.BLACK}}
                />
                <Text style={styles.LabelText}>DOB</Text>
                <View style={styles.dateView(dobError)}>
                    <Text style={styles.dateText}>{dob ? dob : 'select Date'}</Text>
                </View>
                <Text style={[styles.LabelText,{color: Colors.RED}]}>{dobError}</Text>
                <Text style={styles.LabelText}>Mobile Number</Text>
                <Input
                    style={styles.input}
                    placeholder={'Enter Mobile Number'}
                    value={mobileNumber}
                    onChangeText={(text) => {
                        setMobileNumber(text), setMobileNumberError('');
                    }}
                    errorMsg={mobileNumberError}
                    inputStyle={{ color: Colors.BLACK}}
                />
                <Pressable  onPress={() => onPressAddEmployee()} style={styles.btnContainer}>
                    <Text style={styles.btnLabel}>Create Employee</Text>
                </Pressable>
            </KeyboardAwareScrollView>
            <Loader visible={isLoading} />
        </View>
    )
}

export default EditEmployee;