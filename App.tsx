import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import InputRow from './components/InputRow';
import TasksRow from './components/TasksRow';
import { useTodos } from './hooks/useTodos';


export default function App() {
  const [input, setInput] = useState('')
  const {todos, handleToggle, handleDelete, handleAdd} = useTodos()

  const handleAddClear = (text: string) => {
    if(text.trim()) {
      handleAdd(text)
      setInput('')
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <InputRow input={input} setInput={setInput} addTask={handleAddClear}></InputRow>
      <TasksRow task={todos} taskDone={handleToggle} taskDelete={handleDelete}></TasksRow>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "medium",
    marginBottom: 16,
    textAlign: 'center' as const,
  },


});
