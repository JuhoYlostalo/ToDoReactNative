import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

interface inputProps {
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    addTask: (text: string) => void
}

const InputRow: React.FC<inputProps> = ({ input, setInput, addTask }) => {
    return (
        <View style={styles.inputRow}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder='Enter task'
            />
            <Text style={styles.text} onPress={() =>addTask(input)}>Save</Text>
        </View>
    )
}

export default InputRow

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 24
    },
    text: {
        fontSize: 24,
        color: "#42a7f5"
    }
})