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
         source={require('../assets/RoseMenu/3.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

       This rosé of pinot noir has a fruit-forward aroma with a crisp, berry-like flavor. Enjoy with appetizers like a charcuterie and cheese platter or a summery salad.
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
    top:20, 
  },
  image1:{

    flex:1,
    width:'80%',
    height:'50%',
    resizeMode:"contain",
    bottom:50,
    left:40

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


