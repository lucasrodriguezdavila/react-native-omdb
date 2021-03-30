export const OMDB_URL = "http://www.omdbapi.com/";
export const API_KEY = "190be3ce";

export default class OmdbURLGenerator {
  constructor() {
    this.URL = `${OMDB_URL}?apikey=${API_KEY}`;
  }

  searchByTitle(title) {
    const parsedTitle = title.replace(/\s/g, "+");
    this.URL = `${this.URL}&s=${parsedTitle}`;
    return this;
  }

  getByImdbID(id) {
    this.URL = `${this.URL}&i=${id}`;
    return this;
  }

  fullPlot() {
    this.URL = `${this.URL}&plot=full`;
    return this;
  }

  async fetchOneMovie() {
    try {
      const response = await fetch(this.URL);
      if (response.ok) {
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        return data;
      }
    } catch (error) {
      throw new Error(error.message);
    }
    return null;
  }

  async fetch() {
    try {
      const response = await fetch(this.URL);
      if (response.ok) {
        const {
          Search,
          Response,
          totalResults,
          Error: errorMessage,
        } = await response.json();
        if (Response === "False") {
          throw new Error(errorMessage);
        }
        return { Search, totalResults };
      }
    } catch (error) {
      throw new Error(error.message);
    }
    return null;
  }
}
