// import { useState } from 'react';
import { AppShell, 
  useMantineTheme
 } from '@mantine/core';
import { HeaderResponsive as Header } from '../Header';
import { Footer } from '../Footer';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  // Link,
  Route,
  Routes 
} from "react-router-dom"
import Prize from '../../routes/Prize';
import Forum from '../../routes/Forum';
import Archive from '../../routes/Archive';
import Introduce from '../../routes/Introduce';
import { HEADER_HEIGHT } from '../../utils/variable';


function Content() {
  // const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { t } = useTranslation();

  const menu = 
  {
      "mainLinks": [
        { "link": "/", "label": t('menu.introduce')},
        { "link": "/forum", "label": t('menu.forum') },
        { "link": "/prize", "label": t('menu.prize') },
        { "link": "/archive", "label": t('menu.archive') },
      ] 
    };


  return (
    <Router>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
            paddingTop: HEADER_HEIGHT,
            paddingLeft: 0,
            paddingRight: 0
          },
        }}
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        header={
          <Header links={menu.mainLinks}></Header>
        }
        footer={
          <Footer />
        }
      >
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/prize" element={<Prize />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default Content;