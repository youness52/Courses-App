import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react-native';
import Colors from '@/constants/colors';

interface VideoContentProps {
  videoUrl: string;
  onComplete?: () => void;
}

export default function VideoContent({ videoUrl, onComplete }: VideoContentProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
      if (onComplete) {
        onComplete();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <video
          src={videoUrl}
          controls
          style={styles.webVideo}
          onPlay={() => {
            if (!hasStarted) {
              setHasStarted(true);
              if (onComplete) {
                onComplete();
              }
            }
          }}
        >
          Your browser does not support the video tag.
        </video>
      </View>
    );
  }

  // For mobile, show a placeholder with play button
  // In a real app, you would use expo-av or react-native-video
  return (
    <View style={styles.container}>
      <View style={styles.videoPlaceholder}>
        <View style={styles.videoControls}>
          <Pressable style={styles.playButton} onPress={handlePlayPause}>
            {isPlaying ? (
              <Pause size={40} color="#fff" />
            ) : (
              <Play size={40} color="#fff" />
            )}
          </Pressable>
        </View>
        
        <View style={styles.bottomControls}>
          <Pressable style={styles.muteButton} onPress={handleMuteToggle}>
            {isMuted ? (
              <VolumeX size={20} color="#fff" />
            ) : (
              <Volume2 size={20} color="#fff" />
            )}
          </Pressable>
        </View>
      </View>
      
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>Video Lesson</Text>
        <Text style={styles.videoDescription}>
          {isPlaying ? 'Playing...' : hasStarted ? 'Paused' : 'Tap to play'}
        </Text>
        
        {Platform.OS !== 'web' && (
          <Text style={styles.note}>
            Note: This is a video placeholder. In a production app, you would use a proper video player component.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  webVideo: {
    width: '100%',
    height: 250,
    backgroundColor: '#000',
  },
  videoPlaceholder: {
    height: 250,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  videoControls: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomControls: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  muteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoInfo: {
    padding: 16,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  videoDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  note: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontStyle: 'italic',
    backgroundColor: Colors.card,
    padding: 12,
    borderRadius: 8,
  },
});