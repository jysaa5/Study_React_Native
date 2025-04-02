import { colors } from '@/constants';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface FeedItemProps {}

function FeedItem({}: FeedItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>게시글 제목</Text>
        <Text>게시글 내용</Text>
      </View>
      <View style={styles.menuContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    padding: 16,
  },
  menuContainer: {},
});

export default FeedItem;
