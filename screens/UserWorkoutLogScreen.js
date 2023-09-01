import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UserWorkoutLogScreen = () => {
  const [date, setDate] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState('');
  const [exercises, setExercises] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = () => {
    // Handle workout log submission logic here
    console.log('Workout Log submitted:', { date, workoutPlan, exercises, duration });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Workout Log</Text>
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      {/* Add dropdown for Workout Plan */}
      <TextInput
        style={styles.input}
        placeholder="Exercises"
        value={exercises}
        onChangeText={setExercises}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (in minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Save Log</Text>
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default UserWorkoutLogScreen;
