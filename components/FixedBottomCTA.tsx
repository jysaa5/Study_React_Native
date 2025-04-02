import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from './CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/constants';

interface FixedBottomCTAProps {
    label: string;
    onPress: () => void;
}

function FixedBottomCTA({ label, onPress }: FixedBottomCTAProps) {
    const inset = useSafeAreaInsets();
  return (
    <View style={[styles.fixed, { paddingBottom: inset.bottom || 12 }]}>
      <CustomButton label={label} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  fixed: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});

export default FixedBottomCTA;