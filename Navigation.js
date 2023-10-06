import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home';
import Products from './Products';
import Pay from './Pay';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Products'
        component={Products}
        options={{
          tabBarLabel: 'Productos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-cart' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Pay'
        component={Pay}
        options={{
          tabBarLabel: 'Pagar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-wallet' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
