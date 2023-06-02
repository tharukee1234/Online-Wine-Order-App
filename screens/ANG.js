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
     Best for Rosé Beginners:{'\n'} Belle Glos Oeil{'\n'} de Perdrix Pinot{'\n'} Noir Blanc  </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/Rum/3.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
      
       A premium rum from Angostura (of Angostura Bitters fame) from the home Dwight Yorke. 1919 is the year this blend of rum was first casked.  The rum is aged 8 years in (what else) ex Bourbon barrels.  The bottle states that they believe it “will be the smoothest rum you have ever tasted with notes of oak, cocoa and vanilla”.
        
       
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

    backgroundColor:'chocolate',
    paddingVertical:12,
    borderRadius:10,
    width:'50%',
    bottom:20,
    left:5
  },

});
export default App;


