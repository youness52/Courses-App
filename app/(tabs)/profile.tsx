import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native';
import { useCourseStore } from '@/store/courseStore';
import { BookOpen, Award, Clock, Settings, User, Bell, CreditCard, HelpCircle, LogOut, Edit3 } from 'lucide-react-native';
import Colors from '@/constants/colors';

export default function ProfileScreen() {
  const { courses, enrolledCourses, getCourseProgress } = useCourseStore();
  
  const enrolledCoursesList = courses.filter(course => 
    enrolledCourses.includes(course.id)
  );

  const completedCourses = enrolledCoursesList.filter(course => 
    getCourseProgress(course.id) === 100
  ).length;

  const inProgressCourses = enrolledCoursesList.filter(course => 
    getCourseProgress(course.id) > 0 && getCourseProgress(course.id) < 100
  ).length;

  const totalHours = enrolledCoursesList.reduce((total, course) => 
    total + course.duration / 60, 0
  );

  const handleEditProfile = () => {
    Alert.alert(
      'Edit Profile',
      'Profile editing functionality would be implemented here.',
      [{ text: 'OK', style: 'default' }]
    );
  };

  const handleNotifications = () => {
    Alert.alert(
      'Notifications',
      'Notification settings would be configured here.',
      [{ text: 'OK', style: 'default' }]
    );
  };

  const handlePaymentMethods = () => {
    Alert.alert(
      'Payment Methods',
      'Since all courses are free, payment methods are not needed.',
      [{ text: 'OK', style: 'default' }]
    );
  };

  const handleHelp = () => {
    Alert.alert(
      'Help & Support',
      'Contact support at support@learningapp.com or visit our FAQ section.',
      [{ text: 'OK', style: 'default' }]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', style: 'destructive', onPress: () => {
          // Logout functionality would be implemented here
          Alert.alert('Logged Out', 'You have been successfully logged out.');
        }}
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }} 
            style={styles.avatar}
          />
          <Pressable style={styles.editAvatarButton} onPress={handleEditProfile}>
            <Edit3 size={16} color="#fff" />
          </Pressable>
        </View>
        
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <Text style={styles.joinDate}>Member since January 2024</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <BookOpen size={24} color={Colors.primary} />
          <Text style={styles.statValue}>{enrolledCoursesList.length}</Text>
          <Text style={styles.statLabel}>Enrolled</Text>
        </View>
        
        <View style={styles.statCard}>
          <Award size={24} color={Colors.success} />
          <Text style={styles.statValue}>{completedCourses}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        
        <View style={styles.statCard}>
          <Clock size={24} color={Colors.warning} />
          <Text style={styles.statValue}>{totalHours.toFixed(0)}</Text>
          <Text style={styles.statLabel}>Hours</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning Progress</Text>
        
        <View style={styles.progressCard}>
          <View style={styles.progressItem}>
            <View style={styles.progressIconContainer}>
              <BookOpen size={20} color="#fff" />
            </View>
            <View style={styles.progressContent}>
              <Text style={styles.progressTitle}>Courses in Progress</Text>
              <Text style={styles.progressValue}>{inProgressCourses} active courses</Text>
            </View>
          </View>
          
          <View style={styles.progressItem}>
            <View style={[styles.progressIconContainer, { backgroundColor: Colors.success }]}>
              <Award size={20} color="#fff" />
            </View>
            <View style={styles.progressContent}>
              <Text style={styles.progressTitle}>Certificates Earned</Text>
              <Text style={styles.progressValue}>{completedCourses} certificates</Text>
            </View>
          </View>
          
          <View style={styles.progressItem}>
            <View style={[styles.progressIconContainer, { backgroundColor: Colors.warning }]}>
              <Clock size={20} color="#fff" />
            </View>
            <View style={styles.progressContent}>
              <Text style={styles.progressTitle}>Learning Time</Text>
              <Text style={styles.progressValue}>{totalHours.toFixed(1)} hours total</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        
        <View style={styles.menuContainer}>
          <Pressable style={styles.menuItem} onPress={handleEditProfile}>
            <View style={styles.menuItemLeft}>
              <User size={20} color={Colors.primary} />
              <Text style={styles.menuItemText}>Edit Profile</Text>
            </View>
            <Text style={styles.menuItemArrow}>›</Text>
          </Pressable>
          
          <Pressable style={styles.menuItem} onPress={handleNotifications}>
            <View style={styles.menuItemLeft}>
              <Bell size={20} color={Colors.primary} />
              <Text style={styles.menuItemText}>Notifications</Text>
            </View>
            <Text style={styles.menuItemArrow}>›</Text>
          </Pressable>
          
          <Pressable style={styles.menuItem} onPress={handlePaymentMethods}>
            <View style={styles.menuItemLeft}>
              <CreditCard size={20} color={Colors.primary} />
              <Text style={styles.menuItemText}>Payment Methods</Text>
            </View>
            <Text style={styles.menuItemArrow}>›</Text>
          </Pressable>
          
          <Pressable style={styles.menuItem} onPress={handleHelp}>
            <View style={styles.menuItemLeft}>
              <HelpCircle size={20} color={Colors.primary} />
              <Text style={styles.menuItemText}>Help & Support</Text>
            </View>
            <Text style={styles.menuItemArrow}>›</Text>
          </Pressable>
        </View>
      </View>
      
      <View style={styles.section}>
        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Learning App v1.0.0</Text>
        <Text style={styles.footerText}>Made with ❤️ for learners everywhere</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.card,
    marginBottom: 16,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.card,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  joinDate: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.card,
    borderRadius: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
  },
  progressCard: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
  },
  progressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  progressContent: {
    flex: 1,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  progressValue: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  menuContainer: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.text,
    marginLeft: 12,
  },
  menuItemArrow: {
    fontSize: 20,
    color: Colors.textSecondary,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(220, 53, 69, 0.1)',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.error,
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    padding: 24,
  },
  footerText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
});