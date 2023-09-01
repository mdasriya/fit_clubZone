import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Radio } from 'react-native';

const UserDashboardScreen = () => {
  const user = { name: 'John Doe', profileImageUrl: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600' };
  const [fitnessGoal, setFitnessGoal] = useState('');

  const handleFitnessGoalChange = (goal) => {
    setFitnessGoal(goal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{user.name}</Text>
        <Image source={{ uri: user.profileImageUrl }} style={styles.profileImage} />
      </View>
      
   
      <Text style={styles.sectionHeading}>Select Fitness Goal:</Text>
      <View style={styles.fitnessGoalContainer}>
        <TouchableOpacity
          style={[
            styles.goalOption,
            fitnessGoal === 'Weight Loss' && styles.goalOptionSelected,
          ]}
          onPress={() => handleFitnessGoalChange('Weight Loss')}
        >
          <Text style={styles.goalText}>Weight Loss</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.goalOption,
            fitnessGoal === 'Muscle Gain' && styles.goalOptionSelected,
          ]}
          onPress={() => handleFitnessGoalChange('Muscle Gain')}
        >
          <Text style={styles.goalText}>Muscle Gain</Text>
        </TouchableOpacity>
        {/* Add more fitness goals as needed */}
      </View>
      
      {/* Add workout progress chart */}
    </View>
  );
}

const styles = StyleSheet.create({
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    marginLeft:10,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  fitnessGoalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  goalOption: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  goalOptionSelected: {
    backgroundColor: 'green',
  },
  goalText: {
    color: 'black',
    fontSize: 16,
  },
});

export default UserDashboardScreen;
