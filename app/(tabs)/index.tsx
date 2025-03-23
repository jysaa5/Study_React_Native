import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

// export default function HomeScreen() {
//   const [text, setText] = useState('');
//   return (
//     <SafeAreaView>
//       <View style={styles.parent}>
//         <View style={styles.container}>
//           <Text style={styles.text}>텍스트</Text>
//         </View>
//         <View style={styles.container2}>
//           <Text style={styles.text}>텍스트</Text>
//           <Text style={styles.text}>텍스트</Text>
//           <Text style={styles.text}>텍스트</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }


// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   container: {
//     backgroundColor: "yellow",
//   },
//   container2: {
//     backgroundColor: "blue",
//   },
//   text: {
//     color: "red",
//     fontSize: 30,
//   },
//   input: {
//     fontSize: 30,
//   },
// });


function Mission() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          <Box />
          <Box />
          <Box />
        </View>
        <View style={styles.container2}>
          <Box />
          <Box />
          <Box />
        </View>
        <View style={styles.container3}>
          <Box />
          <Box />
          <Box />
        </View>
    </SafeAreaView>
  );
}

function Box() {
  return <View style={styles.box} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: "space-between",
    flex:1
  },
  container1: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container3: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
});

export default Mission;