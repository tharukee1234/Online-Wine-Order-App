import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground, TouchableOpacity } from 'react-native';

const List=({navigation}) =>{
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex:1}}
        source={require('../assets/List/list4.jpg')}>
        <Text style={styles.topic}>MENU CARD:</Text>

    
      <TouchableOpacity 
      style={styles.buttonContainer1}
      onPress={() => {
       navigation.navigate("Redwine");}}>
      <Text style={styles.buttonText}>RED WINE</Text>
      </TouchableOpacity>
         

    <TouchableOpacity 
    style={styles.buttonContainer2}
     onPress={() => {
       navigation.navigate("Whitewine");}}>
    <Text style={styles. buttonText}>WHITE WINE</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    style={styles.buttonContainer3}
     onPress={() => {
       navigation.navigate("Rose");}}>
    <Text style={styles. buttonText}>ROSE WINE</Text>
    </TouchableOpacity>
      
      
  
      <TouchableOpacity 
      style={styles.buttonContainer4}
     onPress={() => {
       navigation.navigate("Rum");}}>
    <Text style={styles. buttonText}>RUM</Text>
    </TouchableOpacity>

      <TouchableOpacity 
      style={styles.buttonContainer5}
     onPress={() => {
       navigation.navigate("Spark");}}>
    <Text style={styles. buttonText}>SPARK WINE</Text>
    </TouchableOpacity>

     <TouchableOpacity 
     style={styles.buttonContainer6}
     onPress={() => {
       navigation.navigate("Dessert");}}>
    <Text style={styles. buttonText}>DESSERT WINE</Text>
    </TouchableOpacity>

     <TouchableOpacity 
     style={styles.buttonContainer7}
     onPress={() => {
       navigation.navigate("Champaines");}}>
    <Text style={styles. buttonText}>CHAMPAINGS</Text>
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
  topic: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    top:15
  },
  
  
  buttonText: {

    position:'absolute',
    color:'brown',
    fontSize:20,
    fontWeight:'bold',
    right:110,
    top:6,
    textAlign:'center',
    
    
  },

  
  buttonContainer1:{

    backgroundColor:'#FCE883',
    paddingVertical:15,
    borderRadius:13,
    top:30,
    height:50,
    width:300,
    left:50,
    elevation: 6,
    shadowRadius: 80 , 
   


    
  },

  buttonContainer2:{

    backgroundColor:'#FCE883',
    paddingVertical:15,
    borderRadius:13,
    top:70,
    height:50,
    width:300,
    left:50,
  
  },

  buttonContainer3:{

    backgroundColor:'#FCE883',
    paddingVertical:15,
    borderRadius:13,
    top:110,
    height:50,
    width:300,
    left:50,
    
   


  },

  buttonContainer4:{

    backgroundColor:'#FCE883',
    paddingVertical:15,
    borderRadius:13,
    top:150,
    height:50,
    width:300,
    left:50,
  
    


  },

  buttonContainer5:{

    backgroundColor:'#FCE883',
    paddingVertical:15,
    borderRadius:13,
    top:190,
    height:50,
    width:300,
    left:50,
   

  },

  buttonContainer6:{

    backgroundColor:'#FCE883',
    paddingVertical:15,
    borderRadius:13,
     top:230,
    height:50,
    width:300,
    left:50,
   
    

  },
  buttonContainer7:{

     backgroundColor:'#FCE883',
    paddingVertical:15,
    borderRadius:13,
     top:280,
    height:50,
    width:300,
    left:50,
    
    
  }


  

  
});

export default List;