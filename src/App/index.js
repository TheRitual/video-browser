import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import List from "./components/List";
import Player from "./components/Player";
import theme from './theme';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Container>
      <List />
      <Player />
      </Container>
    </ThemeProvider>
  );
}

export default App;