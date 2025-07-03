import { Course, Category } from '@/types/course';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Design',
    icon: 'palette',
  },
  {
    id: '2',
    name: 'Development',
    icon: 'code',
  },
  {
    id: '3',
    name: 'Business',
    icon: 'briefcase',
  },
  {
    id: '4',
    name: 'Marketing',
    icon: 'trending-up',
  },
  {
    id: '5',
    name: 'Photography',
    icon: 'camera',
  },
  {
    id: '6',
    name: 'Music',
    icon: 'music',
  },
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the core principles of creating beautiful and functional user interfaces. This course covers everything from color theory to usability testing.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: '1',
    duration: 480, // 8 hours
    modules: [
      {
        id: 'm1',
        title: 'Introduction to UI/UX',
        lessons: [
          { 
            id: 'l1', 
            title: 'What is UI/UX Design?', 
            duration: 15,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              }
            }
          },
          { 
            id: 'l2', 
            title: 'The Design Process', 
            duration: 20,
            content: {
              type: 'text',
              data: {
                content: `# The Design Process

The design process is a systematic approach to solving design problems. It typically involves several key phases:

## 1. Research and Discovery
- Understanding user needs
- Market research
- Competitive analysis
- Stakeholder interviews

## 2. Define and Ideate
- Problem definition
- User personas
- Brainstorming solutions
- Concept development

## 3. Design and Prototype
- Wireframing
- Visual design
- Interactive prototypes
- Design systems

## 4. Test and Iterate
- User testing
- Feedback collection
- Design refinement
- Implementation

## Key Principles
- **User-centered design**: Always keep the user at the center of your decisions
- **Iterative approach**: Design is never finished, always improving
- **Collaboration**: Work closely with stakeholders and team members
- **Data-driven decisions**: Use research and testing to guide your choices

Remember, the design process is not always linear. You may need to go back and forth between phases as you learn more about your users and their needs.`
              }
            }
          },
          { 
            id: 'l3', 
            title: 'User Research Basics', 
            duration: 25,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'What is the primary goal of user research?',
                    options: [
                      'To prove our design assumptions are correct',
                      'To understand user needs and behaviors',
                      'To make the design look better',
                      'To reduce development time'
                    ],
                    correctAnswer: 1,
                    explanation: 'User research helps us understand what users actually need and how they behave, rather than making assumptions.'
                  },
                  {
                    id: 'q2',
                    question: 'Which of these is NOT a common user research method?',
                    options: [
                      'User interviews',
                      'Surveys',
                      'A/B testing',
                      'Code reviews'
                    ],
                    correctAnswer: 3,
                    explanation: 'Code reviews are a development practice, not a user research method.'
                  }
                ]
              }
            }
          },
        ],
      },
      {
        id: 'm2',
        title: 'Design Principles',
        lessons: [
          { 
            id: 'l4', 
            title: 'Color Theory', 
            duration: 30,
            content: {
              type: 'pdf',
              data: {
                pdfUrl: 'https://www.adobe.com/content/dam/acom/en/creativecloud/design/discover/color-theory/pdfs/color-theory-guide.pdf'
              }
            }
          },
          { 
            id: 'l5', 
            title: 'Typography', 
            duration: 25,
            content: {
              type: 'text',
              data: {
                content: `# Typography in Design

Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.

## Key Typography Concepts

### 1. Typeface vs Font
- **Typeface**: The design of the letters (e.g., Helvetica, Times New Roman)
- **Font**: A specific size and style of a typeface (e.g., Helvetica Bold 12pt)

### 2. Typography Hierarchy
- **Primary**: Main headlines and titles
- **Secondary**: Subheadings and section titles
- **Body**: Main content text
- **Caption**: Small descriptive text

### 3. Important Properties
- **Font Size**: Measured in points (pt) or pixels (px)
- **Line Height**: Space between lines of text
- **Letter Spacing**: Space between individual characters
- **Font Weight**: Thickness of the characters (light, regular, bold)

### 4. Best Practices
- Use no more than 2-3 typefaces in a design
- Ensure sufficient contrast for readability
- Consider the context and audience
- Test on different devices and screen sizes

### 5. Web Typography
- Use web-safe fonts or web fonts
- Consider loading performance
- Ensure fallback fonts are specified
- Test across different browsers`
              }
            }
          },
          { 
            id: 'l6', 
            title: 'Layout and Composition', 
            duration: 35,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              }
            }
          },
        ],
      },
      {
        id: 'm3',
        title: 'Prototyping',
        lessons: [
          { 
            id: 'l7', 
            title: 'Low-fidelity Prototypes', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# Low-Fidelity Prototypes

Low-fidelity prototypes are simple, often hand-drawn representations of your design ideas. They focus on functionality and user flow rather than visual details.

## Benefits of Low-Fi Prototypes

### 1. Speed and Cost
- Quick to create and modify
- Inexpensive materials (paper, pen)
- Fast iteration cycles

### 2. Focus on Functionality
- Emphasizes user flow and interaction
- Avoids getting caught up in visual details
- Encourages big-picture thinking

### 3. Collaboration
- Easy for anyone to understand
- Encourages team participation
- Non-intimidating for stakeholders

## Types of Low-Fi Prototypes

### Paper Prototypes
- Hand-drawn screens on paper
- Use sticky notes for interactive elements
- Great for early concept validation

### Digital Wireframes
- Simple black and white layouts
- Basic shapes and placeholder text
- Tools: Balsamiq, Whimsical, or even PowerPoint

### Storyboards
- Sequential illustrations showing user journey
- Helps visualize the complete experience
- Useful for presenting to stakeholders

## Best Practices
- Keep it simple and rough
- Focus on layout and flow, not aesthetics
- Test early and often
- Don't spend too much time on details
- Use real content when possible`
              }
            }
          },
          { 
            id: 'l8', 
            title: 'High-fidelity Prototypes', 
            duration: 40,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
              }
            }
          },
          { 
            id: 'l9', 
            title: 'User Testing', 
            duration: 35,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'How many users do you typically need for effective usability testing?',
                    options: [
                      '3-5 users',
                      '10-15 users',
                      '20-30 users',
                      '50+ users'
                    ],
                    correctAnswer: 0,
                    explanation: 'Research shows that 5 users can identify about 85% of usability problems, making it the most cost-effective approach.'
                  },
                  {
                    id: 'q2',
                    question: 'What should you do during a user testing session?',
                    options: [
                      'Guide users to the correct solution',
                      'Observe and take notes without interfering',
                      'Explain how the interface should work',
                      'Ask leading questions'
                    ],
                    correctAnswer: 1,
                    explanation: 'The goal is to observe natural user behavior, so minimal interference provides the most valuable insights.'
                  }
                ]
              }
            }
          },
        ],
      },
    ],
    instructor: {
      id: 'i1',
      name: 'Sarah Johnson',
      title: 'Senior UX Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Sarah has over 10 years of experience in UI/UX design and has worked with companies like Google and Airbnb.',
    },
    rating: 4.8,
    studentsCount: 1245,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'React Native for Beginners',
    description: 'Build cross-platform mobile apps with React Native. This course will teach you how to create beautiful, responsive mobile applications that work on both iOS and Android.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: '2',
    duration: 600, // 10 hours
    modules: [
      {
        id: 'm1',
        title: 'Getting Started with React Native',
        lessons: [
          { 
            id: 'l1', 
            title: 'Introduction to React Native', 
            duration: 20,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              }
            }
          },
          { 
            id: 'l2', 
            title: 'Setting Up Your Environment', 
            duration: 25,
            content: {
              type: 'text',
              data: {
                content: `# Setting Up React Native Development Environment

This guide will help you set up your development environment for React Native.

## Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git version control

## Installation Steps

### 1. Install React Native CLI
\`\`\`bash
npm install -g react-native-cli
\`\`\`

### 2. Install Expo CLI (Recommended for beginners)
\`\`\`bash
npm install -g expo-cli
\`\`\`

### 3. Create Your First Project
\`\`\`bash
expo init MyFirstApp
cd MyFirstApp
expo start
\`\`\`

## Development Tools

### Code Editor
- **VS Code** (Recommended)
- **WebStorm**
- **Atom**

### Useful VS Code Extensions
- React Native Tools
- ES7+ React/Redux/React-Native snippets
- Prettier
- ESLint

### Device Testing
- **iOS Simulator** (Mac only)
- **Android Emulator**
- **Expo Go app** (for physical devices)

## Project Structure
\`\`\`
MyFirstApp/
├── App.js
├── package.json
├── node_modules/
├── assets/
│   ├── images/
│   └── fonts/
└── components/
\`\`\`

## Next Steps
Once your environment is set up, you can start building your first React Native app!`
              }
            }
          },
          { 
            id: 'l3', 
            title: 'Your First React Native App', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# Building Your First React Native App

Let's create a simple "Hello World" app to get you started with React Native development.

## Basic App Structure

\`\`\`jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native!</Text>
      <Text style={styles.subtitle}>Welcome to mobile development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
\`\`\`

## Key Concepts

### 1. Components
React Native uses components just like React for web. Everything is a component!

### 2. JSX
You write your UI using JSX, which looks like HTML but is actually JavaScript.

### 3. Styling
Styles are written in JavaScript objects, similar to CSS but with camelCase properties.

### 4. Core Components
- **View**: Like a div in HTML
- **Text**: For displaying text
- **Image**: For displaying images
- **ScrollView**: For scrollable content

## Running Your App

### Using Expo
\`\`\`bash
expo start
\`\`\`

### Using React Native CLI
\`\`\`bash
npx react-native run-ios
npx react-native run-android
\`\`\`

## Debugging
- Use React Native Debugger
- Enable remote debugging in development menu
- Use console.log() for simple debugging

Congratulations! You've built your first React Native app. In the next lessons, we'll explore more components and features.`
              }
            }
          },
        ],
      },
      {
        id: 'm2',
        title: 'Core Components',
        lessons: [
          { 
            id: 'l4', 
            title: 'View, Text, and Image', 
            duration: 35,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              }
            }
          },
          { 
            id: 'l5', 
            title: 'ScrollView and FlatList', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# ScrollView and FlatList in React Native

Learn how to handle scrollable content and lists in React Native.

## ScrollView

ScrollView is a generic scrolling container that can contain multiple components and views.

### Basic Usage
\`\`\`jsx
import { ScrollView, Text, View } from 'react-native';

function MyScrollView() {
  return (
    <ScrollView>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
      {/* More items... */}
    </ScrollView>
  );
}
\`\`\`

### ScrollView Props
- **horizontal**: Enable horizontal scrolling
- **showsVerticalScrollIndicator**: Show/hide scroll indicator
- **contentContainerStyle**: Style the scrollable content

## FlatList

FlatList is optimized for rendering large lists of data efficiently.

### Basic Usage
\`\`\`jsx
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

function MyFlatList() {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
\`\`\`

### FlatList Props
- **data**: Array of data to render
- **renderItem**: Function to render each item
- **keyExtractor**: Function to extract unique key for each item
- **horizontal**: Enable horizontal scrolling
- **numColumns**: Number of columns for grid layout

## When to Use Which?

### Use ScrollView when:
- Small amount of content
- Mixed content types
- Simple scrolling needs

### Use FlatList when:
- Large datasets
- Performance is important
- Uniform list items
- Need pull-to-refresh or infinite scroll

## Performance Tips
- Use FlatList for large lists
- Implement getItemLayout for better performance
- Use removeClippedSubviews for very long lists
- Optimize your renderItem function`
              }
            }
          },
          { 
            id: 'l6', 
            title: 'TextInput and Button', 
            duration: 25,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'Which component is best for rendering large lists in React Native?',
                    options: [
                      'ScrollView',
                      'FlatList',
                      'View',
                      'Text'
                    ],
                    correctAnswer: 1,
                    explanation: 'FlatList is optimized for large lists and provides better performance through virtualization.'
                  },
                  {
                    id: 'q2',
                    question: 'What prop is required for FlatList to work properly?',
                    options: [
                      'horizontal',
                      'numColumns',
                      'data and renderItem',
                      'showsVerticalScrollIndicator'
                    ],
                    correctAnswer: 2,
                    explanation: 'FlatList requires both data (the array to render) and renderItem (function to render each item).'
                  }
                ]
              }
            }
          },
        ],
      },
      {
        id: 'm3',
        title: 'Navigation and State Management',
        lessons: [
          { 
            id: 'l7', 
            title: 'React Navigation', 
            duration: 40,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
              }
            }
          },
          { 
            id: 'l8', 
            title: 'Managing State with Hooks', 
            duration: 35,
            content: {
              type: 'text',
              data: {
                content: `# Managing State with React Hooks

Learn how to manage state in React Native using React Hooks.

## useState Hook

The most basic hook for managing component state.

### Basic Usage
\`\`\`jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button 
        title="Increment" 
        onPress={() => setCount(count + 1)} 
      />
    </View>
  );
}
\`\`\`

## useEffect Hook

For handling side effects like API calls, subscriptions, etc.

### Basic Usage
\`\`\`jsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId)
      .then(userData => {
        setUser(userData);
        setLoading(false);
      });
  }, [userId]); // Dependency array

  if (loading) return <Text>Loading...</Text>;
  
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
}
\`\`\`

## Custom Hooks

Create reusable stateful logic.

### Example: useCounter
\`\`\`jsx
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Usage
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
}
\`\`\`

## Best Practices

### 1. Keep State Local
Only lift state up when multiple components need it.

### 2. Use Multiple useState
Split unrelated state into separate useState calls.

### 3. Optimize useEffect
Always include dependencies in the dependency array.

### 4. Custom Hooks for Reusability
Extract complex stateful logic into custom hooks.

## Common Patterns

### Form Handling
\`\`\`jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({ email, password });
  };

  return (
    <View>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput 
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}
\`\`\``
              }
            }
          },
          { 
            id: 'l9', 
            title: 'Using Context API', 
            duration: 30,
            content: {
              type: 'pdf',
              data: {
                pdfUrl: 'https://reactjs.org/docs/context.html'
              }
            }
          },
        ],
      },
    ],
    instructor: {
      id: 'i2',
      name: 'Michael Chen',
      title: 'Mobile Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Michael is a senior mobile developer with expertise in React Native, iOS, and Android development.',
    },
    rating: 4.7,
    studentsCount: 983,
    isFeatured: true,
  },
  // Add similar content structure for other courses...
  {
    id: '3',
    title: 'Digital Marketing Masterclass',
    description: 'Learn how to create effective digital marketing campaigns across multiple platforms. This comprehensive course covers SEO, social media, email marketing, and more.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: '4',
    duration: 540, // 9 hours
    modules: [
      {
        id: 'm1',
        title: 'Digital Marketing Fundamentals',
        lessons: [
          { 
            id: 'l1', 
            title: 'Introduction to Digital Marketing', 
            duration: 25,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              }
            }
          },
          { 
            id: 'l2', 
            title: 'Building a Marketing Strategy', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# Building a Digital Marketing Strategy

A comprehensive guide to creating an effective digital marketing strategy.

## 1. Define Your Goals
- Brand awareness
- Lead generation
- Sales conversion
- Customer retention

## 2. Know Your Audience
- Demographics
- Psychographics
- Online behavior
- Pain points and needs

## 3. Choose Your Channels
- Social media platforms
- Search engines
- Email marketing
- Content marketing
- Paid advertising

## 4. Create Compelling Content
- Value-driven content
- Consistent brand voice
- Visual storytelling
- User-generated content

## 5. Measure and Optimize
- Set KPIs
- Track performance
- A/B test campaigns
- Continuous improvement`
              }
            }
          },
          { 
            id: 'l3', 
            title: 'Understanding Your Audience', 
            duration: 25,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'What is the first step in building a digital marketing strategy?',
                    options: [
                      'Choose your channels',
                      'Define your goals',
                      'Create content',
                      'Set your budget'
                    ],
                    correctAnswer: 1,
                    explanation: 'Defining clear goals is essential before choosing channels or creating content.'
                  }
                ]
              }
            }
          },
        ],
      },
      {
        id: 'm2',
        title: 'Search Engine Optimization',
        lessons: [
          { 
            id: 'l4', 
            title: 'SEO Basics', 
            duration: 35,
            content: {
              type: 'text',
              data: {
                content: `# SEO Basics: Search Engine Optimization

Learn the fundamentals of SEO to improve your website's visibility in search results.

## What is SEO?

Search Engine Optimization (SEO) is the practice of optimizing your website to rank higher in search engine results pages (SERPs).

## How Search Engines Work

### 1. Crawling
Search engines use bots to discover and scan web pages.

### 2. Indexing
Pages are analyzed and stored in the search engine's database.

### 3. Ranking
When users search, the engine ranks pages based on relevance and authority.

## Key SEO Factors

### On-Page SEO
- **Title Tags**: Descriptive, keyword-rich titles
- **Meta Descriptions**: Compelling summaries of page content
- **Header Tags**: Proper use of H1, H2, H3 tags
- **URL Structure**: Clean, descriptive URLs
- **Internal Linking**: Connecting related pages on your site

### Technical SEO
- **Page Speed**: Fast loading times
- **Mobile-Friendliness**: Responsive design
- **SSL Certificate**: Secure HTTPS connection
- **XML Sitemap**: Help search engines understand your site structure

### Off-Page SEO
- **Backlinks**: Links from other reputable websites
- **Social Signals**: Social media engagement
- **Local Citations**: Mentions of your business online

## SEO Best Practices

### Content Quality
- Create valuable, original content
- Use keywords naturally
- Keep content fresh and updated
- Answer user questions

### User Experience
- Easy navigation
- Fast loading times
- Mobile optimization
- Clear call-to-actions

### Keyword Research
- Use tools like Google Keyword Planner
- Focus on long-tail keywords
- Consider search intent
- Analyze competitor keywords

## Common SEO Mistakes to Avoid
- Keyword stuffing
- Buying low-quality backlinks
- Ignoring mobile optimization
- Duplicate content
- Slow page loading times

Remember: SEO is a long-term strategy. Results take time, but the investment is worth it for sustainable organic traffic growth.`
              }
            }
          },
          { 
            id: 'l5', 
            title: 'Keyword Research', 
            duration: 30,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              }
            }
          },
          { 
            id: 'l6', 
            title: 'On-Page and Off-Page SEO', 
            duration: 40,
            content: {
              type: 'pdf',
              data: {
                pdfUrl: 'https://moz.com/beginners-guide-to-seo'
              }
            }
          },
        ],
      },
      {
        id: 'm3',
        title: 'Social Media Marketing',
        lessons: [
          { 
            id: 'l7', 
            title: 'Social Media Strategy', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# Social Media Marketing Strategy

Develop an effective social media strategy to grow your brand and engage your audience.

## Platform Overview

### Facebook
- **Best for**: Brand awareness, community building
- **Audience**: Broad demographics, 25-54 age group
- **Content types**: Posts, videos, stories, live streams

### Instagram
- **Best for**: Visual storytelling, younger demographics
- **Audience**: 18-34 age group, visual-focused users
- **Content types**: Photos, stories, reels, IGTV

### Twitter
- **Best for**: Real-time updates, customer service
- **Audience**: News-conscious, professional users
- **Content types**: Tweets, threads, spaces

### LinkedIn
- **Best for**: B2B marketing, professional networking
- **Audience**: Business professionals, decision makers
- **Content types**: Articles, posts, videos, events

### TikTok
- **Best for**: Creative content, Gen Z audience
- **Audience**: 16-24 age group, entertainment-focused
- **Content types**: Short videos, challenges, trends

## Content Strategy

### Content Pillars
1. **Educational**: How-to guides, tips, tutorials
2. **Entertaining**: Memes, behind-the-scenes, fun facts
3. **Promotional**: Product features, sales, announcements
4. **User-Generated**: Customer stories, reviews, testimonials

### Content Calendar
- Plan content in advance
- Maintain consistent posting schedule
- Balance different content types
- Align with marketing campaigns

## Engagement Strategies

### Community Building
- Respond to comments promptly
- Ask questions to encourage interaction
- Share user-generated content
- Host live Q&A sessions

### Hashtag Strategy
- Research relevant hashtags
- Mix popular and niche hashtags
- Create branded hashtags
- Monitor hashtag performance

## Analytics and Optimization

### Key Metrics
- **Reach**: Number of unique users who saw your content
- **Engagement**: Likes, comments, shares, saves
- **Click-through rate**: Clicks to your website
- **Conversion rate**: Actions taken on your website

### Tools for Analytics
- Native platform analytics
- Google Analytics
- Hootsuite Analytics
- Sprout Social

## Best Practices
- Post consistently
- Use high-quality visuals
- Write compelling captions
- Engage with your audience
- Stay current with trends
- Monitor your brand mentions
- Collaborate with influencers`
              }
            }
          },
          { 
            id: 'l8', 
            title: 'Content Creation', 
            duration: 35,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
              }
            }
          },
          { 
            id: 'l9', 
            title: 'Measuring Social Media Success', 
            duration: 25,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'Which social media platform is best for B2B marketing?',
                    options: [
                      'TikTok',
                      'Instagram',
                      'LinkedIn',
                      'Snapchat'
                    ],
                    correctAnswer: 2,
                    explanation: 'LinkedIn is specifically designed for professional networking and B2B marketing.'
                  },
                  {
                    id: 'q2',
                    question: 'What is the recommended ratio for promotional vs. non-promotional content?',
                    options: [
                      '80% promotional, 20% non-promotional',
                      '50% promotional, 50% non-promotional',
                      '20% promotional, 80% non-promotional',
                      '100% promotional'
                    ],
                    correctAnswer: 2,
                    explanation: 'The 80/20 rule suggests 80% valuable content and 20% promotional content for better engagement.'
                  }
                ]
              }
            }
          },
        ],
      },
    ],
    instructor: {
      id: 'i3',
      name: 'Emily Rodriguez',
      title: 'Digital Marketing Specialist',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Emily has helped over 100 businesses improve their online presence through effective digital marketing strategies.',
    },
    rating: 4.6,
    studentsCount: 1578,
    isFeatured: false,
  },
  // Continue with other courses with similar content structure...
  {
    id: '4',
    title: 'Photography Essentials',
    description: 'Master the art of photography with this comprehensive course. Learn about camera settings, composition, lighting, and post-processing techniques.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: '5',
    duration: 420, // 7 hours
    modules: [
      {
        id: 'm1',
        title: 'Camera Basics',
        lessons: [
          { 
            id: 'l1', 
            title: 'Understanding Your Camera', 
            duration: 25,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              }
            }
          },
          { 
            id: 'l2', 
            title: 'Exposure Triangle', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# The Exposure Triangle

Understanding the relationship between aperture, shutter speed, and ISO.

## The Three Elements

### 1. Aperture (f-stop)
- Controls depth of field
- Lower f-numbers = wider aperture = more light
- Higher f-numbers = narrower aperture = less light

### 2. Shutter Speed
- Controls motion blur
- Faster speeds freeze motion
- Slower speeds create motion blur

### 3. ISO
- Controls sensor sensitivity
- Lower ISO = less noise, better quality
- Higher ISO = more noise, but usable in low light

## How They Work Together
Each element affects exposure and creative control. Changing one requires adjusting the others to maintain proper exposure.`
              }
            }
          },
          { 
            id: 'l3', 
            title: 'Focus and Depth of Field', 
            duration: 25,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'What creates a shallow depth of field?',
                    options: [
                      'Small aperture (high f-number)',
                      'Large aperture (low f-number)',
                      'Fast shutter speed',
                      'High ISO'
                    ],
                    correctAnswer: 1,
                    explanation: 'A large aperture (low f-number like f/1.4) creates a shallow depth of field with blurred background.'
                  }
                ]
              }
            }
          },
        ],
      },
      {
        id: 'm2',
        title: 'Composition',
        lessons: [
          { 
            id: 'l4', 
            title: 'Rule of Thirds', 
            duration: 20,
            content: {
              type: 'text',
              data: {
                content: `# Rule of Thirds in Photography

One of the most fundamental composition techniques in photography.

## What is the Rule of Thirds?

The rule of thirds divides your frame into nine equal sections with two horizontal and two vertical lines. The idea is to place important elements along these lines or at their intersections.

## How to Apply It

### Subject Placement
- Place your main subject along one of the vertical lines
- Position horizons along the upper or lower horizontal line
- Use intersection points for focal points

### Examples
- **Portraits**: Place eyes along the upper horizontal line
- **Landscapes**: Position horizon on upper or lower third
- **Architecture**: Align vertical elements with vertical lines

## When to Break the Rule

The rule of thirds is a guideline, not a law. Break it when:
- Creating symmetrical compositions
- Emphasizing patterns or textures
- Making artistic statements
- The subject demands center placement

## Practice Tips
- Enable grid lines on your camera
- Study compositions that work
- Experiment with different placements
- Trust your artistic vision`
              }
            }
          },
          { 
            id: 'l5', 
            title: 'Leading Lines', 
            duration: 15,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              }
            }
          },
          { 
            id: 'l6', 
            title: 'Framing and Perspective', 
            duration: 25,
            content: {
              type: 'pdf',
              data: {
                pdfUrl: 'https://www.adobe.com/creativecloud/photography/discover/photography-composition.html'
              }
            }
          },
        ],
      },
      {
        id: 'm3',
        title: 'Lighting',
        lessons: [
          { 
            id: 'l7', 
            title: 'Natural Light', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# Working with Natural Light

Master the art of using natural light for stunning photography.

## Types of Natural Light

### Golden Hour
- **When**: 1 hour after sunrise, 1 hour before sunset
- **Quality**: Warm, soft, directional
- **Best for**: Portraits, landscapes, architecture

### Blue Hour
- **When**: 30 minutes after sunset, 30 minutes before sunrise
- **Quality**: Even, blue-tinted light
- **Best for**: Cityscapes, architecture with artificial lights

### Overcast Light
- **When**: Cloudy days
- **Quality**: Soft, even, diffused
- **Best for**: Portraits, macro photography

### Harsh Midday Sun
- **When**: 10 AM - 2 PM
- **Quality**: Hard, direct, high contrast
- **Best for**: Architecture, shadows, black and white

## Direction of Light

### Front Lighting
- Light source behind photographer
- Even illumination
- Good for documentation

### Side Lighting
- Light source to the side
- Creates depth and dimension
- Excellent for portraits

### Back Lighting
- Light source behind subject
- Creates silhouettes or rim lighting
- Dramatic and artistic

## Modifying Natural Light

### Reflectors
- Bounce light back onto subject
- Fill in shadows
- Available in different colors

### Diffusers
- Soften harsh light
- Create even illumination
- Reduce contrast

### Shade
- Use buildings, trees, or overhangs
- Create soft, even light
- Avoid harsh shadows

## Tips for Better Natural Light Photography

1. **Plan your shoots** around good light
2. **Use weather apps** to predict conditions
3. **Scout locations** at different times
4. **Bring reflectors** and diffusers
5. **Embrace different moods** each light creates
6. **Practice reading light** quality and direction
7. **Don't be afraid** of challenging conditions`
              }
            }
          },
          { 
            id: 'l8', 
            title: 'Artificial Lighting', 
            duration: 35,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
              }
            }
          },
          { 
            id: 'l9', 
            title: 'Creative Lighting Techniques', 
            duration: 40,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'What is the golden hour in photography?',
                    options: [
                      'The first hour of shooting',
                      'When the light is golden colored',
                      '1 hour after sunrise and 1 hour before sunset',
                      'The most expensive hour to hire a photographer'
                    ],
                    correctAnswer: 2,
                    explanation: 'Golden hour refers to the period shortly after sunrise or before sunset when the light is soft and warm.'
                  },
                  {
                    id: 'q2',
                    question: 'What type of lighting creates the most dramatic portraits?',
                    options: [
                      'Front lighting',
                      'Side lighting',
                      'Top lighting',
                      'Even lighting'
                    ],
                    correctAnswer: 1,
                    explanation: 'Side lighting creates depth, dimension, and dramatic shadows that add character to portraits.'
                  }
                ]
              }
            }
          },
        ],
      },
    ],
    instructor: {
      id: 'i4',
      name: 'David Wilson',
      title: 'Professional Photographer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'David is an award-winning photographer with over 15 years of experience in portrait, landscape, and commercial photography.',
    },
    rating: 4.9,
    studentsCount: 2145,
    isFeatured: true,
  },
  {
    id: '5',
    title: 'Business Strategy and Management',
    description: 'Learn essential business management skills and strategic thinking. This course covers leadership, decision-making, team management, and business planning.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: '3',
    duration: 510, // 8.5 hours
    modules: [
      {
        id: 'm1',
        title: 'Business Fundamentals',
        lessons: [
          { 
            id: 'l1', 
            title: 'Business Models and Structures', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# Business Models and Structures

Understanding different ways to organize and operate a business.

## Business Models

### 1. B2B (Business to Business)
- Selling products/services to other businesses
- Examples: Software companies, consulting firms
- Characteristics: Longer sales cycles, higher transaction values

### 2. B2C (Business to Consumer)
- Selling directly to end consumers
- Examples: Retail stores, restaurants
- Characteristics: Shorter sales cycles, emotional purchasing

### 3. B2B2C (Business to Business to Consumer)
- Selling through other businesses to reach consumers
- Examples: Wholesale manufacturers
- Characteristics: Indirect customer relationship

### 4. Subscription Model
- Recurring revenue from ongoing services
- Examples: Netflix, SaaS companies
- Benefits: Predictable revenue, customer retention

### 5. Marketplace Model
- Platform connecting buyers and sellers
- Examples: Amazon, Uber, Airbnb
- Revenue: Commission, listing fees, advertising

## Business Structures

### Sole Proprietorship
- **Pros**: Simple, complete control, tax benefits
- **Cons**: Personal liability, limited funding options

### Partnership
- **Pros**: Shared resources, complementary skills
- **Cons**: Shared liability, potential conflicts

### Corporation
- **Pros**: Limited liability, easier to raise capital
- **Cons**: Double taxation, complex regulations

### LLC (Limited Liability Company)
- **Pros**: Limited liability, tax flexibility
- **Cons**: Varies by state, limited life

## Choosing the Right Model

Consider these factors:
- Target market
- Revenue goals
- Risk tolerance
- Growth plans
- Industry requirements
- Legal implications

## Key Success Factors

1. **Clear Value Proposition**: What unique value do you provide?
2. **Market Fit**: Does your solution solve a real problem?
3. **Scalability**: Can the business grow efficiently?
4. **Competitive Advantage**: What sets you apart?
5. **Financial Viability**: Can it generate sustainable profits?`
              }
            }
          },
          { 
            id: 'l2', 
            title: 'Market Analysis', 
            duration: 35,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              }
            }
          },
          { 
            id: 'l3', 
            title: 'Competitive Advantage', 
            duration: 25,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'What is a key characteristic of B2B business models?',
                    options: [
                      'Shorter sales cycles',
                      'Emotional purchasing decisions',
                      'Longer sales cycles and higher transaction values',
                      'Direct consumer marketing'
                    ],
                    correctAnswer: 2,
                    explanation: 'B2B models typically involve longer decision-making processes and higher-value transactions.'
                  }
                ]
              }
            }
          },
        ],
      },
      {
        id: 'm2',
        title: 'Leadership and Management',
        lessons: [
          { 
            id: 'l4', 
            title: 'Leadership Styles', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# Leadership Styles and When to Use Them

Understanding different leadership approaches and their applications.

## Autocratic Leadership
- **Description**: Leader makes decisions unilaterally
- **When to use**: Crisis situations, inexperienced teams
- **Pros**: Quick decisions, clear direction
- **Cons**: Low team morale, limited creativity

## Democratic Leadership
- **Description**: Team participates in decision-making
- **When to use**: Complex problems, experienced teams
- **Pros**: High engagement, better solutions
- **Cons**: Slower decisions, potential conflicts

## Laissez-faire Leadership
- **Description**: Minimal interference, team autonomy
- **When to use**: Highly skilled, motivated teams
- **Pros**: High creativity, job satisfaction
- **Cons**: Lack of direction, potential chaos

## Transformational Leadership
- **Description**: Inspiring and motivating change
- **When to use**: Organizational transformation
- **Pros**: Innovation, high performance
- **Cons**: May overlook details

## Servant Leadership
- **Description**: Focus on serving team members
- **When to use**: Building long-term relationships
- **Pros**: High trust, employee development
- **Cons**: May appear weak in tough situations

## Situational Leadership
- **Description**: Adapting style to situation and team
- **When to use**: Varied team capabilities
- **Pros**: Flexible, effective
- **Cons**: Requires high emotional intelligence

## Key Leadership Principles

### 1. Lead by Example
- Model the behavior you expect
- Demonstrate your values consistently
- Take responsibility for mistakes

### 2. Communicate Effectively
- Be clear and transparent
- Listen actively to your team
- Provide regular feedback

### 3. Develop Others
- Invest in team member growth
- Delegate meaningful responsibilities
- Provide mentoring and coaching

### 4. Make Tough Decisions
- Gather information quickly
- Consider multiple perspectives
- Take decisive action when needed

### 5. Build Trust
- Keep your commitments
- Be honest and transparent
- Show vulnerability when appropriate

## Developing Your Leadership Style

1. **Self-Assessment**: Understand your natural tendencies
2. **Feedback**: Seek input from team members
3. **Practice**: Try different approaches
4. **Reflection**: Learn from successes and failures
5. **Continuous Learning**: Study great leaders
6. **Mentoring**: Find mentors and mentor others`
              }
            }
          },
          { 
            id: 'l5', 
            title: 'Team Building', 
            duration: 25,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              }
            }
          },
          { 
            id: 'l6', 
            title: 'Conflict Resolution', 
            duration: 35,
            content: {
              type: 'pdf',
              data: {
                pdfUrl: 'https://www.harvard.edu/conflict-resolution-guide'
              }
            }
          },
        ],
      },
      {
        id: 'm3',
        title: 'Strategic Planning',
        lessons: [
          { 
            id: 'l7', 
            title: 'Vision and Mission', 
            duration: 20,
            content: {
              type: 'text',
              data: {
                content: `# Vision and Mission Statements

Creating compelling vision and mission statements that guide your organization.

## Vision Statement

### What is a Vision Statement?
A vision statement describes what your organization aspires to become in the future. It's inspirational and forward-looking.

### Characteristics of Good Vision Statements:
- **Inspirational**: Motivates and energizes people
- **Clear**: Easy to understand and remember
- **Future-focused**: Describes desired future state
- **Ambitious**: Challenging but achievable
- **Concise**: Usually one to two sentences

### Examples:
- **Tesla**: "To accelerate the world's transition to sustainable energy"
- **Microsoft**: "To empower every person and every organization on the planet to achieve more"
- **Disney**: "To make people happy"

## Mission Statement

### What is a Mission Statement?
A mission statement defines your organization's purpose, describing what you do, who you serve, and how you do it.

### Characteristics of Good Mission Statements:
- **Purpose-driven**: Explains why you exist
- **Specific**: Clearly defines what you do
- **Action-oriented**: Uses active language
- **Stakeholder-focused**: Addresses key audiences
- **Differentiating**: Shows what makes you unique

### Examples:
- **Google**: "To organize the world's information and make it universally accessible and useful"
- **Starbucks**: "To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time"
- **Nike**: "To bring inspiration and innovation to every athlete in the world"

## Creating Your Vision and Mission

### Vision Statement Process:
1. **Imagine the future**: What does success look like in 10-20 years?
2. **Consider impact**: How will the world be different?
3. **Think big**: Don't limit yourself to current capabilities
4. **Make it emotional**: Connect with hearts, not just minds
5. **Test it**: Does it inspire and motivate?

### Mission Statement Process:
1. **Define purpose**: Why does your organization exist?
2. **Identify stakeholders**: Who do you serve?
3. **Describe activities**: What do you do?
4. **Highlight uniqueness**: What sets you apart?
5. **Keep it practical**: Make it actionable

## Using Vision and Mission

### Strategic Alignment
- Guide decision-making
- Set priorities
- Allocate resources
- Measure progress

### Communication
- Internal alignment
- External messaging
- Brand positioning
- Stakeholder engagement

### Performance Management
- Goal setting
- Performance evaluation
- Recognition programs
- Cultural development

## Common Mistakes to Avoid

1. **Too generic**: Could apply to any organization
2. **Too complex**: Difficult to understand or remember
3. **Unrealistic**: Impossible to achieve
4. **Inward-focused**: Only about the organization, not stakeholders
5. **Static**: Never updated or evolved
6. **Ignored**: Created but not used in practice

Remember: Vision and mission statements are living documents that should guide daily decisions and long-term strategy.`
              }
            }
          },
          { 
            id: 'l8', 
            title: 'Goal Setting and KPIs', 
            duration: 30,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
              }
            }
          },
          { 
            id: 'l9', 
            title: 'Implementation and Evaluation', 
            duration: 35,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'What is the main difference between vision and mission statements?',
                    options: [
                      'Vision is shorter than mission',
                      'Vision describes the future, mission describes the present purpose',
                      'Vision is for employees, mission is for customers',
                      'There is no difference'
                    ],
                    correctAnswer: 1,
                    explanation: 'Vision statements describe what you aspire to become in the future, while mission statements define your current purpose and what you do.'
                  },
                  {
                    id: 'q2',
                    question: 'A good vision statement should be:',
                    options: [
                      'Detailed and specific',
                      'Focused on current capabilities',
                      'Inspirational and future-focused',
                      'Changed frequently'
                    ],
                    correctAnswer: 2,
                    explanation: 'Vision statements should inspire people and paint a picture of the desired future state.'
                  }
                ]
              }
            }
          },
        ],
      },
    ],
    instructor: {
      id: 'i5',
      name: 'Robert Thompson',
      title: 'Business Consultant',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Robert has consulted for Fortune 500 companies and startups alike, helping them develop effective business strategies and improve their operations.',
    },
    rating: 4.7,
    studentsCount: 1320,
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Music Production Fundamentals',
    description: 'Learn the basics of music production, from recording to mixing and mastering. This course covers digital audio workstations, recording techniques, and sound design.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: '6',
    duration: 480, // 8 hours
    modules: [
      {
        id: 'm1',
        title: 'Digital Audio Basics',
        lessons: [
          { 
            id: 'l1', 
            title: 'Understanding Digital Audio', 
            duration: 25,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              }
            }
          },
          { 
            id: 'l2', 
            title: 'DAW Overview', 
            duration: 30,
            content: {
              type: 'text',
              data: {
                content: `# Digital Audio Workstation (DAW) Overview

Learn about the software that powers modern music production.

## What is a DAW?

A Digital Audio Workstation (DAW) is software used for recording, editing, mixing, and producing audio files. It's the central hub of modern music production.

## Popular DAWs

### Pro Tools
- **Best for**: Professional recording studios
- **Strengths**: Industry standard, excellent audio editing
- **Weaknesses**: Expensive, steep learning curve

### Logic Pro X (Mac only)
- **Best for**: Mac users, complete production
- **Strengths**: Great built-in instruments, good value
- **Weaknesses**: Mac exclusive

### Ableton Live
- **Best for**: Electronic music, live performance
- **Strengths**: Unique session view, great for loops
- **Weaknesses**: Less traditional for recording

### FL Studio
- **Best for**: Beginners, hip-hop, electronic
- **Strengths**: Lifetime free updates, pattern-based
- **Weaknesses**: Windows-focused (though Mac version exists)

### Reaper
- **Best for**: Budget-conscious users
- **Strengths**: Affordable, highly customizable
- **Weaknesses**: Less polished interface

## Key DAW Features

### Multi-track Recording
- Record multiple instruments simultaneously
- Layer different parts
- Create complex arrangements

### MIDI Support
- Program virtual instruments
- Edit note timing and velocity
- Create realistic performances

### Audio Editing
- Cut, copy, paste audio
- Time-stretching and pitch-shifting
- Noise reduction and restoration

### Mixing Console
- Adjust levels and panning
- Apply effects and processing
- Automate parameters over time

### Built-in Effects
- EQ (equalization)
- Compression
- Reverb and delay
- Modulation effects

## Choosing Your First DAW

Consider these factors:
1. **Budget**: Free options vs. paid software
2. **Operating System**: Mac vs. Windows compatibility
3. **Music Style**: Some DAWs excel at certain genres
4. **Learning Resources**: Tutorials and community support
5. **Hardware Integration**: Compatibility with your gear

## Getting Started Tips

1. **Start with the basics**: Learn to record and playback
2. **Use templates**: Many DAWs include starter projects
3. **Watch tutorials**: YouTube and official documentation
4. **Practice regularly**: Consistency builds familiarity
5. **Experiment**: Try different features and workflows
6. **Join communities**: Forums and social media groups
7. **Be patient**: Mastery takes time and practice

## Free DAW Options

### GarageBand (Mac)
- Perfect for beginners
- Great built-in sounds
- Easy to use interface

### Reaper (60-day free trial)
- Full-featured professional DAW
- Very affordable license

### Audacity
- Free and open-source
- Basic recording and editing
- Good for podcasts and simple projects

Remember: The best DAW is the one you'll actually use. Start with something accessible and upgrade as your skills and needs grow.`
              }
            }
          },
          { 
            id: 'l3', 
            title: 'Setting Up Your Workspace', 
            duration: 20,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'What does DAW stand for?',
                    options: [
                      'Digital Audio Workshop',
                      'Digital Audio Workstation',
                      'Digital Audio Workspace',
                      'Digital Audio Workflow'
                    ],
                    correctAnswer: 1,
                    explanation: 'DAW stands for Digital Audio Workstation, the software used for music production.'
                  }
                ]
              }
            }
          },
        ],
      },
      {
        id: 'm2',
        title: 'Recording Techniques',
        lessons: [
          { 
            id: 'l4', 
            title: 'Microphone Types and Placement', 
            duration: 35,
            content: {
              type: 'text',
              data: {
                content: `# Microphone Types and Placement

Understanding microphones is crucial for capturing great recordings.

## Microphone Types

### Dynamic Microphones
- **How they work**: Moving coil generates signal
- **Characteristics**: Rugged, handles high SPL
- **Best for**: Live vocals, drums, guitar amps
- **Examples**: Shure SM57, SM58

### Condenser Microphones
- **How they work**: Capacitor responds to sound waves
- **Characteristics**: Sensitive, detailed, requires power
- **Best for**: Studio vocals, acoustic instruments
- **Examples**: Neumann U87, Audio-Technica AT2020

### Ribbon Microphones
- **How they work**: Thin metal ribbon in magnetic field
- **Characteristics**: Warm, vintage sound, fragile
- **Best for**: Guitar amps, brass, room ambience
- **Examples**: Royer R-121, Coles 4038

## Polar Patterns

### Cardioid
- **Pattern**: Heart-shaped, front-facing
- **Use**: Isolates source, rejects background noise
- **Best for**: Most recording situations

### Omnidirectional
- **Pattern**: Picks up sound from all directions
- **Use**: Natural room sound, ambient recording
- **Best for**: Room mics, orchestral recording

### Figure-8 (Bidirectional)
- **Pattern**: Front and back, rejects sides
- **Use**: Two sources facing each other
- **Best for**: Duets, mid-side recording

## Microphone Placement Techniques

### Vocals
- **Distance**: 6-12 inches from mouth
- **Angle**: Slightly off-axis to reduce plosives
- **Height**: At mouth level or slightly above
- **Accessories**: Pop filter, shock mount

### Acoustic Guitar
- **12th Fret**: Balanced tone, good starting point
- **Sound Hole**: More bass, can be boomy
- **Bridge**: Brighter, more attack
- **Multiple Mics**: Blend different positions

### Electric Guitar Amp
- **On-Axis**: Direct, focused sound
- **Off-Axis**: Softer, less harsh
- **Distance**: Close for tight sound, far for room
- **Speaker Position**: Center vs. edge of cone

### Drums
- **Kick**: Inside or outside drum, beater vs. resonant head
- **Snare**: Above rim, angled down
- **Overheads**: Spaced pair or XY configuration
- **Room Mics**: Capture overall kit sound

## Recording Environment

### Acoustic Treatment
- **Absorption**: Reduce reflections and echo
- **Diffusion**: Scatter sound waves evenly
- **Bass Traps**: Control low-frequency buildup
- **Isolation**: Prevent sound leakage

### Room Considerations
- **Size**: Larger rooms for natural reverb
- **Shape**: Avoid perfect squares or rectangles
- **Materials**: Hard vs. soft surfaces
- **Noise Floor**: Minimize background noise

## Common Mistakes to Avoid

1. **Too close**: Proximity effect, handling noise
2. **Too far**: Room noise, lack of presence
3. **Wrong mic**: Using vocal mic on drums
4. **Poor placement**: Not considering polar pattern
5. **No pop filter**: Plosive sounds in vocal recordings
6. **Ignoring phase**: Multiple mics causing cancellation
7. **Overprocessing**: Trying to fix poor recording with effects

## Pro Tips

1. **Listen while placing**: Move mic and listen to changes
2. **Use your ears**: Trust what sounds good
3. **Document settings**: Note successful placements
4. **Experiment**: Try unconventional techniques
5. **Consider the mix**: How will it sit with other instruments?
6. **Phase check**: Always check phase when using multiple mics
7. **Record reference**: Capture room tone for editing

Remember: Great recordings start with good microphone technique. Spend time getting the source right before reaching for plugins and effects.`
              }
            }
          },
          { 
            id: 'l5', 
            title: 'Recording Vocals', 
            duration: 30,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              }
            }
          },
          { 
            id: 'l6', 
            title: 'Recording Instruments', 
            duration: 40,
            content: {
              type: 'pdf',
              data: {
                pdfUrl: 'https://www.sound.org/recording-techniques-guide'
              }
            }
          },
        ],
      },
      {
        id: 'm3',
        title: 'Mixing and Mastering',
        lessons: [
          { 
            id: 'l7', 
            title: 'EQ and Compression', 
            duration: 35,
            content: {
              type: 'text',
              data: {
                content: `# EQ and Compression Fundamentals

Master the two most important tools in mixing: equalization and compression.

## Equalization (EQ)

### What is EQ?
EQ allows you to boost or cut specific frequency ranges in your audio signal. It's like a sophisticated tone control.

### Types of EQ

#### Parametric EQ
- **Control**: Frequency, gain, and Q (bandwidth)
- **Flexibility**: Most versatile type
- **Use**: Surgical corrections, creative shaping

#### Graphic EQ
- **Control**: Fixed frequency bands with sliders
- **Simplicity**: Easy to visualize
- **Use**: Live sound, broad tonal shaping

#### Shelving EQ
- **Control**: Boost/cut above or below a frequency
- **Types**: High shelf, low shelf
- **Use**: Overall brightness or warmth

### EQ Techniques

#### Subtractive EQ
- **Concept**: Cut problem frequencies first
- **Benefits**: Cleaner sound, more headroom
- **Example**: Cut muddy 200-400Hz before boosting highs

#### Additive EQ
- **Concept**: Boost desired frequencies
- **Use**: Enhance character, add presence
- **Caution**: Can cause buildup and harshness

#### Frequency Ranges
- **Sub Bass (20-60Hz)**: Fundamental low end
- **Bass (60-250Hz)**: Warmth, fullness
- **Low Mids (250-500Hz)**: Muddiness, body
- **Mids (500Hz-2kHz)**: Presence, clarity
- **High Mids (2-5kHz)**: Definition, harshness
- **Highs (5-20kHz)**: Air, sparkle, sibilance

## Compression

### What is Compression?
Compression reduces the dynamic range of audio by automatically lowering the volume when it exceeds a set threshold.

### Compressor Controls

#### Threshold
- **Function**: Level where compression begins
- **Setting**: Lower threshold = more compression
- **Tip**: Start high and lower until you hear effect

#### Ratio
- **Function**: Amount of compression applied
- **Common Ratios**: 2:1 (gentle), 4:1 (medium), 10:1+ (limiting)
- **Effect**: Higher ratio = more aggressive compression

#### Attack
- **Function**: How quickly compression engages
- **Fast Attack**: Catches transients, can dull sound
- **Slow Attack**: Preserves punch, may allow peaks through

#### Release
- **Function**: How quickly compression stops
- **Fast Release**: Can cause pumping
- **Slow Release**: Smoother, more natural

#### Makeup Gain
- **Function**: Compensates for volume reduction
- **Goal**: Match compressed and uncompressed levels
- **Tip**: Use for A/B comparison

### Compression Techniques

#### Vocal Compression
- **Ratio**: 3:1 to 6:1
- **Attack**: Medium (3-10ms)
- **Release**: Medium to fast (100-300ms)
- **Goal**: Even, controlled vocal level

#### Drum Compression
- **Kick**: Fast attack, medium release
- **Snare**: Medium attack, fast release
- **Overheads**: Slow attack, medium release
- **Goal**: Punch and cohesion

#### Bus Compression
- **Application**: Mix bus or instrument groups
- **Settings**: Gentle ratio (2:1), slow attack/release
- **Goal**: Glue elements together

### Common EQ and Compression Mistakes

#### EQ Mistakes
1. **Boosting too much**: Creates harsh, unnatural sound
2. **Not using high-pass filters**: Leaves unnecessary low end
3. **EQing in solo**: Doesn't consider mix context
4. **Over-processing**: Death by a thousand cuts

#### Compression Mistakes
1. **Over-compressing**: Squashes life out of performance
2. **Wrong attack/release**: Destroys natural dynamics
3. **Not gain staging**: Levels too hot or too quiet
4. **Compressing everything**: Some sources don't need it

### Pro Tips

1. **EQ in context**: Make decisions while listening to full mix
2. **Use reference tracks**: Compare to professional recordings
3. **Trust your ears**: Meters are guides, not rules
4. **Less is more**: Subtle changes often work better
5. **High-pass everything**: Except kick and bass
6. **Compress for a reason**: Musical, not just technical
7. **Parallel compression**: Blend compressed and dry signals
8. **Automate before compressing**: Fix obvious level issues first

Remember: EQ and compression are tools to serve the music. Always ask yourself: "Does this make the song better?" If not, don't do it.`
              }
            }
          },
          { 
            id: 'l8', 
            title: 'Effects and Processing', 
            duration: 30,
            content: {
              type: 'video',
              data: {
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
              }
            }
          },
          { 
            id: 'l9', 
            title: 'Finalizing Your Mix', 
            duration: 35,
            content: {
              type: 'quiz',
              data: {
                questions: [
                  {
                    id: 'q1',
                    question: 'What is the primary purpose of compression in audio?',
                    options: [
                      'To make audio louder',
                      'To reduce dynamic range',
                      'To add distortion',
                      'To change pitch'
                    ],
                    correctAnswer: 1,
                    explanation: 'Compression reduces the dynamic range by automatically lowering the volume when it exceeds a threshold.'
                  },
                  {
                    id: 'q2',
                    question: 'When should you typically use subtractive EQ?',
                    options: [
                      'To add brightness',
                      'To remove problem frequencies',
                      'To boost bass',
                      'To add presence'
                    ],
                    correctAnswer: 1,
                    explanation: 'Subtractive EQ involves cutting problem frequencies first, which often sounds more natural than boosting.'
                  }
                ]
              }
            }
          },
        ],
      },
    ],
    instructor: {
      id: 'i6',
      name: 'James Anderson',
      title: 'Music Producer',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'James has produced music for independent artists and major labels, with multiple platinum-certified records under his belt.',
    },
    rating: 4.8,
    studentsCount: 945,
    isFeatured: false,
  },
];