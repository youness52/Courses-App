import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useCourseStore } from '@/store/courseStore';
import CourseCard from '@/components/CourseCard';
import Colors from '@/constants/colors';

export default function SavedScreen() {
  const { courses, savedCourses } = useCourseStore();
  
  const savedCoursesList = courses.filter(course => 
    savedCourses.includes(course.id)
  );

  if (savedCoursesList.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No saved courses</Text>
        <Text style={styles.emptyText}>
          Bookmark courses to save them for later
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Saved Courses</Text>
      
      <View style={styles.coursesContainer}>
        {savedCoursesList.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </View>
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
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});