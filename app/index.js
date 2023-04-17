import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import { COLORS, icons, images, SIZES } from '../assets/theme';
import { Stack, useRouter } from 'expo-router';

//S

const Home = () => {
  return (
    <ImageBackground
      source={require('../assets/image/background.png')}
      style={{ flex: 1, width: '100%', height: '100%' }}
      resizeMode="cover"
    >
      <View style={{ color: COLORS.lightWhite, flex: 1 }}>
        <Text style={{ color: COLORS.black, fontSize: SIZES.h1 }}>
          My Header Title
        </Text>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerTitle: '',
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
