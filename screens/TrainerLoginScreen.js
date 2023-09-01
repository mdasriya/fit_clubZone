import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const TrainerLoginScreen = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const genderOptions = [
    { label: 'Select Gender', value: '' },
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];

  const handleButtonPress = () => {
    setIsButtonPressed(true);
    // Handle form submission logic here
    console.log('Form submitted:', { name, gender, specialization, experience, email, contactNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trainer Login</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        {/* <View style={styles.pickerContainer}>
          <RNPickerSelect
            style={{ inputAndroid: styles.input }}
            items={genderOptions}
            placeholder={{ label: 'Select Gender', value: null }}
            onValueChange={setGender}
            value={gender}
          />
        </View> */}
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Specialization"
          value={specialization}
          onChangeText={setSpecialization}
        />
        <TextInput
          style={styles.input}
          placeholder="Experience"
          value={experience}
          onChangeText={setExperience}
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
      </View>
      <TouchableOpacity
        style={[styles.button, isButtonPressed && styles.buttonPressed]}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
  },
});

export default TrainerLoginScreen;
