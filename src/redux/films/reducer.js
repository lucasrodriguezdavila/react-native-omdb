const filmsReducer = (store = [], action) => {
  switch (action.type) {
    case "SEARCH_SENT":
      return { ...store, searchLoading: true };
    case "SEARCH_FULFILLED":
      return {
        ...store,
        searchLoading: false,
        films: action.payload.films,
        totalResults: action.payload.totalResults,
      };
    case "SEARCH_REJECTED":
      return { ...store, searchLoading: false, searchError: action.payload };
    default:
      return store;
  }
};
export default filmsReducer;
