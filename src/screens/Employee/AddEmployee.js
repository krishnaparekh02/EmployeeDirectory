// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Text, Pressable, TouchableOpacity, Image, Modal, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { Dropdown } from 'react-native-element-dropdown';

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
    const [managerId, setManagerId] = React.useState(0);
    const [managerData, setManagerData] = React.useState([]);

    //----------LIFECYCLE/ HOOKS---------------
    React.useEffect(() => {
        getManager();
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
        console.warn("moment: ", moment(date).format("YYYY-MM-DD"));
        setDob(moment(date).format('YYYY-MM-DD'));
        setDobError('');
        hideDatePicker();
    };

    const getManager = async () => {
        try {
            await global.db.transaction(async (tx) => {
                await tx.executeSql("SELECT * FROM manager",[],
                (tx,results) => {
                    var len = results.rows.length;
                    let dataRes = [];
                    if(len > 0){
                        for(let i=0; i<len ; i ++){
                            dataRes.push(results.rows.item(i));
                        }
                    }
                    setManagerData(dataRes);
                });
            })
        } catch (error) {
            console.log('error-->', error);
        }
    }
      
    const onPressAddEmployee = async () => {
        if (name == "") {
            setNameError('Please enter the employee name');
        } else if (dob == "") {
            setDobError('Please select the date of birth');
        } else if (mobileNumber == "") {
            setMobileNumberError('Please enter the mobile number');
        } else if (mobileNumber.length < 10) {
            setMobileNumberError('Please enter the valid mobile number');
        } else {
            try {
                await db.transaction(async (tx) => {
                    await tx.executeSql("INSERT INTO employee (ManagerId,EmployeeName,Dob,Mobile_Number) VALUES (?,?,?,?)",[managerId,name,dob,mobileNumber]);
                    Popup.success('Employee Created Successfully!');
                    navigation.goBack();
                })
            } catch (error) {
                console.log('error-->', error);
                Popup.error('Something went wrong');
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
                <View style={styles.dropdownContainer}>
                    <Text style={styles.LabelText}>Select Manager</Text>
                    <Dropdown
                        style={styles.containerMonthStyle}
                        data={managerData}
                        search={false}
                        maxHeight={300}
                        fontFamily={Fonts.RobotoRegular}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        itemTextStyle={styles.selectedTextStyle}
                        labelField="Name"
                        valueField="Id"
                        placeholder={'select manager'}
                        value={managerId}
                        onChange={item => {
                            setManagerId(item.Id);
                        }}
                    />
                </View>
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