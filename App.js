

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen";


import RegistrationScreen from "./Screens/RegistrationScreen";







// import HomeScreen from './pages/HomeScreen';
// import RegisterUser from './pages/RegisterUser';
// import UpdateUser from './pages/UpdateUser';
// import ViewUser from './pages/ViewUser';
// import ViewAllUser from './pages/ViewAllUser';
// import DeleteUser from './pages/DeleteUser';


const Stack = createStackNavigator();

const App = () => {


  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="RegistrationScreen"
      screenOptions={{headerShown:false}}>

<Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
      />


<Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
 

</Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;
