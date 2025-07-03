import React from 'react';
import { StyleSheet, TextInput, View, Pressable } from 'react-native';
<<<<<<< HEAD
import { Feather } from '@expo/vector-icons'; // Use Feather icons
=======
import { Search, X } from 'lucide-react-native';
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
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
<<<<<<< HEAD
      <Feather name="search" size={20} color={Colors.textSecondary} style={styles.icon} />
=======
      <Search size={20} color={Colors.textSecondary} style={styles.icon} />
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
      
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
<<<<<<< HEAD
          <Feather name="x" size={18} color={Colors.textSecondary} />
=======
          <X size={18} color={Colors.textSecondary} />
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
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
<<<<<<< HEAD
});
=======
});
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
