import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Star, Users, Clock, Bookmark, BookmarkCheck, Share2 } from 'lucide-react-native';
import { useCourseStore } from '@/store/courseStore';
import Colors from '@/constants/colors';
import ProgressBar from '@/components/ProgressBar';
import ModuleAccordion from '@/components/ModuleAccordion';
import * as Haptics from 'expo-haptics';

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { 
    courses, 
    enrolledCourses, 
    savedCourses,
    enrollInCourse, 
    unenrollFromCourse, 
    toggleSaveCourse,
    getCourseProgress
  } = useCourseStore();
  
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Course not found</Text>
      </View>
    );
  }
  
  const isEnrolled = enrolledCourses.includes(course.id);
  const isSaved = savedCourses.includes(course.id);
  const progress = getCourseProgress(course.id);
  
  const handleEnrollToggle = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    
    if (isEnrolled) {
      unenrollFromCourse(course.id);
    } else {
      enrollInCourse(course.id);
    }
  };
  
  const handleSaveToggle = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    toggleSaveCourse(course.id);
  };
  
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image 
        source={{ uri: course.image }} 
        style={styles.image} 
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{course.title}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Star size={16} color={Colors.warning} />
              <Text style={styles.metaText}>{course.rating}</Text>
            </View>
            
            <View style={styles.metaItem}>
              <Users size={16} color={Colors.textSecondary} />
              <Text style={styles.metaText}>
                {course.studentsCount > 1000 
                  ? `${(course.studentsCount / 1000).toFixed(1)}k` 
                  : course.studentsCount}
              </Text>
            </View>
            
            <View style={styles.metaItem}>
              <Clock size={16} color={Colors.textSecondary} />
              <Text style={styles.metaText}>{formatDuration(course.duration)}</Text>
            </View>
          </View>
          
          <View style={styles.actionsContainer}>
            <Pressable 
              style={styles.saveButton} 
              onPress={handleSaveToggle}
            >
              {isSaved ? (
                <BookmarkCheck size={20} color={Colors.primary} />
              ) : (
                <Bookmark size={20} color={Colors.textSecondary} />
              )}
            </Pressable>
            
            <Pressable style={styles.shareButton}>
              <Share2 size={20} color={Colors.textSecondary} />
            </Pressable>
          </View>
        </View>
        
        {isEnrolled && (
          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Your Progress</Text>
              <Text style={styles.progressPercentage}>{Math.round(progress)}%</Text>
            </View>
            <ProgressBar progress={progress} height={8} />
          </View>
        )}
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About this course</Text>
          <Text style={styles.description}>{course.description}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructor</Text>
          <View style={styles.instructorContainer}>
            <Image 
              source={{ uri: course.instructor.avatar }} 
              style={styles.instructorAvatar} 
            />
            <View style={styles.instructorInfo}>
              <Text style={styles.instructorName}>{course.instructor.name}</Text>
              <Text style={styles.instructorTitle}>{course.instructor.title}</Text>
              <Text style={styles.instructorBio} numberOfLines={3}>
                {course.instructor.bio}
              </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Content</Text>
          <View style={styles.contentSummary}>
            <Text style={styles.contentSummaryText}>
              {course.modules.length} modules • {course.modules.reduce((total, module) => total + module.lessons.length, 0)} lessons • {formatDuration(course.duration)}
            </Text>
          </View>
          
          {course.modules.map((module, index) => (
            <ModuleAccordion 
              key={module.id} 
              module={module} 
              courseId={course.id}
              index={index}
            />
          ))}
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.freeLabel}>FREE</Text>
        </View>
        
        <Pressable 
          style={[
            styles.enrollButton,
            isEnrolled && styles.unenrollButton
          ]} 
          onPress={handleEnrollToggle}
        >
          <Text style={[
            styles.enrollButtonText,
            isEnrolled && styles.unenrollButtonText
          ]}>
            {isEnrolled ? 'Unenroll' : 'Enroll Now'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  saveButton: {
    padding: 8,
    marginRight: 8,
  },
  shareButton: {
    padding: 8,
  },
  progressSection: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  instructorContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
  },
  instructorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  instructorInfo: {
    flex: 1,
  },
  instructorName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  instructorTitle: {
    fontSize: 14,
    color: Colors.primary,
    marginBottom: 8,
  },
  instructorBio: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  contentSummary: {
    marginBottom: 16,
  },
  contentSummaryText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.background,
  },
  priceContainer: {
    justifyContent: 'center',
    marginRight: 16,
  },
  freeLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.success,
  },
  enrollButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enrollButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  unenrollButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.error,
  },
  unenrollButtonText: {
    color: Colors.error,
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