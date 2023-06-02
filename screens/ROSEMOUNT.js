import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/RedMenu/BIGRED.jpg')}
      >
      <Text style={styles.topicdart}>
      ROSEMOUNT RED</Text>
     <Image
        style= {styles.image1}
         source={require('../assets/RedMenu/3.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

       Rosemount Estate is one of Australia’s most iconic wine brands, with a history dating back to the early 1970s. Today, the brand is part of the Treasury Wine Estates portfolio and is available in more than 80 countries around the world. The Rosemount Estate range includes red, white and sparkling wines, as well as a selection of dessert wines. 

    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Redwine");
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
    width:'100%',
    height:'50%',
    resizeMode:"contain",
    bottom:50,
    right:25

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


