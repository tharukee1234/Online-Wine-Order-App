import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button ,ImageBackground,TouchableOpacity ,Image} from 'react-native';

const App = ({navigation}) => {
  

  return (
  
    <SafeAreaView style={styles.container}>
     <ImageBackground
        style= {styles.image}
        source={require('../assets/whiteMenu/white1.jpg')}
      >
      <Text style={styles.topicdart}>
      SAUTERNES WHITE  </Text>
     <Image
        style= {styles.image1}
         source={require('../assets/whiteMenu/5.png') }>
      </Image>


     <View>
     <Text style={styles.discript}>

      Since the serving size for dessert wines is smaller than that of other wines, it’s not unusual to not be able to finish the bottle during one meal. Due to the high sugar and alcohol content of the wine, Sauternes lasts longer than the average wine after opening. Re-cork the bottle and keep it in your refrigerator to prolong its lifetime. This will allow you to save the wine for at least 5 days and even up to several weeks.
       
    </Text>

     </View>

      <TouchableOpacity 
    style={styles.buttonContainer}
     onPress={() => {
       navigation.navigate("Whitewine");
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
    width:'50%',
    height:'50%',
    resizeMode:"contain",
    bottom:50,
    left:100

  },

  discript:{

    bottom:100,
    fontSize:15,
    color:'white',
    textAlign:'justify'
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


