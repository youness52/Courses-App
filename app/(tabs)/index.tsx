import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useCourseStore } from '@/store/courseStore';
import { categories } from '@/mocks/courses';
import CourseCard from '@/components/CourseCard';
import CategoryCard from '@/components/CategoryCard';
import SearchBar from '@/components/SearchBar';
import Colors from '@/constants/colors';

export default function DiscoverScreen() {
  const { courses } = useCourseStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const featuredCourses = courses.filter(course => course.isFeatured);
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello there 👋</Text>
        <Text style={styles.subtitle}>Find your perfect course</Text>
      </View>
      
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map(category => (
          <CategoryCard 
            key={category.id} 
            category={category}
            isSelected={selectedCategory === category.id}
            onSelect={() => handleCategorySelect(category.id)}
          />
        ))}
      </ScrollView>
      
      {featuredCourses.length > 0 && !searchQuery && !selectedCategory && (
        <>
          <Text style={styles.sectionTitle}>Featured Courses</Text>
          <View style={styles.featuredContainer}>
            {featuredCourses.slice(0, 2).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </View>
        </>
      )}
      
      <Text style={styles.sectionTitle}>
        {searchQuery || selectedCategory ? 'Search Results' : 'All Courses'}
      </Text>
      <View style={styles.coursesContainer}>
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
        
        {filteredCourses.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No courses found. Try a different search or category.
            </Text>
          </View>
        )}
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
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
    marginTop: 24,
  },
  categoriesContainer: {
    paddingRight: 16,
  },
  featuredContainer: {
    marginBottom: 8,
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
});