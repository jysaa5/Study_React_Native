import CustomButton from '@/components/CustomButton';
import { Text, SafeAreaView } from "react-native";
import {router} from "expo-router"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label='버튼' onPress={() => router.push('../auth')}/>
    </SafeAreaView>
  );
}


