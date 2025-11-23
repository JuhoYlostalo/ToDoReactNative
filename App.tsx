import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import InputRow from './components/InputRow';
import TasksRow from './components/TasksRow';
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = "TASK_LIST_ITEMS"

export interface Task {
  id: string,
  name: string,
  done: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY)
        if (json) setTasks(JSON.parse(json))
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])


  const addTask = () => {
    if (input.trim()) {
      setTasks(prev => [
        ...prev, { id: Date.now().toString(), name: input.trim(), done: false },
      ])
      setInput('')
    }
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <InputRow input={input} setInput={setInput} addTask={addTask}></InputRow>
      <TasksRow task={tasks} taskDone={toggleTask}></TasksRow>
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
