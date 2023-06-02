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
     Best for Rosé Beginners:{'\n'} Belle Glos Oeil{'\n'} de Perdrix Pinot{'\n'} Noir Blanc  </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/RoseMenu/4.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
      
       Belle Glos showcases distinctive Pinot Noirs from California’s most noteworthy winegrowing regions. While each vineyard location lies near the Pacific Ocean, the climate differences are significant, varying with the amount of fog, wind, sunlight, and soil type at each site. Each Vineyard Designate is crafted to distill the purest essence of the locale into elegant expressions of California Pinot Noir.
        
       
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


