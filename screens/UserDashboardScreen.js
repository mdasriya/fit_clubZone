import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const UserDashboardScreen = ({ navigation }) => {
  const user = { name: 'John Doe' }; // Replace with the user's data

  return (
    <View style={styles.container}>
      {/* Custom header */}
      <View style={styles.header}>
        <FontAwesome name="user" size={24} color="white" style={styles.profileIcon} />
        <Text style={styles.headerText}>{user.name}</Text>
      </View>
      
      <Text style={styles.heading}>User Dashboard</Text>
    

      {/* Add placeholders for workout plans, nutrition plans, progress charts, achievements, etc. */}
      <Text style={styles.placeholder}>Workout Plans</Text>
      <Text style={styles.placeholder}>Nutrition Plans</Text>
      <Text style={styles.placeholder}>Progress Charts</Text>
      <Text style={styles.placeholder}>Achievements</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  profileIcon: {
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  profileButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  logButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  placeholder: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default UserDashboardScreen;
