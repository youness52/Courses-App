import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Course } from '@/types/course';
import { courses as mockCourses } from '@/mocks/courses';

interface CourseState {
  courses: Course[];
  enrolledCourses: string[];
  savedCourses: string[];
  enrollInCourse: (courseId: string) => void;
  unenrollFromCourse: (courseId: string) => void;
  toggleSaveCourse: (courseId: string) => void;
  updateLessonProgress: (courseId: string, moduleId: string, lessonId: string, isCompleted: boolean) => void;
  getCourseProgress: (courseId: string) => number;
}

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      courses: mockCourses,
      enrolledCourses: [],
      savedCourses: [],
      
      enrollInCourse: (courseId) => {
        set((state) => ({
          enrolledCourses: [...state.enrolledCourses, courseId],
          courses: state.courses.map(course => 
            course.id === courseId 
              ? { ...course, isEnrolled: true } 
              : course
          ),
        }));
      },
      
      unenrollFromCourse: (courseId) => {
        set((state) => ({
          enrolledCourses: state.enrolledCourses.filter(id => id !== courseId),
          courses: state.courses.map(course => 
            course.id === courseId 
              ? { ...course, isEnrolled: false } 
              : course
          ),
        }));
      },
      
      toggleSaveCourse: (courseId) => {
        set((state) => {
          const isSaved = state.savedCourses.includes(courseId);
          return {
            savedCourses: isSaved
              ? state.savedCourses.filter(id => id !== courseId)
              : [...state.savedCourses, courseId],
          };
        });
      },
      
      updateLessonProgress: (courseId, moduleId, lessonId, isCompleted) => {
        set((state) => ({
          courses: state.courses.map(course => {
            if (course.id !== courseId) return course;
            
            return {
              ...course,
              modules: course.modules.map(module => {
                if (module.id !== moduleId) return module;
                
                return {
                  ...module,
                  lessons: module.lessons.map(lesson => {
                    if (lesson.id !== lessonId) return lesson;
                    return { ...lesson, isCompleted };
                  }),
                };
              }),
            };
          }),
        }));
      },
      
      getCourseProgress: (courseId) => {
        const course = get().courses.find(c => c.id === courseId);
        if (!course) return 0;
        
        let completedLessons = 0;
        let totalLessons = 0;
        
        course.modules.forEach(module => {
          module.lessons.forEach(lesson => {
            totalLessons++;
            if (lesson.isCompleted) completedLessons++;
          });
        });
        
        return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
      },
    }),
    {
      name: 'course-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        enrolledCourses: state.enrolledCourses,
        savedCourses: state.savedCourses,
        courses: state.courses.map(course => ({
          ...course,
          modules: course.modules.map(module => ({
            ...module,
            lessons: module.lessons.map(lesson => ({
              id: lesson.id,
              isCompleted: lesson.isCompleted,
            })),
          })),
        })),
      }),
    }
  )
);