import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/RoseMenu/im15.jpg')}
      >
      <Text style={styles.topicdart}>
      Best Full-Bodied Rose </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/RoseMenu/2.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

      Miraval Rose is the Rolls Royce of Provence not only because behind it are Angelina Jolie and Brad Pitt but also because it is a creation of the Perrin family. Its delicate color and aromas of juicy red fruits make it irresistible.

Everyone talks about Provence wines for their light onion color, but that's not all. Provence wines also have fantastic fruit concentration and discreet mineral character. Miraval Rose is a bright example of the above. Its origin is from the village Corrins, the first organic village in France.
       
    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Rose");
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
    width:'80%',
    height:'50%',
    resizeMode:"contain",
    bottom:50,
    left:50
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


