import useMoviesList from "./utils/useMoviesList";

const App = () => {
  
  const moviesList = useMoviesList();

  return (
    <div>
      MP4 Player
    </div>
  );
}

export default App;