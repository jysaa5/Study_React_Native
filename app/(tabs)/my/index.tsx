import { useFocusEffect, router } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';

export default function MyScreen() {
  useFocusEffect(() => {
    router.replace('/auth');
  });
  return (
    <SafeAreaView>
      <Text>내 정보 스크린</Text>
    </SafeAreaView>
  );
}
