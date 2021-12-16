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

import { amber, grey } from '@mui/material/colors';

function App() {

  const [mode, setMode] = useState('dark');

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
              main: '#7986cb',
              light: '#939ed5',
              dark: '#545d8e',
            },
            secondary: {
              main: '#00c853',
              light: '#33d375',
              dark: '#008c3a',
            },
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            // primary: {
            //   main: '#303f9f',
            //   light: '#5965b2',
            //   dark: '#212c6f',
            // },
            // secondary: {
            //   main: '#66bb6a',
            //   light: '#84c887',
            //   dark: '#47824a',
            // },
            // divider: '#283593',
            // background: {
            //   default: '#1a237e',
            //   paper: '#1a237e',
            // },
            // text: {
            //   primary: '#fff',
            //   secondary: grey[500],
            // },
          }),
    },
  });







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
      createTheme(
        getDesignTokens(mode)
      ),
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
