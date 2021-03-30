import OmdbURLGenerator from "../../api/omdbAPI";

const searchFilmByTitle = (title) => async (dispatch) => {
  dispatch({ type: "SEARCH_SENT" });
  try {
    const { Search, totalResults } = await new OmdbURLGenerator()
      .searchByTitle(title)
      .fetch();
    dispatch({
      type: "SEARCH_FULFILLED",
      payload: { films: Search, totalResults },
    });
  } catch (error) {
    dispatch({ type: "SEARCH_REJECTED", payload: error.message });
  }
};

export default searchFilmByTitle;
