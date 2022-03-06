import React,{FC,useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import * as firebase from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthStack from './authstack'
import AppStack from './appstack'


const MainNav: FC =()=>{
   const [user, setUser]= useState<any>(null)

   const bootstrap=()=>{
    const auth = getAuth();
    const loggedUser = auth.currentUser;
      
           if (loggedUser){
               setUser(loggedUser);
           }
   }

   useEffect(() => {
      bootstrap()
   }, [])

    return(
        <NavigationContainer>
            {user!== null? <AppStack/>: <AuthStack/>}
        </NavigationContainer>
    )
}

export default MainNav;