import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';
<<<<<<< HEAD
import { Video, AVPlaybackStatus } from 'expo-av';
import { Feather } from '@expo/vector-icons'; // ✅ Feather icons
=======
import { Play, Pause, Volume2, VolumeX } from 'lucide-react-native';
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
import Colors from '@/constants/colors';

interface VideoContentProps {
  videoUrl: string;
  onComplete?: () => void;
}

export default function VideoContent({ videoUrl, onComplete }: VideoContentProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
<<<<<<< HEAD
  const videoRef = useRef<Video>(null);
=======
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6

  const handlePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
      if (onComplete) {
        onComplete();
      }
    }
<<<<<<< HEAD
    setIsPlaying(prev => !prev);
  };

  const handleMuteToggle = () => {
    setIsMuted(prev => !prev);
=======
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
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

<<<<<<< HEAD
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

=======
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
      
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>Video Lesson</Text>
        <Text style={styles.videoDescription}>
          {isPlaying ? 'Playing...' : hasStarted ? 'Paused' : 'Tap to play'}
        </Text>
<<<<<<< HEAD
=======
        
        {Platform.OS !== 'web' && (
          <Text style={styles.note}>
            Note: This is a video placeholder. In a production app, you would use a proper video player component.
          </Text>
        )}
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
<<<<<<< HEAD
=======
  bottomControls: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
  muteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    marginTop: 20,
=======
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
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
<<<<<<< HEAD
});
=======
  note: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontStyle: 'italic',
    backgroundColor: Colors.card,
    padding: 12,
    borderRadius: 8,
  },
});
>>>>>>> 5c0a012e26a79fad43bd2af96bfc732cc88218e6
