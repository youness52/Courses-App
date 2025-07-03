import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCourseStore } from '@/store/courseStore';
import { categories } from '@/mocks/courses';
import CourseCard from '@/components/CourseCard';
import Colors from '@/constants/colors';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { courses } = useCourseStore();
  
  const category = categories.find(c => c.id === id);
  const categoryCourses = courses.filter(course => course.category === id);
  
  if (!category) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Category not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{category.name} Courses</Text>
      
      {categoryCourses.length > 0 ? (
        <View style={styles.coursesContainer}>
          {categoryCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>
            No courses found in this category.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 24,
  },
  coursesContainer: {
    marginBottom: 24,
  },
  emptyState: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.card,
    borderRadius: 12,
  },
  emptyStateText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  notFoundText: {
    fontSize: 18,
    color: Colors.textSecondary,
  },
});