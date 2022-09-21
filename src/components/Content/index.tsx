// import { useState } from 'react';
import { AppShell, 
  // useMantineTheme
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
import Competition from '../../routes/Competition';
import Forum from '../../routes/Forum';
import Data from '../../routes/Data';
import Introduce from '../../routes/Introduce';

function Content() {
  // const [opened, setOpened] = useState(false);
  // const theme = useMantineTheme();
  const { t } = useTranslation();

  const menu = 
  {
      "mainLinks": [
        { "link": "/introduce", "label": t('menu.introduce')},
        { "link": "2", "label": t('menu.forum') },
        { "link": "3", "label": t('menu.competition') },
        { "link": "4", "label": t('menu.data') },
      ] 
    };


  return (
    <Router>
    <AppShell
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
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </AppShell>
    </Router>
  );
}

export default Content;