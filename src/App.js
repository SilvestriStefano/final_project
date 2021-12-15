// import axios from 'axios';

import './App.css';
import { Route, Routes } from 'react-router';
import { useMemo, useState } from 'react';
import { ColorModeContext } from './context/ColorModeContext';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Navigation from './components/navbar/Navigation';
import Article from './components/main/Article';
import Articles from './components/main/Articles';
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
        <Navigation />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/category/:catId" element={<ArticlesByCat />} />
        </Routes>

        {/* hero */}
        <Box>
          <Box>Hero</Box>
        </Box>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
