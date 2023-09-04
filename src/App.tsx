import { Fragment, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';

import Loader from './Loader';

import logo from "./assets/logo.png"
import './App.css';


function App() {

  const links = ['Home', "About", "Skill", "Projects", "Contact"];
  const handleNavClick = (item: string) => {
    window.location.href = `#${item.toLocaleLowerCase()}`
  }
  const logoDetails = {
    src: logo,
    altText: "Logo.png"
  }
  const [appLoaderShow, setAppLoaderStat] = useState(true);

  return (
    <Fragment>
      <section onLoad={() => { setAppLoaderStat(false) }}>
        <Navbar logo={logoDetails} links={links} onSelected={handleNavClick} />
        <Intro />
        <About />
        <Skill />
        <Projects />
      </section>
      {appLoaderShow && <Loader className='fixed' />}
    </Fragment >
  )
}

export default App