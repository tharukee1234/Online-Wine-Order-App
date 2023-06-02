import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/DesertMenu/im12.jpg')}
      >
      <Text style={styles.topicdart}>
      Barefoot Moscato </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/DesertMenu/1.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>
      
    The Barefoot Moscato is a sweet wine with lush fruity aromas. On the palate, the wine is citrus notes coupled with flavours of tangerine, apricot, and peach. Best served with artisanal cheese and light desserts
        
       
    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Dessert");
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
    width:'100%',
    height:'80%',
    resizeMode:"contain",
    bottom:80,
    left:10,

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


