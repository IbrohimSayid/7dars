import { useState } from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section />
    </>
  )
}

export default App
