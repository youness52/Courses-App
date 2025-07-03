import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Feather } from '@expo/vector-icons'; // ✅ Feather icons
import Colors from '@/constants/colors';

interface VideoContentProps {
  videoUrl: string;
  onComplete?: () => void;
}

export default function VideoContent({ videoUrl, onComplete }: VideoContentProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<Video>(null);

  const handlePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
      if (onComplete) {
        onComplete();
      }
    }
    setIsPlaying(prev => !prev);
  };

  const handleMuteToggle = () => {
    setIsMuted(prev => !prev);
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

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoUrl }}
        style={styles.video}
        useNativeControls={false}
        resizeMode="contain"
        isLooping
        isMuted={isMuted}
        shouldPlay={isPlaying}
        onPlaybackStatusUpdate={(status: AVPlaybackStatus) => {
          if (status.isLoaded && status.didJustFinish && onComplete) {
            onComplete();
          }
        }}
      />

      <View style={styles.videoControls}>
        <Pressable style={styles.playButton} onPress={handlePlayPause}>
          <Feather name={isPlaying ? 'pause' : 'play'} size={40} color="#fff" />
        </Pressable>

        <Pressable style={styles.muteButton} onPress={handleMuteToggle}>
          <Feather name={isMuted ? 'volume-x' : 'volume-2'} size={20} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>Video Lesson</Text>
        <Text style={styles.videoDescription}>
          {isPlaying ? 'Playing...' : hasStarted ? 'Paused' : 'Tap to play'}
        </Text>
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
  video: {
    width: '100%',
    height: 250,
    backgroundColor: '#000',
  },
  videoControls: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  muteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
});
