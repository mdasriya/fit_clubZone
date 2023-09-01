import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const imageUrl = 'https://images.unsplash.com/photo-1641236475922-4537ef0b974e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'; // Replace with your chosen image URL

  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Fitness Club</Text>
        <View style={styles.buttonContainer}>
          <Button  title="User Login" onPress={() => navigation.navigate('UserLogin')} />
          <Button  title="Trainer Login" onPress={() => navigation.navigate('TrainerLogin')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Set width to cover entire screen
    height: '100%', // Set height to cover entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  heading: {
    fontSize: 34,
    marginBottom: 20,
    marginTop:-400,
    color: 'white', // Text color
  },
  buttonContainer: {
    flexDirection: 'col',
   
  },
});

export default HomeScreen;
