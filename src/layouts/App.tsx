// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Footer } from './footer';
import { Header } from './header';

function App() {
  const menu = 
  {
      "mainLinks": [
        { "link": "#", "label": "Book a demo" },
        { "link": "#", "label": "Documentation" },
        { "link": "#", "label": "Community" },
        { "link": "#", "label": "Academy" },
        { "link": "#", "label": "Forums" }
      ] 
    };

  // const footerData = {
  //   "data": [
  //     {
  //       "title": "About",
  //       "links": [
  //         { "label": "Features", "link": "#" },
  //         { "label": "Pricing", "link": "#" },
  //         { "label": "Support", "link": "#" },
  //         { "label": "Forums", "link": "#" }
  //       ]
  //     },
  //     {
  //       "title": "Project",
  //       "links": [
  //         { "label": "Contribute", "link": "#" },
  //         { "label": "Media assets", "link": "#" },
  //         { "label": "Changelog", "link": "#" },
  //         { "label": "Releases", "link": "#" }
  //       ]
  //     },
  //     {
  //       "title": "Community",
  //       "links": [
  //         { "label": "Join Discord", "link": "#" },
  //         { "label": "Follow on Twitter", "link": "#" },
  //         { "label": "Email newsletter", "link": "#" },
  //         { "label": "GitHub discussions", "link": "#" }
  //       ]
  //     }
  //   ]
  // }

  return (
    <>
    <Header mainLinks={menu.mainLinks} />
    <Footer />
    </>
  );
}

export default App;
