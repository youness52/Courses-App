import React from 'react';
import { StyleSheet, View, Text, Pressable, Linking, Platform } from 'react-native';
import { ExternalLink, FileText } from 'lucide-react-native';
import Colors from '@/constants/colors';

interface PDFContentProps {
  pdfUrl: string;
}

export default function PDFContent({ pdfUrl }: PDFContentProps) {
  const handleOpenPDF = async () => {
    try {
      const supported = await Linking.canOpenURL(pdfUrl);
      if (supported) {
        await Linking.openURL(pdfUrl);
      } else {
        console.log("Don't know how to open URI: " + pdfUrl);
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
    }
  };

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <iframe
          src={pdfUrl}
          style={styles.webPDF}
          title="PDF Content"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.pdfPlaceholder}>
        <FileText size={64} color={Colors.primary} />
        <Text style={styles.pdfTitle}>PDF Document</Text>
        <Text style={styles.pdfDescription}>
          This lesson contains a PDF document with important information and resources.
        </Text>
        
        <Pressable style={styles.openButton} onPress={handleOpenPDF}>
          <ExternalLink size={20} color="#fff" />
          <Text style={styles.openButtonText}>Open PDF</Text>
        </Pressable>
        
        <Text style={styles.note}>
          The PDF will open in your default PDF viewer or browser.
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
  webPDF: {
    width: '100%',
    height: '100vh',
    border: 'none',
  },
  pdfPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  pdfTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  pdfDescription: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  openButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  openButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  note: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});