import './App.css';
import Container from './components/Container'
import AddCounter from './components/AddCounter';
import { useState } from 'react'

function App() {

  const [mode, setMode] = useState("light")

  const handleMode = () => {
    if (mode === "light") setMode("dark")
    else setMode("light")
  }

  return (
    <div className={mode === "light" ? "App" : "App dark-mode"}>
      <button id="dark-toggle" onClick={handleMode}>{mode === "light" ? "Dark Mode" : "Light Mode"}</button>
      <Container />
      <AddCounter />
    </div>
  );
}

export default App;
