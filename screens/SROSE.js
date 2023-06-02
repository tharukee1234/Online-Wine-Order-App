import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/SparklinWine/im9.jpg')}
      >
      <Text style={styles.topicdart}>
      Bacchus Frizzante </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/SparklinWine/2.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
      
     A beautiful balance of delicate red fruit and brioche notes from the 6 years lees ageing, this pale coloured sparkling rosé with a fine mousse has real zing and energy to it, feeling much younger than its vintage would suggest. The wine was fermented in stainless steel and concrete with an elevage of over 12 months for the base wine, then ageing for 6 years on lees.
        
       
    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Spark");
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
    color:'red',
    fontWeight:'bold',
    top:5, 
  },
  image1:{

    flex:1,
    width:'70%',
    height:'70%',
    resizeMode:"contain",
    bottom:25,
    left:85

  },

  discript:{

    bottom:120,
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

    backgroundColor:'blue',
    paddingVertical:12,
    borderRadius:10,
    width:'50%',
    bottom:20,
    left:5
  },

});
export default App;


