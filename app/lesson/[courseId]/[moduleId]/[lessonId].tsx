import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Platform, Alert } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useCourseStore } from '@/store/courseStore';
import Colors from '@/constants/colors';
import * as Haptics from 'expo-haptics';

// Import content components
import VideoContent from '@/components/lesson-content/VideoContent';
import TextContent from '@/components/lesson-content/TextContent';
import PDFContent from '@/components/lesson-content/PDFContent';
import QuizContent from '@/components/lesson-content/QuizContent';

export default function LessonScreen() {
  const { courseId, moduleId, lessonId } = useLocalSearchParams<{
    courseId: string;
    moduleId: string;
    lessonId: string;
  }>();
  
  const router = useRouter();
  const { courses, updateLessonProgress } = useCourseStore();
  
  const course = courses.find(c => c.id === courseId);
  const module = course?.modules.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  
  const [isCompleted, setIsCompleted] = useState(lesson?.isCompleted || false);

  useEffect(() => {
    setIsCompleted(lesson?.isCompleted || false);
  }, [lesson?.isCompleted]);

  if (!course || !module || !lesson) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Lesson not found</Text>
      </View>
    );
  }

  const handleToggleCompletion = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    
    const newCompletionStatus = !isCompleted;
    setIsCompleted(newCompletionStatus);
    updateLessonProgress(courseId, moduleId, lessonId, newCompletionStatus);
  };

  const handleQuizComplete = (passed: boolean) => {
    if (passed && !isCompleted) {
      setIsCompleted(true);
      updateLessonProgress(courseId, moduleId, lessonId, true);
      
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
      
      Alert.alert(
        'Quiz Completed!',
        'Congratulations! You have successfully completed this lesson.',
        [{ text: 'Continue', style: 'default' }]
      );
    }
  };

  const getNextLesson = () => {
    const currentModuleIndex = course.modules.findIndex(m => m.id === moduleId);
    const currentLessonIndex = module.lessons.findIndex(l => l.id === lessonId);
    
    // Try next lesson in current module
    if (currentLessonIndex < module.lessons.length - 1) {
      return {
        courseId,
        moduleId,
        lessonId: module.lessons[currentLessonIndex + 1].id,
      };
    }
    
    // Try first lesson of next module
    if (currentModuleIndex < course.modules.length - 1) {
      const nextModule = course.modules[currentModuleIndex + 1];
      return {
        courseId,
        moduleId: nextModule.id,
        lessonId: nextModule.lessons[0].id,
      };
    }
    
    return null;
  };

  const getPreviousLesson = () => {
    const currentModuleIndex = course.modules.findIndex(m => m.id === moduleId);
    const currentLessonIndex = module.lessons.findIndex(l => l.id === lessonId);
    
    // Try previous lesson in current module
    if (currentLessonIndex > 0) {
      return {
        courseId,
        moduleId,
        lessonId: module.lessons[currentLessonIndex - 1].id,
      };
    }
    
    // Try last lesson of previous module
    if (currentModuleIndex > 0) {
      const prevModule = course.modules[currentModuleIndex - 1];
      return {
        courseId,
        moduleId: prevModule.id,
        lessonId: prevModule.lessons[prevModule.lessons.length - 1].id,
      };
    }
    
    return null;
  };

  const nextLesson = getNextLesson();
  const previousLesson = getPreviousLesson();

  const handleNextLesson = () => {
    if (nextLesson) {
      router.push(`/lesson/${nextLesson.courseId}/${nextLesson.moduleId}/${nextLesson.lessonId}`);
    }
  };

  const handlePreviousLesson = () => {
    if (previousLesson) {
      router.push(`/lesson/${previousLesson.courseId}/${previousLesson.moduleId}/${previousLesson.lessonId}`);
    }
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0) {
      return `${hours}h ${mins > 0 ? `${mins}m` : ''}`;
    }
    return `${mins}m`;
  };

  const renderContent = () => {
    switch (lesson.content.type) {
      case 'video':
        return (
          <VideoContent 
            videoUrl={lesson.content.data.videoUrl!}
            onComplete={() => !isCompleted && handleToggleCompletion()}
          />
        );
      case 'text':
        return (
          <TextContent 
            content={lesson.content.data.content!}
          />
        );
      case 'pdf':
        return (
          <PDFContent 
            pdfUrl={lesson.content.data.pdfUrl!}
          />
        );
      case 'quiz':
        return (
          <QuizContent 
            questions={lesson.content.data.questions!}
            onComplete={handleQuizComplete}
          />
        );
      default:
        return (
          <View style={styles.unsupportedContent}>
            <Text style={styles.unsupportedText}>
              Unsupported content type: {lesson.content.type}
            </Text>
          </View>
        );
    }
  };

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: lesson.title,
          headerBackTitle: "Course",
        }} 
      />
      
      <View style={styles.container}>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.moduleTitle}>{module.title}</Text>
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            
            <View style={styles.lessonMeta}>
              <Text style={styles.duration}>{formatDuration(lesson.duration)}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.contentType}>
                {lesson.content.type.charAt(0).toUpperCase() + lesson.content.type.slice(1)}
              </Text>
            </View>
          </View>
          
          <View style={styles.contentContainer}>
            {renderContent()}
          </View>
        </ScrollView>
        
        <View style={styles.footer}>
          <View style={styles.navigationContainer}>
            <Pressable 
              style={[styles.navButton, !previousLesson && styles.navButtonDisabled]}
              onPress={handlePreviousLesson}
              disabled={!previousLesson}
            >
              <Feather name="arrow-left" size={20} color={previousLesson ? Colors.primary : Colors.textSecondary} />
              <Text style={[styles.navButtonText, !previousLesson && styles.navButtonTextDisabled]}>
                Previous
              </Text>
            </Pressable>
            
            <Pressable 
              style={styles.completionButton}
              onPress={handleToggleCompletion}
            >
              {isCompleted ? (
                <Feather name="check-circle" size={20} color={Colors.success} />
              ) : (
                <Feather name="circle" size={20} color={Colors.textSecondary} />
              )}
              <Text style={[styles.completionText, isCompleted && styles.completionTextCompleted]}>
                {isCompleted ? 'Completed' : 'Mark Complete'}
              </Text>
            </Pressable>
            
            <Pressable 
              style={[styles.navButton, !nextLesson && styles.navButtonDisabled]}
              onPress={handleNextLesson}
              disabled={!nextLesson}
            >
              <Text style={[styles.navButtonText, !nextLesson && styles.navButtonTextDisabled]}>
                Next
              </Text>
              <Feather name="arrow-right" size={20} color={nextLesson ? Colors.primary : Colors.textSecondary} />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  moduleTitle: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  lessonMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  duration: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  dot: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginHorizontal: 8,
  },
  contentType: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.background,
    padding: 16,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.card,
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginHorizontal: 8,
  },
  navButtonTextDisabled: {
    color: Colors.textSecondary,
  },
  completionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.card,
  },
  completionText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginLeft: 8,
  },
  completionTextCompleted: {
    color: Colors.success,
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
  unsupportedContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  unsupportedText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
