import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
<<<<<<< HEAD
import { Feather } from '@expo/vector-icons'; // ✅ Feather icons
=======
import { Palette, Code, Briefcase, TrendingUp, Camera, Music } from 'lucide-react-native';
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
import Colors from '@/constants/colors';
import { Category } from '@/types/course';

interface CategoryCardProps {
  category: Category;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function CategoryCard({ category, isSelected = false, onSelect }: CategoryCardProps) {
  const router = useRouter();

  const handlePress = () => {
    if (onSelect) {
      onSelect();
    } else {
      router.push(`/category/${category.id}`);
    }
  };

  const getIcon = () => {
<<<<<<< HEAD
    const iconProps = {
      size: 24,
      color: isSelected ? '#fff' : Colors.primary,
    };

    const featherIconName = {
      palette: 'aperture',
      code: 'code',
      briefcase: 'briefcase',
      'trending-up': 'trending-up',
      camera: 'camera',
      music: 'music',
    }[category.icon as keyof typeof featherIconName] || 'aperture';

    return <Feather name={featherIconName} {...iconProps} />;
  };

  return (
    <Pressable
      style={[
        styles.container,
        isSelected && styles.selectedContainer,
      ]}
      onPress={handlePress}
    >
      <View
        style={[
          styles.iconContainer,
          isSelected && styles.selectedIconContainer,
        ]}
      >
        {getIcon()}
      </View>
      <Text
        style={[
          styles.name,
          isSelected && styles.selectedName,
=======
    const iconProps = { 
      size: 24, 
      color: isSelected ? '#fff' : Colors.primary 
    };

    switch (category.icon) {
      case 'palette':
        return <Palette {...iconProps} />;
      case 'code':
        return <Code {...iconProps} />;
      case 'briefcase':
        return <Briefcase {...iconProps} />;
      case 'trending-up':
        return <TrendingUp {...iconProps} />;
      case 'camera':
        return <Camera {...iconProps} />;
      case 'music':
        return <Music {...iconProps} />;
      default:
        return <Palette {...iconProps} />;
    }
  };

  return (
    <Pressable 
      style={[
        styles.container, 
        isSelected && styles.selectedContainer
      ]} 
      onPress={handlePress}
    >
      <View style={[
        styles.iconContainer,
        isSelected && styles.selectedIconContainer
      ]}>
        {getIcon()}
      </View>
      <Text 
        style={[
          styles.name,
          isSelected && styles.selectedName
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
        ]}
        numberOfLines={1}
      >
        {category.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.card,
    marginRight: 12,
    width: 100,
    height: 100,
  },
  selectedContainer: {
    backgroundColor: Colors.primary,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(74, 111, 165, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  selectedIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
  },
  selectedName: {
    color: '#fff',
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
