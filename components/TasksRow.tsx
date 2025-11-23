import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Task } from '../App';
import TaskItem from './TaskItem'

interface TaskProps {
  task: Task[]
  taskDone: (id: string) => void
}

const TasksRow: React.FC<TaskProps> = ({task, taskDone}) => {
  return (
    <View>
      <SwipeListView
        data={task}
        keyExtractor={task => task.id}
        renderItem={({item}) => (
          <View style={styles.rowFront}>
            <TaskItem task={item} taskDone={taskDone}/>
          </View>
        )}
        />
    </View>
  )
}

export default TasksRow

const styles = StyleSheet.create({
    rowFront: {
        paddingBottom: 8
  }
})