import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';

import Perfil from '../Pages/Perfil';
import Inserir from '../Pages/Inserir';


const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (<Login />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#FBF6F3',
                    },
                    tabBarActiveTintColor: "#7723CD",
                    tabBarInactiveTintColor: "#D3ABFC"
                    //acrescentar cor nos itens
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                
                <Tab.Screen
                    name="Inserir"
                    component={Inserir}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={size} />
                            
                        ),
                    }}
                />

                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
                            
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}