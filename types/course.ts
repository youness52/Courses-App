export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface LessonContent {
  type: 'video' | 'text' | 'pdf' | 'quiz';
  data: {
    // For video
    videoUrl?: string;
    // For text
    content?: string;
    // For PDF
    pdfUrl?: string;
    // For quiz
    questions?: QuizQuestion[];
  };
}

export interface Lesson {
  id: string;
  title: string;
  duration: number; // in minutes
  isCompleted?: boolean;
  content: LessonContent;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: number; // total duration in minutes
  modules: Module[];
  instructor: Instructor;
  rating: number;
  studentsCount: number;
  isFeatured?: boolean;
  isEnrolled?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}