import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/colors";
import { Montserrat } from "../theme/Fonts";

const IRON_MAN = {
  Title: "Iron Man",
  Year: 2008,
  Runtime: "126 min",
  Genre: "Action, Adventure, Sci-Fi",
  imdbRating: 7.9,
  Production: "Marvel Enterprises, Paramount",
  Rated: "PG-13",
  Director: "Jon Favreau",
  Actors: "Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow",
  Plot:
    "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
};

const Tag = ({ title, content }) => {
  return (
    <View style={tagStyles.container}>
      <Text style={tagStyles.title}>{title}:</Text>
      <Text style={tagStyles.content}>{content}</Text>
    </View>
  );
};

const tagStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },
  content: {
    color: Colors.gray[400],
    fontFamily: Montserrat.light,
    fontSize: 16,
  },
  title: {
    color: Colors.blue[100],
    fontFamily: Montserrat.light,
    fontSize: 16,
    marginRight: 6,
  },
});

const FilmDetails = ({ route, navigation }) => {
  const { film } = route.params;
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: film.Poster }} style={styles.poster} />

      <ScrollView style={styles.bodyContainer}>
        <LinearGradient
          style={styles.titleContainerGradient}
          colors={["rgba(27, 33, 47, 0)", "#1B212F", "#1B212F"]}
          locations={[0, 0.65, 0.8]}
        >
          <Text style={styles.title}>{film.Title}</Text>
          <Icon
            style={styles.bookMarkIcon}
            name="bookmark-outline"
            size={30}
            color={Colors.blue[100]}
          />
        </LinearGradient>
        <View style={styles.contentContainer}>
          <View style={styles.tagsInRow}>
            <Tag title="Lanzamiento" content={film.Year} />
            <Tag title="Clasificacion" content={film.Rated} />
          </View>
          <Tag title="Duracion" content={film.Runtime} />
          <Tag title="Etiquetas" content={film.Genre} />
          <Text style={styles.plotTitle}>Plot</Text>
          <Text style={styles.plotContent}>{film.Plot}</Text>
          <Tag title="Director" content={film.Director} />
          <Tag title="Actuan" content={film.Actors} />
          <Tag title="Produccion" content={film.Production} />
        </View>
      </ScrollView>
      <LinearGradient
        style={styles.headerContainerGradient}
        colors={["#1B212F", "#1B212F", "rgba(27, 33, 47, 0)"]}
        locations={[0, 0.01, 0.8]}
      >
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Icon name="chevron-back" size={40} color={Colors.white} />
          <Text style={styles.headerTitle}>Buscar</Text>
        </TouchableOpacity>
        <View style={styles.starContainer}>
          <Icon
            style={styles.startIcon}
            name="star"
            size={20}
            color={Colors.yellow[200]}
          />
          <Text style={styles.startText}>{film.imdbRating}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default FilmDetails;

const styles = StyleSheet.create({
  bodyContainer: {
    minHeight: 500,
    width: "100%",
    zIndex: 3,
  },
  bookMarkIcon: {
    position: "absolute",
    right: 16,
    top: 32,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.blue[800],
    minHeight: 800,
    paddingBottom: 80,
    paddingHorizontal: 24,
    paddingTop: 12,
    width: "100%",
  },
  goBackButton: {
    flexDirection: "row",
  },
  headerContainerGradient: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingTop: 8,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10000,
  },
  headerTitle: {
    alignSelf: "baseline",
    color: Colors.white,
    fontFamily: Montserrat.medium,
    fontSize: 24,
    marginLeft: 4,
    marginTop: 4,
  },
  plotContent: {
    color: Colors.gray[400],
    fontFamily: Montserrat.light,
    fontSize: 18,
    marginBottom: 12,
    marginTop: 12,
  },
  plotTitle: {
    color: Colors.blue[100],
    fontFamily: Montserrat.semiBold,
    fontSize: 26,
    marginTop: 32,
  },
  poster: {
    height: "75%",
    position: "absolute",
    width: "100%",
  },
  starContainer: {
    flexDirection: "row",
    marginRight: 14,
    marginTop: 8,
  },
  startIcon: {
    marginTop: 4,
  },
  startText: {
    color: Colors.yellow[200],
    fontFamily: Montserrat.medium,
    fontSize: 22,
    marginHorizontal: 8,
    marginTop: 0,
  },
  tagsInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontFamily: Montserrat.medium,
    fontSize: 32,
    maxWidth: "80%",
  },
  titleContainerGradient: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "80%",
    minHeight: 80,
    paddingLeft: 24,
    paddingRight: 16,
    paddingTop: 25,
    width: "100%",
  },
});
