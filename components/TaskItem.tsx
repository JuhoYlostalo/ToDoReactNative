import {Task} from '../App'
import { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

interface TaskItemProps {
  task: Task;
  taskDone: (id: string) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, taskDone }) => {
  return (
    <View>
      <Text
        onPress={() => taskDone(task.id)}
        style={[
            styles.taskText,
            task.done && styles.taskDone
        ]}
        >
        {task.name}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskText: {
    fontSize: 20,
    
  },

  taskDone: {
    textDecorationLine: "line-through",
    opacity: 1,
  }
});

export default TaskItem
