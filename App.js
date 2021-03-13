import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import MainScreen from './screens/MainScreen'
import AboutScreen from './screens/AboutScreen'

const MainStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackScreen = ({navigation})=>(
  <MainStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: "bold",
    }
  }}>
    <MainStack.Screen name="Main" component={MainScreen} options={{
      headerLeft: ()=> (
      <Icon.Button name="ios-menu" size={25}
      backgroundColor="#009387" onPress={() => {navigation.openDrawer()}}/>
      )
    }}
      />
  </MainStack.Navigator>
);

const AboutStackScreen = ({navigation})=>(
  <AboutStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: "bold",
    }
  }}>
    <AboutStack.Screen name="About" component={AboutScreen} options={{
      headerLeft: ()=> (
      <Icon.Button name="ios-menu" size={25}
      backgroundColor="#009387" onPress={() => {navigation.openDrawer()}}/>
      )
    }}/>
  </AboutStack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={MainStackScreen}/>
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;