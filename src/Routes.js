// --------------- LIBRARIES ---------------
import React from 'react';
import { StyleSheet, Image, Text, Dimensions } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --------------- ASSETS ---------------
import { MainStyles, Images, Icons, Matrics, Colors, Fonts } from './CommonConfig';

// --------------- SCREENS ---------------
import EmployeeList from './screens/Employee/EmployeeList';
import AddEmployee from './screens/Employee/AddEmployee';
import EditEmployee from './screens/Employee/EditEmployee';
import ManagerList from './screens/Manager/ManagerList';

// --------------- ROUTES ---------------
const Routes = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const EmployeeListStack = () => (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="Employee"
        >
            <Stack.Screen
                name='Employee'
                options={{ headerShown: false }}
                component={EmployeeList}
            />
            <Stack.Screen
                name='AddEmployee'
                options={{ headerShown: false }}
                component={AddEmployee}
            />
            <Stack.Screen
                name='EditEmployee'
                options={{ headerShown: false }}
                component={EditEmployee}
            />
        </Stack.Navigator>
    );

    const BottomTabNavigator = (props) => {
        return (
            <Tab.Navigator
                initialRouteName='ManagerList'
                backBehavior='initialRoute'
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'ManagerList') {
                          iconName = Icons.Ic_User_Group;
                        } else if (route.name === 'EmployeeList') {
                            iconName = Icons.Ic_User;
                        }
            
                        // You can return any component that you like here!
                        return <Image
                            source={iconName}
                            resizeMode='contain'
                            style={[
                                styles.icon,
                                {
                                    tintColor: focused
                                        ? Colors.PRIMARY
                                        : Colors.GREY,
                                },
                            ]}
                        />;
                    },
                    tabBarActiveTintColor: Colors.PRIMARY,
                    tabBarInactiveTintColor: Colors.GREY,
                    tabBarLabelStyle: styles.TabLabel
                })}
            >
                <Tab.Screen name='ManagerList' component={ManagerList} />
                <Tab.Screen name='EmployeeList' component={EmployeeListStack} />
            </Tab.Navigator>
        )
    };

    return (
        <NavigationContainer>
            {BottomTabNavigator()}
        </NavigationContainer>
    )
}

export default Routes;

const styles = StyleSheet.create({
    icon: {
        width: Matrics.mvs(18),
        height: Matrics.mvs(18),
    },
    TabLabel: {
        fontSize: Matrics.mvs(14),
        fontFamily: Fonts.RobotoRegular
    }
});