import React from 'react';
import { StyleSheet, ScrollView, Text, View, Platform } from 'react-native';
import Colors from '@/constants/colors';

interface TextContentProps {
  content: string;
}

export default function TextContent({ content }: TextContentProps) {
  // Simple markdown-like parsing for basic formatting
  const parseContent = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let currentIndex = 0;

    lines.forEach((line, index) => {
      const key = `line-${index}`;
      
      if (line.startsWith('# ')) {
        // H1 heading
        elements.push(
          <Text key={key} style={styles.h1}>
            {line.substring(2)}
          </Text>
        );
      } else if (line.startsWith('## ')) {
        // H2 heading
        elements.push(
          <Text key={key} style={styles.h2}>
            {line.substring(3)}
          </Text>
        );
      } else if (line.startsWith('### ')) {
        // H3 heading
        elements.push(
          <Text key={key} style={styles.h3}>
            {line.substring(4)}
          </Text>
        );
      } else if (line.startsWith('- ')) {
        // Bullet point
        elements.push(
          <View key={key} style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{line.substring(2)}</Text>
          </View>
        );
      } else if (line.startsWith('```')) {
        // Code block (simplified)
        elements.push(
          <View key={key} style={styles.codeBlock}>
            <Text style={styles.codeText}>{line}</Text>
          </View>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        // Bold text
        elements.push(
          <Text key={key} style={styles.bold}>
            {line.substring(2, line.length - 2)}
          </Text>
        );
      } else if (line.trim() === '') {
        // Empty line for spacing
        elements.push(<View key={key} style={styles.spacing} />);
      } else {
        // Regular paragraph
        if (line.trim()) {
          elements.push(
            <Text key={key} style={styles.paragraph}>
              {line}
            </Text>
          );
        }
      }
    });

    return elements;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {parseContent(content)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
  },
  h1: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
    marginTop: 8,
  },
  h2: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
    marginTop: 16,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
    marginTop: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    marginBottom: 12,
  },
  bulletContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 16,
  },
  bullet: {
    fontSize: 16,
    color: Colors.primary,
    marginRight: 8,
    fontWeight: '700',
  },
  bulletText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    flex: 1,
  },
  bold: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },
  codeBlock: {
    backgroundColor: Colors.card,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  codeText: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: Colors.text,
  },
  spacing: {
    height: 8,
  },
});