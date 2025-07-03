import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, Alert } from 'react-native';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { QuizQuestion } from '@/types/course';

interface QuizContentProps {
  questions: QuizQuestion[];
  onComplete: (passed: boolean) => void;
}

export default function QuizContent({ questions, onComplete }: QuizContentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasSelectedAnswer = selectedAnswers[currentQuestionIndex] !== undefined;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
      setQuizCompleted(true);
      
      // Calculate score
      const correctAnswers = selectedAnswers.filter((answer, index) => 
        answer === questions[index].correctAnswer
      ).length;
      
      const passed = correctAnswers >= Math.ceil(questions.length * 0.7); // 70% to pass
      onComplete(passed);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    const correctAnswers = selectedAnswers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    return {
      correct: correctAnswers,
      total: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100)
    };
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score.percentage >= 70;

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.resultsContainer}>
          <View style={[styles.scoreCard, passed ? styles.passedCard : styles.failedCard]}>
            {passed ? (
              <CheckCircle size={48} color={Colors.success} />
            ) : (
              <XCircle size={48} color={Colors.error} />
            )}
            
            <Text style={styles.scoreTitle}>
              {passed ? 'Quiz Passed!' : 'Quiz Failed'}
            </Text>
            
            <Text style={styles.scoreText}>
              {score.correct} out of {score.total} correct
            </Text>
            
            <Text style={styles.percentageText}>
              {score.percentage}%
            </Text>
            
            {!passed && (
              <Text style={styles.retryMessage}>
                You need 70% or higher to pass. Try again!
              </Text>
            )}
          </View>
          
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewTitle}>Review Answers</Text>
            
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <View key={question.id} style={styles.reviewQuestion}>
                  <Text style={styles.reviewQuestionText}>
                    {index + 1}. {question.question}
                  </Text>
                  
                  <View style={styles.reviewAnswers}>
                    {question.options.map((option, optionIndex) => {
                      const isUserAnswer = userAnswer === optionIndex;
                      const isCorrectAnswer = optionIndex === question.correctAnswer;
                      
                      let answerStyle = styles.reviewAnswer;
                      if (isCorrectAnswer) {
                        answerStyle = [styles.reviewAnswer, styles.correctAnswer];
                      } else if (isUserAnswer && !isCorrect) {
                        answerStyle = [styles.reviewAnswer, styles.incorrectAnswer];
                      }
                      
                      return (
                        <View key={optionIndex} style={answerStyle}>
                          <Text style={styles.reviewAnswerText}>
                            {String.fromCharCode(65 + optionIndex)}. {option}
                          </Text>
                          {isCorrectAnswer && (
                            <CheckCircle size={16} color={Colors.success} />
                          )}
                          {isUserAnswer && !isCorrect && (
                            <XCircle size={16} color={Colors.error} />
                          )}
                        </View>
                      );
                    })}
                  </View>
                  
                  {question.explanation && (
                    <View style={styles.explanationContainer}>
                      <Text style={styles.explanationTitle}>Explanation:</Text>
                      <Text style={styles.explanationText}>{question.explanation}</Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
          
          {!passed && (
            <Pressable style={styles.retryButton} onPress={handleRetry}>
              <RotateCcw size={20} color="#fff" />
              <Text style={styles.retryButtonText}>Retry Quiz</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionCounter}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
        
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }
            ]} 
          />
        </View>
      </View>
      
      <ScrollView style={styles.questionContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestionIndex] === index;
            
            return (
              <Pressable
                key={index}
                style={[styles.option, isSelected && styles.selectedOption]}
                onPress={() => handleAnswerSelect(index)}
              >
                <View style={[styles.optionIndicator, isSelected && styles.selectedIndicator]}>
                  <Text style={[styles.optionLetter, isSelected && styles.selectedLetter]}>
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
                <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Pressable 
          style={[styles.navButton, currentQuestionIndex === 0 && styles.disabledButton]}
          onPress={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <Text style={[styles.navButtonText, currentQuestionIndex === 0 && styles.disabledText]}>
            Previous
          </Text>
        </Pressable>
        
        <Pressable 
          style={[styles.navButton, styles.nextButton, !hasSelectedAnswer && styles.disabledButton]}
          onPress={handleNext}
          disabled={!hasSelectedAnswer}
        >
          <Text style={[styles.navButtonText, styles.nextButtonText, !hasSelectedAnswer && styles.disabledText]}>
            {isLastQuestion ? 'Finish' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  questionCounter: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
  questionContainer: {
    flex: 1,
    padding: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    lineHeight: 26,
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: Colors.primary,
    backgroundColor: 'rgba(74, 111, 165, 0.1)',
  },
  optionIndicator: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  selectedIndicator: {
    backgroundColor: Colors.primary,
  },
  optionLetter: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  selectedLetter: {
    color: '#fff',
  },
  optionText: {
    fontSize: 16,
    color: Colors.text,
    flex: 1,
    lineHeight: 22,
  },
  selectedOptionText: {
    color: Colors.primary,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  navButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors.card,
  },
  nextButton: {
    backgroundColor: Colors.primary,
  },
  disabledButton: {
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  nextButtonText: {
    color: '#fff',
  },
  disabledText: {
    color: Colors.textSecondary,
  },
  resultsContainer: {
    padding: 16,
  },
  scoreCard: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
  },
  passedCard: {
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
    borderWidth: 2,
    borderColor: Colors.success,
  },
  failedCard: {
    backgroundColor: 'rgba(220, 53, 69, 0.1)',
    borderWidth: 2,
    borderColor: Colors.error,
  },
  scoreTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  scoreText: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  percentageText: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 8,
  },
  retryMessage: {
    fontSize: 14,
    color: Colors.error,
    textAlign: 'center',
  },
  reviewContainer: {
    marginBottom: 24,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
  },
  reviewQuestion: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: Colors.card,
    borderRadius: 12,
  },
  reviewQuestionText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  reviewAnswers: {
    gap: 8,
  },
  reviewAnswer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.background,
  },
  correctAnswer: {
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
    borderWidth: 1,
    borderColor: Colors.success,
  },
  incorrectAnswer: {
    backgroundColor: 'rgba(220, 53, 69, 0.1)',
    borderWidth: 1,
    borderColor: Colors.error,
  },
  reviewAnswerText: {
    fontSize: 14,
    color: Colors.text,
    flex: 1,
  },
  explanationContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: 'rgba(74, 111, 165, 0.1)',
    borderRadius: 8,
  },
  explanationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 4,
  },
  explanationText: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});