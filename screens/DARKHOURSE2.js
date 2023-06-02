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
      DOUBLE DOWN BIG </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/RedMenu/2.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

       DART Red wines will put their best foot forward when poured into and sipped out of a wine glass with adequate room. A distinctly oval or egg-shaped bowl that narrows slightly at the top as opposed to a slender flute-like glass is necessary to enjoy a red wine to the fullest.

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
    textAlign:'left',
    left:10
  },

  BackbuttonText:{

    textAlign:'center',
    color:'white',
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


