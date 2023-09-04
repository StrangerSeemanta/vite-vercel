import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import './App.css';


function App() {

  const links = ['Home', "About", "Skill", "Projects", "Contact"];
  const handleNavClick = (item: string) => {
    window.location.href = `#${item.toLocaleLowerCase()}`
  }
  const logoDetails = {
    src: '/src/assets/logo.png',
    altText: "Logo.png"
  }


  return (
    <Fragment>
      <Navbar logo={logoDetails} links={links} onSelected={handleNavClick} />
      <Intro />
      <About />
      <Skill />
      <Projects />
    </Fragment >
  )
}

export default App