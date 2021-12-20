import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import List from "./components/List";
import PasswordBox from "./components/PasswordBox";
import { ShadowBox } from "./components/PasswordBox/styled";
import Player from "./components/Player";
import theme from './theme';


const App = () => {
  const [loadedFile, setLoadedFile] = useState(undefined);
  const [showPasswordBox, setShowPasswordBox] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const changeDirHandler = () => {
    setShowPasswordBox(true);
  }

  const requestDirectoryHandler = (pwd) => {
    setIsFetching(true);
    fetch('./file_list.php',
      {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pwd: pwd,
        }),
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.response === 'ok') {
          setMoviesList(data.filesList);
          setShowPasswordBox(false);
          setIsPasswordCorrect(true);
        } else {
          setIsPasswordCorrect(false);
        }
        setIsFetching(false);
      }).catch(error => {
        console.log(error);
        setIsFetching(false);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Player fileName={loadedFile} />
        <List moviesList={moviesList} onLoadFile={setLoadedFile} onChangeDir={() => changeDirHandler()} />
        {(showPasswordBox || isFetching) && <ShadowBox />}
        {showPasswordBox && <PasswordBox isPasswordCorrect={isPasswordCorrect} onPassChange={setIsPasswordCorrect} onHideBox={() => setShowPasswordBox(false)} onPasswordCheck={requestDirectoryHandler} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;