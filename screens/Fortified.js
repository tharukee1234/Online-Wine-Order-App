import React from 'react';
import { StyleSheet,  View, SafeAreaView, Button ,ImageBackground,TouchableOpacity} from 'react-native';
 

const FortifiedPage = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground

      style= {styles.image}
      source={require('../assets/BackGround/fortified-wine.jpg')
      }>

     
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
    
  }
  
});
export default FortifiedPage;


