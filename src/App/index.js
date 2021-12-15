import Container from "./components/Container";
import useMoviesList from "./utils/useMoviesList";

const App = () => {
  
  const moviesList = useMoviesList();

  return (
    <Container>
      MP4 Player
    </Container>
  );
}

export default App;