// import axios from 'axios';

import './App.css';
import { useMemo, useState } from 'react';
import { ColorModeContext } from './context/ColorModeContext';
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import Navigation from './components/navbar/Navigation';
import Article from './components/main/Article';
import ArticlesByCat from './components/main/ArticlesByCat';

function App() {

  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* appbar */}
        <Navigation />
        {/* hero */}
        <Box>
          <Box>Hero</Box>
        </Box>
        {/* list of blog articles */}

          <Article slug={"an-introduction-to-stonehenge"} />
        {/* <Container>
          <ArticlesByCat catId={5} />
        </Container> */}
        {/* {posts.map((pst,index)=>(<div key={index} dangerouslySetInnerHTML={{ __html: pst.excerpt.rendered }}></div>))} */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
