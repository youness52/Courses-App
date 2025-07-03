import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons'; // import Feather
import Colors from '@/constants/colors';
import { Module } from '@/types/course';
import { useCourseStore } from '@/store/courseStore';

interface ModuleAccordionProps {
  module: Module;
  courseId: string;
  index: number;
}

export default function ModuleAccordion({ module, courseId, index }: ModuleAccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const { updateLessonProgress } = useCourseStore();
  const router = useRouter();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleLessonPress = (lessonId: string) => {
    router.push(`/lesson/${courseId}/${module.id}/${lessonId}`);
  };

  const toggleLessonCompletion = (moduleId: string, lessonId: string, isCompleted: boolean) => {
    updateLessonProgress(courseId, moduleId, lessonId, !isCompleted);
  };

  const completedLessons = module.lessons.filter(lesson => lesson.isCompleted).length;
  const totalLessons = module.lessons.length;

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins > 0 ? `${mins}m` : ''}`;
    }
    return `${mins}m`;
  };

  const getTotalDuration = () => {
    return module.lessons.reduce((total, lesson) => total + lesson.duration, 0);
  };

  const getContentIcon = (contentType: string) => {
    switch (contentType) {
      case 'video':
        return <Feather name="play" size={16} color={Colors.primary} />;
      case 'quiz':
        return <Feather name="check-circle" size={16} color={Colors.warning} />;
      case 'pdf':
        return <Text style={styles.contentTypeIcon}>📄</Text>;
      case 'text':
        return <Text style={styles.contentTypeIcon}>📝</Text>;
      default:
        return <Feather name="play" size={16} color={Colors.primary} />;
    }
  };

  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.header} 
        onPress={toggleExpanded}
      >
        <View style={styles.moduleInfo}>
          <Text style={styles.moduleNumber}>Module {index + 1}</Text>
          <Text style={styles.moduleTitle}>{module.title}</Text>
          
          <View style={styles.moduleStats}>
            <Text style={styles.moduleStatsText}>
              {completedLessons}/{totalLessons} lessons
            </Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.moduleStatsText}>
              {formatDuration(getTotalDuration())}
            </Text>
          </View>
        </View>
        
        {expanded ? (
          <Feather name="chevron-up" size={20} color={Colors.text} />
        ) : (
          <Feather name="chevron-down" size={20} color={Colors.text} />
        )}
      </Pressable>
      
      {expanded && (
        <View style={styles.content}>
          {module.lessons.map((lesson, lessonIndex) => (
            <View key={lesson.id} style={styles.lessonContainer}>
              <Pressable 
                style={styles.lessonItem}
                onPress={() => handleLessonPress(lesson.id)}
              >
                <View style={styles.lessonLeft}>
                  {getContentIcon(lesson.content.type)}
                  <View style={styles.lessonInfo}>
                    <Text style={styles.lessonTitle}>
                      {lessonIndex + 1}. {lesson.title}
                    </Text>
                    <View style={styles.lessonMeta}>
                      <Text style={styles.lessonDuration}>
                        {formatDuration(lesson.duration)}
                      </Text>
                      <Text style={styles.dot}>•</Text>
                      <Text style={styles.contentType}>
                        {lesson.content.type.charAt(0).toUpperCase() + lesson.content.type.slice(1)}
                      </Text>
                    </View>
                  </View>
                </View>
                
                <Pressable 
                  style={styles.completionButton}
                  onPress={(e) => {
                    e.stopPropagation();
                    toggleLessonCompletion(module.id, lesson.id, !!lesson.isCompleted);
                  }}
                >
                  {lesson.isCompleted ? (
                    <Feather name="check-circle" size={20} color={Colors.success} />
                  ) : (
                    <Feather name="circle" size={20} color={Colors.textSecondary} />
                  )}
                </Pressable>
              </Pressable>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  moduleInfo: {
    flex: 1,
  },
  moduleNumber: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  moduleStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moduleStatsText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  dot: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginHorizontal: 4,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  lessonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  lessonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  lessonInfo: {
    flex: 1,
    marginLeft: 12,
  },
  lessonTitle: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
    marginBottom: 4,
  },
  lessonMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonDuration: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  contentType: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '500',
  },
  contentTypeIcon: {
    fontSize: 16,
  },
  completionButton: {
    padding: 4,
  },
});
