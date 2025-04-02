import { Tabs } from 'expo-router';
import { colors } from '@/constants';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.ORANGE_600,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-outline' : 'home-sharp'} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: '내 프로필',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-outline'} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: '설정',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
