// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { View,Text, Image, SafeAreaView, Pressable, FlatList, Alert } from 'react-native';


// --------------- ASSETS ---------------
import { EmployeeListStyle as styles } from './Styles';
import { Colors, Constants, Icons, Images, Matrics, MainStyles } from '../../CommonConfig';
import { Input, NoData } from '../../Components/Common';
import { Popup } from '../../Helpers';

// --------------- FUNCTION DECLARATION ---------------
const EmployeeList = ({ navigation }) => {
    // --------------- REDUCER STATE ---------------

    // --------------- STATE ---------------
    const [isLoading, setIsLoading] = React.useState(false);
    const [employeeData, setEmployeeData] = React.useState([]);

    // --------------- LIFECYCLE ---------------  
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getEmployee();
        });

        return unsubscribe;
    }, [navigation]);

    // --------------- METHODS ---------------
    const getEmployee = async() => {
        try {
            await global.db.transaction(async (tx) => {
                await tx.executeSql("SELECT * FROM employee",[],
                (tx,results) => {
                    var len = results.rows.length;
                    let dataRes = [];
                    if(len > 0){
                        for(let i=0; i<len ; i ++){
                            dataRes.push(results.rows.item(i));
                        }
                    }
                    console.log('emplpyee-->', dataRes);
                    // return dataRes;
                    setEmployeeData(dataRes);
                    setIsLoading(false);
                });
            })
        } catch (error) {
            console.log('error-->', error);
            // return false;
            setIsLoading(false);
        }
    }
 
    const onClickEdit = (Item) => {
        navigation.navigate('EditEmployee', {Employee: Item})
    }

    const onClickDelete = (Item) => {
        Alert.alert(
            "Delete",
            "Are you sure you want to delete the employee?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => removeEmployee(Item) }
            ]
          );
    }

    const removeEmployee = async (Item) => {
        try {
            await db.transaction(async (tx) => {
                await tx.executeSql(`DELETE FROM employee WHERE Id = ${Item?.Id}`);
                Popup.success('Employee Deleted Successfully!');
                getEmployee();
            })
        } catch (err) {
            console.log('erremp-->', err)
        }
    }

    // --------------- UI METHODS ---------------
    const renderItem = React.useCallback(
        ({ item, index }) => (
            <View key={index} style={[styles.itemContainer, 
                {   marginTop: index == 0 || index == 1 ? Matrics.vs(10) : 0,
                    marginRight: index%2 == 0 ? Matrics.s(5): 0,
                    marginLeft : index%2 == 0 ? 0 : Matrics.s(5),
            }]}>
                <Text style={styles.TitleText}>Name: {item?.EmployeeName}</Text>
                <Text style={styles.countText} numberOfLines={1}>Dob: {item?.Dob}</Text>
                <Text style={styles.countText}>MobileNo: {item?.Mobile_Number}</Text>
                <View style={styles.btnView}>
                    <Pressable onPress={() => onClickEdit(item)} >
                        <Image source={Icons.Ic_Edit} style={styles.editBtn}/>
                    </Pressable>
                    <Pressable onPress={() => onClickDelete(item)} >
                        <Image source={Icons.Ic_Delete} style={styles.deleteBtn}/>
                    </Pressable>
                </View>
            </View>
        ), [employeeData]
    );
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
            {
                isLoading ? (<Shimmer.Dashboard />)
                    : (
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={employeeData}
                                renderItem={renderItem}
                                keyExtractor={(_, index) => `manager-${index}`}
                                ListEmptyComponent={!isLoading && <NoData message={Constants.NoData} />}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ flexGrow: 1, marginHorizontal: Matrics.vs(10) }}
                                ListFooterComponent={<View style={{ height: Matrics.vs(100) }} />}
                                numColumns={2}
                            />
                        </View>
                    )
            }
        </View>
    );
}

export default EmployeeList;