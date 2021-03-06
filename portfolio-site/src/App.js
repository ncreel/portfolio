import './App.css';
import ProjectCarousel from './Components/ProjectCarousel.js';
import Contact from './Components/Contact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">
      <h1 className="title">M. Creel</h1>
      <h2 className="subtitle">Front End Software Engineer | Boston, MA</h2>
      </header>
      <div className="overview container-fluid">
        <h1 className="overview-title">Overview</h1>
        <div className="overview-content row justify-content-center">
          <div className="col justify-content-center">
          I'm a recent Computer Science and Writing graduate searching for
          opportunities to develop software with social impact. My skills
          lie mainly in front end development, specifically in Javascript, HTML,
          and CSS. I've created websites (<a href="https://github.com/ncreel/portfolio" target="_blank">including this one!</a>) using modern
          Javascript technologies, such as React, Svelte, and Typescript, and
          I have experience designing UI with Bootstrap and Sass. I'm eager to
          learn new technologies and contribute to software with purpose.
          </div>
        </div>
      </div>
      <ProjectCarousel/>
      <Contact/>
    </div>
  );
}

export default App;
