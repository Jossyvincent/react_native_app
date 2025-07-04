import {useState} from "react";/* lets components track internal state */

import { View, ScrollView, SafeAreaView } from "react-native";/* react native Ui components */
import { router, Stack, useRouter } from "expo-router"; /* defines a stack-based navigation */

import {COLORS, icons,images, SIZES} from '../constants';

import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';


const Home = () => {

  const router = useRouter();
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
        options={{headerStyle: {backgroundColor: COLORS.lightWhite },
      headerShadowVisible: false,
      headerLeft: () => (
        <ScreenHeaderBtn iconurl = {icons.menu} dimensions="60%"/>
      ),
      headerLeft: () => (
        <ScreenHeaderBtn iconurl = {icons.profile} dimensions="100%"/>
      )

      }}
        />
      </SafeAreaView>
    )
}

export default Home;
 