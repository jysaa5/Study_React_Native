import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>텍스트</Text>
      </View>
      <TextInput value={text} onChangeText={(value) => setText(value)} style={styles.input} />
      <Button title="버튼 이름" onPress={()=> console.log("pressed!")} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow"
  },
  text: {
    color: "red",
    fontSize: 30
  },
  input: {
    fontSize: 30
  }
})