import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';

function PaymentPage({ navigation }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNo, setPhone] = useState('');

  const handlePayment = () => {
    if (cardNumber && expirationDate && cvv && address && phoneNo) {
      if (cvv.length === 3) {
        if (phoneNo.length === 10) {
          Alert.alert('Payment Successful', 'Thank you for your purchase!');
          navigation.navigate('Thank');

          setCardNumber('');
          setExpirationDate('');
          setCvv('');
          setAddress('');
          setPhone('');
          
        } else {
          Alert.alert('Error', 'Phone number should have exactly 10 digits');
        }
      } else {
        Alert.alert('Error', 'CVV should have exactly three digits');
      }
    } else {
      Alert.alert('Error', 'Please fill in all the fields');
    }
  };

  return (
    <ImageBackground
      style={{ flex: 1, opacity: 0.7 }}
      source={require('../assets/RedMenu/PAY.jpg')}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <Text style={styles.label}>Expiration Date</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={expirationDate}
          onChangeText={setExpirationDate}
        />

        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          keyboardType="string"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Contact Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={phoneNo}
          onChangeText={setPhone}
        />

        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Make Payment</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  input: {
    height: 35,
    width: '100%',
    borderColor: 'white',
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default PaymentPage;
