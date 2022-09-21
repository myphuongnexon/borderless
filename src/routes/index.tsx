import './index.css';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme  } from '@mantine/core';
import Content from '../components/Content';

function Router() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
     <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles withNormalizeCSS>
        <Content />
      </MantineProvider>
     </ColorSchemeProvider>
    </>
  );
}

export default Router;
