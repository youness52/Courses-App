import React from 'react';
import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import { Search, X } from 'lucide-react-native';
import Colors from '@/constants/colors';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
}

export default function SearchBar({ 
  value, 
  onChangeText, 
  placeholder = "Search courses...",
  onSubmit
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Search size={20} color={Colors.textSecondary} style={styles.icon} />
      
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
      />
      
      {value.length > 0 && (
        <Pressable 
          style={styles.clearButton} 
          onPress={() => onChangeText('')}
        >
          <X size={18} color={Colors.textSecondary} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    height: '100%',
  },
  clearButton: {
    padding: 4,
  },
});