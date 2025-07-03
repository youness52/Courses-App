import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '@/constants/colors';

interface ProgressBarProps {
  progress: number; // 0 to 100
  height?: number;
  showPercentage?: boolean;
}

export default function ProgressBar({ 
  progress, 
  height = 8, 
  showPercentage = false 
}: ProgressBarProps) {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <View style={styles.container}>
      <View 
        style={[
          styles.track, 
          { height }
        ]}
      >
        <View 
          style={[
            styles.progress, 
            { 
              width: `${clampedProgress}%`,
              height 
            }
          ]} 
        />
      </View>
      
      {showPercentage && (
        <Text style={styles.percentage}>
          {Math.round(clampedProgress)}%
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  track: {
    flex: 1,
    backgroundColor: 'rgba(74, 111, 165, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  percentage: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
});