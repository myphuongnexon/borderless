import './index.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MantineProvider, ColorSchemeProvider, ColorScheme  } from '@mantine/core';
import { HeaderResponsive as Header } from '../components/header';
import { Footer } from '../components/footer';

function Router() {
  const { t } = useTranslation();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const menu = 
  {
      "mainLinks": [
        { "link": "1", "label": t('content.functional')},
        { "link": "2", "label": "Documentation" },
        { "link": "3", "label": "Community" },
        { "link": "4", "label": "Academy" },
        { "link": "5", "label": "Forums" }
      ] 
    };

  return (
    <>
     <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles withNormalizeCSS>
        <Header links={menu.mainLinks}></Header>
        <Footer></Footer>
      </MantineProvider>
     </ColorSchemeProvider>
    </>
  );
}

export default Router;
