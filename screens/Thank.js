import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity } from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/BackGround/tk.jpg')}
      >

      <Text style={styles.textStyle}>Congratulations !!! </Text>
      <Text style={styles.textStyle1}>Your Order is Ready.</Text>

       <TouchableOpacity 
    style={styles.buttonContainer}

     onPress={() => {
       navigation.navigate("List");
  
    }}>
    <Text style={styles.buttonText}> HOME</Text>
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

 

  image:{

    flex:1,
    backgroundColor:'rgba(255,255,255,0.2)',
    color :'#FFF'
    
  },

  textStyle:{

    fontSize:30,
    color:'white',
    top:190,
    left:108,
    fontWeight:'bold'

  },

  textStyle1:{

    fontSize:25,
    color:'white',
    top:198,
    left:137,
  },

  buttonText:{

    textAlign:'center',
    color:'#FFFFFF',
    fontSize:15

  },
  buttonContainer:{

    backgroundColor:'#2980b9',
    paddingVertical:15,
    shadowColor:"red",
    borderRadius:30,
    width:140,
    top:225,
    left:190
    
  }
  
});
export default App;


