import React, {useState} from 'react';
import {Button, TextInput, StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // Generate a random color
    const randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');

    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, color: randomColor}]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='My Goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={({item}) => (
          <View style={[styles.goalsContainer, {backgroundColor: item.color}]}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#CCC',
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    paddingTop: 20,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
