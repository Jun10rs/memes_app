import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export const API =
  "http://336d-2804-15e4-8060-600-e28b-b384-5e90-7922.ngrok.io";

export default function ListMemes({ navigation }) {
  const [list, setList] = useState([]);

  function navigateDetailMemes(memes) {
    navigation.navigate('DetailMemes', {memes: memes});
  }

  function getMemeList() {
    fetch(API + "/memes")
      .then(async (response) => {
        const data = await response.json();
        setList(data);
        console.log(data);
      })
      .catch((error) => {
        alert("Houve um erro ao tentar listar os memes");
        console.log(error);
      });
  }

  useEffect(() => {
    getMemeList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />

      <View>
        <Text style={styles.title}> Galeria de Memes</Text>
      </View>

      <ScrollView>
        <View style={styles.list}>
          {list.map((memes) => (
            <TouchableOpacity
              key={memes.id}
              style={styles.buttonImage}
              onPress={() => navigateDetailMemes (memes)}
            >
              <Image
                style={styles.imageMeme}
                source={{ uri: memes.url }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF4000",
    flex: 1
  },

  title: {
    fontSize: 30,
    color: "blue",
    margin: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },

  imageMeme: {
    width: 110,
    height: 110,
    marginVertical: 10,
    borderRadius: 10,
  },
  
  buttonImage: {
    width: "30%",
  },

  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
});
