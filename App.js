import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/Home';
import Cardapio from './src/Cardapio';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Pedido from './src/Pedido';

import { useState } from 'react';


const Tab = createBottomTabNavigator();

export default function App() {

  

  const[ logado, setLogado ] = useState(false);
  const[ cadastro, setCadastro ] = useState(false);

  if( logado == false ) {
    return( <Login setLogado={setLogado} setCadastro={setCadastro} />)
  }

  if( cadastro ) {
    return( <Cadastro setCadastro={setCadastro} setLogado={setLogado} />)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: '#EEAACC' },
          tabBarLabelStyle: { color: "#5B3623"},
          headerStyle: { backgroundColor: '#EEAACC' },
          headerTitleStyle: { color: '#5B3623' },
          tabBarActiveTintColor: '#94583e',
          tabBarInactiveTintColor: '#5B3623'
        }}
      >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color , size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Cardápio" 
        component={Cardapio} 
        options={{
          tabBarLabel: 'Cardapio',
          tabBarIcon: ({ color , size }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Pedido" 
        component={Pedido} 
        options={{
          tabBarLabel: 'Pedido',
          tabBarIcon: ({ color , size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}