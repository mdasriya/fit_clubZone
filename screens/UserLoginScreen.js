import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const UserLoginScreen = ({ navigation }) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleDashboard = () => {
    alert("hello")
    navigation.navigate('UserDashboard');
  }

  const handleButtonPress = () => {
    setIsButtonPressed(true);
    // Handle form submission logic here
    console.log('Form submitted:', { name, age, gender, height, weight, email, contactNumber });
    // navigation.navigate('UserDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Login</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Height"
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Weight"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={setContactNumber}
          keyboardType="phone-pad"
        />
        <TouchableOpacity
          style={[styles.button, isButtonPressed && styles.buttonPressed]}
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText} onPress={handleDashboard}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3, // Add box shadow
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center', // Center picker vertically
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: 'darkblue', // Change color when pressed
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign:"center",
  },
});

export default UserLoginScreen;
