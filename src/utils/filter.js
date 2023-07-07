export const filterMovies = (
  moviesData,
  searchValue,
  likesMovies,
  setFilteredMovies,
  setFilteredLikedMovies,
  checkboxValue,
  isMoviesPage
) => {
  const moviesDataWithLikes = moviesData.map((movie) => {
    const likedMovie = likesMovies.find(
      (likedMovie) => movie.id === likedMovie.movieId
    );
    return likedMovie ? likedMovie : movie;
  });

  const shortMovies = (isMoviesPage ? moviesDataWithLikes : likesMovies).filter(
    (movie) => movie.duration <= 40
  );

  const allMovies = checkboxValue
    ? shortMovies
    : isMoviesPage
    ? moviesDataWithLikes
    : likesMovies;

  const filteredMovies = allMovies.filter((movie) => {
    return Object.values(movie).some((value) => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchValue.toLowerCase());
      }
      return false;
    });
  });
  isMoviesPage
    ? setFilteredMovies(filteredMovies)
    : setFilteredLikedMovies(filteredMovies);
};
