import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity,Image } from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/BackGround/index3.jpg')}
      >

      <Image
       source={require('../assets/BackGround/logo.png')}
       style={styles.logo}
       />

    <TouchableOpacity 
    style={styles.buttonContainer}

     onPress={() => {
       navigation.navigate("Login");
    
    }}>

    <Text style={styles.buttonText}>-- GO TO STORE --</Text>

    </TouchableOpacity>
     
    </ImageBackground> 
    </SafeAreaView>
  );


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
    
  },

  buttonText: {
    textAlign:'center',
    color:'brown',
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'yellow',
    width:280,
    heigh:80,
    top:120,
    left:50,
    borderColor:'brown',
    
   
  },

  buttonContainer :{
    backgroundColor:'darkblack',
    paddingVertical:12,
    borderRadius:50,

  },

  image:{

    flex:1,
    backgroundColor:'rgba(255,255,255,0.2)',
    color :'#FFF'
    
  },
  logo:{
    width:250,
    height:250,
    left:70,
    top:150
  }
  
});
export default App;


