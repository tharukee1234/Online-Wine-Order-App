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
      Best Overall: Minuty M Rosé 2021 </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/RoseMenu/6.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

       Minuty M Rosé is a blend of Grenache, Cinsault, Syrah and Tibouren grapes. 

On the nose, red fruit, orange, and peach are the most prominent aromas, with hints of lemon grass.

On the palate, it’s refreshing thanks to its high acidity, with flavors of red currant, peach, and orange.
       
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
    left:60

  },

  discript:{

    bottom:100,
    fontSize:15,
    color:'white',
    textAlign:'left',
    left:10
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


