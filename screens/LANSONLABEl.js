import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/RedMenu/GRAN.jpg')}
      >
      <Text style={styles.topicdart}>
      LANSON BLACK LABEl</Text>
     <Image
        style= {styles.image1}
         source={require('../assets/ChampaineMenu/7.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
Lanson Black Label continues to stand out in the non vintage Champagne crowd with its quality and consistency year after year. Lanson, with a pedigree and history that rivals any Champagne house, is easily one of the best value non vintage Champagnes, with its fine and elegant palate that continues right across the tongue. A soft and pure texture follows showcasing the delicate acid structure of one of the true Champagne bargains.
    </Text>

     </View>

       <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Champaines");
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
    width:'40%',
    height:'50%',
    resizeMode:"contain",
    bottom:50,
    left:100

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

    backgroundColor:'blue',
    paddingVertical:12,
    borderRadius:10,
    width:'50%',
    bottom:20,
    left:5
  },

});
export default App;


