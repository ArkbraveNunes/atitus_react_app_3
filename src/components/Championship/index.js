import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";

import Style from "./style"
const { screen, title, button, img } = Style

import ApiService from "../../services/external-api-service";
const apiService = new ApiService();

const getChampionships = () => {
  return apiService.getChampionships(2)
  .catch(() => {})
}

export default Championship = ({ navigation }) => {
  const [data, setData] = useState({});

  useEffect(
    () => {
      getChampionships().then(res => setData(res))
    }, []
  )

  const changePage = (namePage, { idChampionship, logoChampionship }) => {
    navigation.navigate(namePage, {
      idChampionship,
      logoChampionship
    });
  };
    return (
      <SafeAreaView style={screen.background}>
        <View style={screen.container}>
          <View style={button.container}>
            <TouchableOpacity onPress={() => changePage('Phases', { idChampionship: data.campeonato_id, logoChampionship: data.logo })}>
              <Image style={img.layout} source={{uri: data.logo}}/>
            </TouchableOpacity>
            <Text style={title.text}>{data.nome_popular}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };