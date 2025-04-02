import { Stack } from 'expo-router';

export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="index" options={{ title: '내 프로필', headerShown: false }} />
    </Stack>
  );
}
