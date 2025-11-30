import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Todo } from '../hooks/useTodos';
import TaskItem from './TaskItem'

interface TaskProps {
    task: Todo[]
    taskDone: (id: number) => void
    taskDelete: (id: number) => void
}

const TasksRow: React.FC<TaskProps> = ({ task, taskDone, taskDelete }) => {
    return (
        <View>
            <SwipeListView
                data={task}
                keyExtractor={task => task.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.rowFront}>
                        <TaskItem task={item} taskDone={taskDone} taskDelete={taskDelete} />
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