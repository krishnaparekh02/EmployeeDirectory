// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Text, Pressable, TouchableOpacity, Image, Modal, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

// --------------- ASSETS ---------------
import { Colors, Fonts, MainStyles, Images, Icons, Matrics, Constants } from '../../CommonConfig';
import { AddEmployeeStyle as styles } from './Styles';
import { Input, Loader } from '../../Components/Common';
import { Popup } from '../../Helpers';

const AddProduct = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [nameError, setNameError] = React.useState('');
    const [dobError, setDobError] = React.useState('');
    const [mobileNumberError, setMobileNumberError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    //----------LIFECYCLE/ HOOKS---------------
    React.useEffect(() => {
        
    },[]);

    //----------METHOD---------------

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        console.warn("moment: ", moment(date).format("DD/MM/YYYY"));
        setDob(moment(date).format('DD/MM/YYYY'));
        setDobError('');
        hideDatePicker();
      };

      
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
                <Pressable style={styles.dateView(dobError)} onPress={showDatePicker}>
                    <Text style={styles.dateText}>{dob ? dob : 'select Date'}</Text>
                </Pressable>
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
                    keyboardType='numeric'
                />
                <Pressable  onPress={() => onPressAddEmployee()} style={styles.btnContainer}>
                    <Text style={styles.btnLabel}>Create Employee</Text>
                </Pressable>
            </KeyboardAwareScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Loader visible={isLoading} />
        </View>
    )
}

export default AddProduct;