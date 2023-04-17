import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {

  const [value, setValue] = useState('');
  const [task, setTask] = useState([]);

  const addTask = ()=>{
    setTask([...task, value]);
  }

  const deleteTask = ()=>{
    task.splice(-1, 1);
    setTask(task);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Task List</Text>
      <TextInput style={styles.input} placeholder='Write something' onChangeText={setValue}/>
      
      <StatusBar style="auto" />

      <Button color={'green'} onPress={addTask} title='add'/>
      <Button color={'red'} onPress={deleteTask} title='eliminar'/>

      {task.map((name, i)=> (
        <Text style={styles.textTask} key={i}>{name}</Text>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '35%',
    marginTop: '50px',
    textAlign: 'center',
  },
  h1: {
    fontSize: '40px'
  },

  input: {
    margin: '10px',
    width: '500px',
    height: '40px',
    fontSize: '18px',
    border: 'solid black 1px',
    padding: '10px',
    borderRadius: '20px'
  },

  textTask: {
    fontSize: '25px'
  }
});
