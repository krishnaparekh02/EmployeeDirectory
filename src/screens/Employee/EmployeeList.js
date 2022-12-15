// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { View,Text, Image, SafeAreaView, Pressable, FlatList } from 'react-native';


// --------------- ASSETS ---------------
import { EmployeeListStyle as styles } from './Styles';
import { Colors, Constants, Icons, Images, Matrics, MainStyles } from '../../CommonConfig';
import { Input, NoData } from '../../Components/Common';

// --------------- FUNCTION DECLARATION ---------------
const EmployeeList = ({ navigation }) => {
    // --------------- REDUCER STATE ---------------

    // --------------- STATE ---------------
    const [isLoading, setIsLoading] = React.useState(false);
    const [employeeData, setEmployeeData] = React.useState([]);

    // --------------- LIFECYCLE ---------------   
    useEffect(() => {   
        getEmployee();
    }, []);

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
 
    // --------------- UI METHODS ---------------
    const renderItem = React.useCallback(
        ({ item, index }) => (
            <View key={index} style={[styles.itemContainer, 
                {   marginTop: index == 0 || index == 1 ? Matrics.vs(10) : 0,
                    marginRight: index%2 == 0 ? Matrics.s(5): 0,
                    marginLeft : index%2 == 0 ? 0 : Matrics.s(5),
            }]}>
                <Text style={styles.TitleText}>{item?.Name}</Text>
                <Text style={styles.countText} numberOfLines={1}>{item?.Dob}</Text>
                <Text style={styles.countText} numberOfLines={1}>{item?.Mobile_Number}</Text>
                <View style={styles.btnView}>
                    <Image source={Icons.Ic_Edit} />
                    <Image source={Icons.Ic_Delete} />
                </View>
            </View>
        ), [employeeData]
    );
    console.log('rremp-->',employeeData)
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
                        <View style={styles.container}>
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