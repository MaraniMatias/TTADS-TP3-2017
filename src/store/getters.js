export default {
  findMovie(state) {
    return (movieId) => {
      state.discover.results.find(movie => movie.id === movieId);
    };
  }
};
