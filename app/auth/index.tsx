import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
import { SafeAreaView, Image, StyleSheet, View } from "react-native";

export default function AuthScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton label="이메일 로그인" />
                <Link href={"/"} style={styles.signupText}>이메일로 가입하기</Link>
            </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  logo: {
    width: 112,
    height: 112,
  },
  signupText: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 20,
  },
    buttonContainer: {
        paddingHorizontal: 32,
        flex: 1
  }
}); 