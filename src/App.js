//import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Navbar from "./components/Navbar"
import {ThemeContext} from "./context/ThemeContext";
import {useContext} from "react";
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App${isLight?"light":"dark"}`}>
      <Nav/>
      <Header/>
      <Profile/>
      <Projects/>
      <Skills/>
      
    </div>
  );
}

export default App;
