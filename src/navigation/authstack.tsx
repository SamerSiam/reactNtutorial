import React , {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SignUp, Login} from '../screens'

const {Navigator, Screen} = createNativeStackNavigator();
 const AuthStack: FC=()=>{
     return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="signup" component={SignUp}/>
            <Screen name="login" component={Login}/>
        </Navigator>
     )
 }
 export default AuthStack;