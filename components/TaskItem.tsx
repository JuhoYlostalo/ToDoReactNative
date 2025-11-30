import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Todo } from '../hooks/useTodos';

interface TaskItemProps {
    task: Todo;
    taskDone: (id: number) => void
    taskDelete: ( id: number) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, taskDone, taskDelete }) => {
    return (
        <View style={styles.tasksRow}>
            <Text
                onPress={() => taskDone(task.id)}
                style={[
                    styles.taskText,
                    task.done && styles.taskDone
                ]}
            >
                {task.text}
            </Text>
            <Text style={styles.delete} onPress={() => taskDelete(task.id)}>Delete</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tasksRow: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    taskText: {
        fontSize: 20,

    },

    delete: {
        fontSize: 20,
        color: "rgba(218, 12, 22, 0.8)"
    },

    taskDone: {
        textDecorationLine: "line-through",
        opacity: 1,
    }
});

export default TaskItem
