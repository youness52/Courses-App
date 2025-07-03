import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useCourseStore } from '@/store/courseStore';
import CourseCard from '@/components/CourseCard';
import ProgressBar from '@/components/ProgressBar';
import Colors from '@/constants/colors';

export default function MyCoursesScreen() {
  const { courses, enrolledCourses, getCourseProgress } = useCourseStore();
  
  const myCourses = courses.filter(course => 
    enrolledCourses.includes(course.id)
  );

  const inProgressCourses = myCourses.filter(course => {
    const progress = getCourseProgress(course.id);
    return progress > 0 && progress < 100;
  });

  const notStartedCourses = myCourses.filter(course => {
    const progress = getCourseProgress(course.id);
    return progress === 0;
  });

  const completedCourses = myCourses.filter(course => {
    const progress = getCourseProgress(course.id);
    return progress === 100;
  });

  if (myCourses.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No courses yet</Text>
        <Text style={styles.emptyText}>
          Enroll in courses to see them here
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>My Courses</Text>
      
      {inProgressCourses.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>In Progress</Text>
          {inProgressCourses.map(course => (
            <View key={course.id} style={styles.courseWithProgress}>
              <CourseCard course={course} compact />
              <View style={styles.progressContainer}>
                <ProgressBar 
                  progress={getCourseProgress(course.id)} 
                  showPercentage 
                />
              </View>
            </View>
          ))}
        </View>
      )}
      
      {notStartedCourses.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Not Started</Text>
          {notStartedCourses.map(course => (
            <CourseCard key={course.id} course={course} compact />
          ))}
        </View>
      )}
      
      {completedCourses.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed</Text>
          {completedCourses.map(course => (
            <View key={course.id} style={styles.courseWithProgress}>
              <CourseCard course={course} compact />
              <View style={styles.progressContainer}>
                <ProgressBar 
                  progress={100} 
                  showPercentage 
                />
              </View>
            </View>
          ))}
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  courseWithProgress: {
    marginBottom: 16,
  },
  progressContainer: {
    marginTop: 8,
    paddingHorizontal: 12,
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