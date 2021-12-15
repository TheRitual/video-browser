import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import List from "./components/List";
import Player from "./components/Player";
import theme from './theme';


const App = () => {
  const [loadedFile, setLoadedFile] = useState(undefined);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <List onLoadFile={setLoadedFile} />
        <Player fileName={loadedFile} />
      </Container>
    </ThemeProvider>
  );
}

export default App;