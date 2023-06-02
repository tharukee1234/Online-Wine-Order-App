import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/Rum/im16.jpg')}
      >
      <Text style={styles.topicdart}>
       ANGOSTURA 7 YEAR OLD  </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/Rum/2.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
      
       Angostura ® 7 year-old rum is a blend of light, medium and heavy rums distilled in Angostura’s continuous still to different intensities before each being matured in hand-selected Bourbon Oak casks for a minimum of seven years. After blending, the rum is returned to bourbon oak casks to allow the blend to marry.
        
       
    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Rum");
    }}>
    <Text style={styles.BackbuttonText}> - BACK TO LIST</Text>

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
    opacity:0.8
  },

  topicdart:{

    fontSize:25,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    top:5, 
  },
  image1:{

    flex:1,
    width:'60%',
    height:'90%',
    resizeMode:"contain",
    bottom:50,
    left:90

  },

  discript:{

    bottom:100,
    fontSize:15,
    color:'white',
    textAlign:'left'
  },

  BackbuttonText:{

    textAlign:'center',
    color:'#FFFFFF',
    fontSize:15,
    fontWeight:'bold'
  },

  buttonContainer:{

    backgroundColor:'chocolate',
    paddingVertical:12,
    borderRadius:10,
    width:'50%',
    bottom:20,
    left:5
  },

});
export default App;


