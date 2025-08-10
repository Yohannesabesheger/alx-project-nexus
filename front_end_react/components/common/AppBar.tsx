import { appBarStyles as styles } from '@/styles'; // adjust path if needed
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type AppBarProps = {
  title: string;
  showBack?: boolean;
  rightIcon?: React.ReactNode;
};

const AppBar: React.FC<AppBarProps> = ({ title, showBack = false, rightIcon }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {showBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>{rightIcon}</View>
    </View>
  );
};

export default AppBar;
