// import axios from 'axios';

import './App.css';
import { useMemo, useState } from 'react';
import { ColorModeContext } from './context/ColorModeContext';
import { createTheme, ThemeProvider } from '@mui/material';
import Navigation from './components/Navigation';

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
  // const [posts, setPosts]=useState([]);
  // const API_BM_posts= "http://localhost/wp_final_project/index.php/wp-json/wp/v2/posts";
  // useEffect(() => {
  //   axios.get(API_BM_posts).then(res=>setPosts(res.data))
  // }, [])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      {/* appbar */}
      <Navigation />
      {/* hero */}
      {/* list of blog articles */}
      {/* {posts.map((pst,index)=>(<div key={index} dangerouslySetInnerHTML={{ __html: pst.excerpt.rendered }}></div>))} */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
