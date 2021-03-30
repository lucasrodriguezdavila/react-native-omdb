import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Colors } from "../theme/colors";
import FilmItem from "../components/FilmItem";
import SearchInput from "../components/SearchInput";
import { Montserrat } from "../theme/Fonts";
import searchFilmByTitle from "../redux/films/actions";

// const IRON_MAN = {
//   Title: 'Iron Man',
//   Year: 2008,
//   Runtime: '126 min',
//   Genre: 'Action, Adventure, Sci-Fi',
//   imdbRating: 7.9,
//   Poster:
//     'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
// };

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const films = useSelector((store) => store.films);
  const dispatch = useDispatch();

  const handleFetchMovies = () => {
    dispatch(searchFilmByTitle(searchText));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
      <View style={styles.inputContainer}>
        <SearchInput
          value={searchText}
          setValue={setSearchText}
          handleSubmit={handleFetchMovies}
        />
      </View>

      {films.films && (
        <FlatList
          style={styles.flatList}
          data={films.films}
          renderItem={({ item }) => (
            <FilmItem film={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => item + index}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue[800],
    flex: 1,
    padding: 24,
  },
  flatList: {
    borderRadius: 80,
  },
  inputContainer: {
    marginTop: 18,
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontFamily: Montserrat.semiBold,
    fontSize: 32,
  },
});
