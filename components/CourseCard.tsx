import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons'; // ✅ Feather icons
import Colors from '@/constants/colors';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

export default function CourseCard({ course, compact = false }: CourseCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/course/${course.id}`);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <Pressable 
      style={[styles.container, compact && styles.compactContainer]} 
      onPress={handlePress}
    >
      <Image 
        source={{ uri: course.image }} 
        style={[styles.image, compact && styles.compactImage]} 
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <Text style={styles.category} numberOfLines={1}>
          {course.category}
        </Text>
        
        <Text style={styles.title} numberOfLines={compact ? 1 : 2}>
          {course.title}
        </Text>
        
        {!compact && (
          <Text style={styles.description} numberOfLines={2}>
            {course.description}
          </Text>
        )}
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Feather name="book-open" size={14} color={Colors.textSecondary} />
            <Text style={styles.metaText}>{formatDuration(course.duration)}</Text>
          </View>
          
          <View style={styles.metaItem}>
            <Feather name="star" size={14} color={Colors.warning} />
            <Text style={styles.metaText}>{course.rating}</Text>
          </View>
          
          <View style={styles.metaItem}>
            <Feather name="users" size={14} color={Colors.textSecondary} />
            <Text style={styles.metaText}>
              {course.studentsCount > 1000 
                ? `${(course.studentsCount / 1000).toFixed(1)}k` 
                : course.studentsCount}
            </Text>
          </View>
        </View>
        
        <View style={styles.priceContainer}>
          <Text style={styles.freeLabel}>FREE</Text>
        </View>
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  compactContainer: {
    flexDirection: 'row',
    height: 100,
  },
  image: {
    height: 160,
    width: '100%',
  },
  compactImage: {
    height: '100%',
    width: 100,
  },
  content: {
    padding: 12,
    flex: 1,
  },
  category: {
    fontSize: 12,
    color: Colors.primary,
    marginBottom: 4,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  priceContainer: {
    marginTop: 'auto',
  },
  freeLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.success,
  },
});