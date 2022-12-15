// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// --------------- ASSETS ---------------
import { ManagerListStyle as styles } from './Styles';
import { Colors, Constants, Icons, Images, Matrics, MainStyles } from '../../CommonConfig';
import Shimmer from '../../Components/Shimmer';
import { Popup } from '../../Helpers';
import { Input, NoData } from '../../Components/Common';
// --------------- FUNCTION DECLARATION ---------------
const db = SQLite.openDatabase({name: 'employees.db', location: 'default'});
global.db = db;
const ManagerList = ({ navigation }) => {
    // --------------- REDUCER STATE ---------------
    
    // --------------- STATE ---------------
    const temp =[{"Id": 1, "Name": "krishna"}, {"Id": 2, "Name": "Gaurav"}, {"Id": 3, "Name": "Madhuri"}, {"Id": 4, "Name": "vandana"}, {"Id": 5, "Name": "karan"}, {"Id": 6, "Name": "krishna"}, {"Id": 7, "Name": "Gaurav"}, {"Id": 8, "Name": "Madhuri"}, {"Id": 9, "Name": "vandana"}, {"Id": 10, "Name": "karan"}, {"Id": 11, "Name": "krishna"}, {"Id": 12, "Name": "Gaurav"}, {"Id": 13, "Name": "Madhuri"}, {"Id": 14, "Name": "vandana"}, {"Id": 15, "Name": "karan"}, {"Id": 16, "Name": "krishna"}, {"Id": 17, "Name": "Gaurav"}, {"Id": 18, "Name": "Madhuri"}, {"Id": 19, "Name": "vandana"}, {"Id": 20, "Name": "karan"}, {"Id": 21, "Name": "krishna"}, {"Id": 22, "Name": "Gaurav"}, {"Id": 23, "Name": "Madhuri"}, {"Id": 24, "Name": "vandana"}, {"Id": 25, "Name": "karan"}, {"Id": 26, "Name": "krishna"}, {"Id": 27, "Name": "Gaurav"}, {"Id": 28, "Name": "Madhuri"}, {"Id": 29, "Name": "vandana"}, {"Id": 30, "Name": "karan"}, {"Id": 31, "Name": "krishna"}, {"Id": 32, "Name": "Gaurav"}, {"Id": 33, "Name": "Madhuri"}, {"Id": 34, "Name": "vandana"}, {"Id": 35, "Name": "karan"}, {"Id": 36, "Name": "krishna"}, {"Id": 37, "Name": "Gaurav"}, {"Id": 38, "Name": "Madhuri"}, {"Id": 39, "Name": "vandana"}, {"Id": 40, "Name": "karan"}, {"Id": 41, "Name": "krishna"}, {"Id": 42, "Name": "Gaurav"}, {"Id": 43, "Name": "Madhuri"}, {"Id": 44, "Name": "vandana"}, {"Id": 45, "Name": "karan"}, {"Id": 46, "Name": "krishna"}, {"Id": 47, "Name": "Gaurav"}, {"Id": 48, "Name": "Madhuri"}, {"Id": 49, "Name": "vandana"}, {"Id": 50, "Name": "karan"}, {"Id": 51, "Name": "krishna"}, {"Id": 52, "Name": "Gaurav"}, {"Id": 53, "Name": "Madhuri"}, {"Id": 54, "Name": "vandana"}, {"Id": 55, "Name": "karan"}];
    const [isLoading, setIsLoading] = React.useState(true);
    const [managerData, setManagerData] = React.useState([]);
    
    // --------------- LIFECYCLE ---------------   
    useEffect(() => {
        SQLite.enablePromise(true);
        createMangerTable();
        createEmployeeTable();
        setTimeout(() => {
            addManager();
        },1000);
        setTimeout(() => {
            getManager();
        },3000);
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getManager();
        });

        return unsubscribe;
    }, [navigation]);

    // --------------- METHODS ---------------
    const createMangerTable = async () => {
        try {
            await db.transaction(async (tx) => {
                await tx.executeSql(`CREATE TABLE manager (Id INTEGER PRIMARY KEY AUTOINCREMENT,Name VARCHAR(255));`)
            })
        } catch (err) {
            console.log('err-->', err)
        }
    }

    const createEmployeeTable = async () => {
        try {
            await db.transaction(async (tx) => {
                await tx.executeSql(`CREATE TABLE employee (Id INTEGER PRIMARY KEY AUTOINCREMENT,ManagerId INTEGER,EmployeeName TEXT,Dob DATE,Mobile_Number VARCHAR(10));`)
            })
        } catch (err) {
            console.log('erremp-->', err)
        }
    }

    const addManager = () => {
        let names = ['krishna', 'Gaurav', 'Madhuri', 'vandana', 'karan'];
        names.forEach((data) => {
            setData(data)
        });
    }

    const setData = async (name) => {
        try {
            await db.transaction(async (tx) => {
                await tx.executeSql("INSERT INTO manager (Name) VALUES (?)",[name])
            })
        } catch (error) {
            console.log('error-->', error);
        }
    }

    const getManager = async () => {
        try {
            await db.transaction(async (tx) => {
                await tx.executeSql("SELECT m.name, COUNT(e.id) AS empCount FROM manager AS m LEFT JOIN employee AS e ON m.id = e.ManagerId GROUP BY m.id;",[],
                (tx,results) => {
                    var len = results.rows.length;
                    let dataRes = [];
                    if(len > 0){
                        for(let i=0; i<len ; i ++){
                            dataRes.push(results.rows.item(i));
                        }
                    }
                    console.log('dataRes-->', dataRes);
                    // return dataRes;
                    setManagerData(dataRes);
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
                <Text style={styles.countText} numberOfLines={1}>Employee Count:- {item?.empCount ?? 0}</Text>
            </View>
        ), [managerData]
    );
    // --------------- RENDER ---------------
    return (
        <View style={MainStyles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Text style={styles.headerText}>Manager</Text>
            </SafeAreaView>
            {
                isLoading ? (<Shimmer.Dashboard />)
                    : (
                        <View style={styles.container}>
                            <FlatList
                                data={managerData}
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

export default ManagerList;