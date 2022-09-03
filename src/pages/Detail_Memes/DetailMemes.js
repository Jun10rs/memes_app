import { Text, View, Image, StyleSheet } from "react-native";

import { format, fromUnixTime } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { AntDesign } from "@expo/vector-icons";

//const date = format (new Date(meme.date * 1000), "dd 'de' MMMM  'de' yyyy", {locale: ptBR})

export default function DetailMemes({ route }) {
  const { memes } = route.params;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, marginBottom: 40, fontWeight: "bold" }}>
        {memes.likes} Likes
      </Text>

      <Image
        source={{ uri: memes.url }}
        style={styles.imageMeme}
        resizeMode="contain"
      />

      <Text style={{ fontSize: 25, margin: 10 }}>{memes.author}</Text>
      <Text style={{ fontSize: 20, marginTop: 10 }}>Data da publicação:</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        {format(fromUnixTime(memes.date), "dd 'de' MMMM 'de' yyyy", {
          locale: ptBR,
        })}
      </Text>
      <Text style={{ fontSize: 20, margin: 10 }}>{memes.sharing} Sharing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8000",
  },

  imageMeme: {
    width: 300,
    height: 300,
    margin: 20,
    borderRadius: 10
  },
});
