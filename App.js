import React,{useState} from 'react';
import {Text,View,TextInput,Image,TouchableOpacity,StyleSheet,Alert,ImageBackground,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';





import index from './screens/index';
import Login from './screens/Login';
import Rose from './screens/Rose';
import signup from './screens/signup';
import List from './screens/List';
import Redwine from './screens/Redwine';
import Whitewine from './screens/Whitewine';
import Champaines from './screens/Champaines';
import Rum from './screens/Rum';
import Spark from './screens/Spark';
import Dessert from './screens/Dessert';
import Fortified from './screens/Fortified';
import DARTHOURSEBIG from './screens/DARTHOURSEBIG';
import DARKHOURSE2 from './screens/DARKHOURSE2';
import ROSEMOUNT from './screens/ROSEMOUNT';
import ODYSSEY from './screens/ODYSSEY';
import GRNTRIVA from './screens/GRNTRIVA';
import Payment from './screens/Payment';
import Thank from './screens/Thank';
import BORDEAUX from './screens/BORDEAUX';
import CHARDONNAY from './screens/CHARDONNAY';
import PINOT from './screens/PINOT';
import RIESLING from './screens/RIESLING';
import SAUTERNES from './screens/SAUTERNES';
import LANSON from './screens/LANSON';
import LANSONBLACK from './screens/LANSONBLACK';
import LANSONLABEl from './screens/LANSONLABEl';
import BestOverallRose from './screens/BestOverallRose';
import BESTPIONT from './screens/BESTPIONT';
import FULLBODIED from './screens/FULLBODIED';
import BELLEGLOS from './screens/BELLEGLOS';
import BAYOU from './screens/BAYOU';
import ANGOSTURA from './screens/ANGOSTURA';
import ANG from './screens/ANG';
import BAYOUWHITE from './screens/BAYOUWHITE';
import PlaceOrder from './screens/PlaceOrder';
import PlaceOrder4 from './screens/PlaceOrder4';
import PlaceOrder5 from './screens/PlaceOrder5';
import BACCHUS from './screens/BACCHUS';
import SROSE from './screens/SROSE';
import ALBURY from './screens/ALBURY';
import DAVENPORT from './screens/DAVENPORT';
import BAREFOOT from './screens/BAREFOOT';
import CINZANO from './screens/CINZANO';
import MARTINI from './screens/MARTINI';
import FIERO from './screens/FIERO';



const Stack=createStackNavigator();

function App(){

  return(<NavigationContainer>
  <Stack.Navigator>

  
  <Stack.Screen name="index" component={index}/>
  <Stack.Screen name="signup" component={signup}/>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="List" component={List} />

  <Stack.Screen name="ANGOSTURA" component={ANGOSTURA}/>
  <Stack.Screen name="BAYOU" component={BAYOU}/>
  <Stack.Screen name="Rum" component={Rum}/>  
  <Stack.Screen name="BELLEGLOS" component={BELLEGLOS}/>
  <Stack.Screen name="FULLBODIED" component={FULLBODIED}/>
  <Stack.Screen name="BESTPIONT" component={BESTPIONT}/>
  <Stack.Screen name="BestOverallRose" component={BestOverallRose}/>
  <Stack.Screen name = "SAUTERNES" component={SAUTERNES}/>
  <Stack.Screen name = "RIESLING" component={RIESLING}/>
  <Stack.Screen name="Whitewine" component={Whitewine}/>
  <Stack.Screen name ="PINOT" component={PINOT}/>
  <Stack.Screen name="BORDEAUX" component={BORDEAUX}/>
  <Stack.Screen name ="Redwine" component={Redwine}/> 
  
  <Stack.Screen name = "PlaceOrder" component={PlaceOrder}/>
  <Stack.Screen name="Spark" component={Spark}/>
  <Stack.Screen name="FIERO" component={FIERO}/>
  <Stack.Screen name="MARTINI" component={MARTINI}/>
  <Stack.Screen name="CINZANO" component={CINZANO}/>
  <Stack.Screen name="BAREFOOT" component={BAREFOOT}/>
  <Stack.Screen name="Dessert" component={Dessert}/>
  <Stack.Screen name="DAVENPORT" component={DAVENPORT}/>
  <Stack.Screen name="ALBURY" component={ALBURY}/>
  <Stack.Screen name="SROSE" component={SROSE}/>
  <Stack.Screen name="BACCHUS" component={BACCHUS}/>  
  <Stack.Screen name = "Thank" component={Thank}/>    
  <Stack.Screen name = "Payment" component={Payment}/>
  <Stack.Screen name = "PlaceOrder5" component={PlaceOrder5}/>
  <Stack.Screen name = "PlaceOrder4" component={PlaceOrder4}/>
  <Stack.Screen name="Rose" component={Rose}/>
  <Stack.Screen name="BAYOUWHITE" component={BAYOUWHITE}/>
  <Stack.Screen name="ANG" component={ANG}/>
  <Stack.Screen name="LANSONLABEl" component={LANSONLABEl}/>
  <Stack.Screen name="LANSONBLACK" component={LANSONBLACK}/>
  <Stack.Screen name="LANSON" component={LANSON}/>
  <Stack.Screen name="CHARDONNAY" component={CHARDONNAY}/>
  <Stack.Screen name = "GRNTRIVA" component={GRNTRIVA}/>
  <Stack.Screen name = "ODYSSEY" component={ODYSSEY}/>
  <Stack.Screen name = "ROSEMOUNT" component={ROSEMOUNT}/>
  <Stack.Screen name = "DARKHOURSE2" component={DARKHOURSE2}/>
  <Stack.Screen name = "DARTHOURSEBIG" component={DARTHOURSEBIG}/>
  <Stack.Screen name="Champaines" component={Champaines}/>
  <Stack.Screen name="Fortified" component={Fortified}/>
  
     
  </Stack.Navigator>
  </NavigationContainer>);
}
export default App;


