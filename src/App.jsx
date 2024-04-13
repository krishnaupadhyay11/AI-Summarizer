import Hero from "./components/Hero";
import Demo from "./components/Demo";

import './App.css';

export default function App() {
  return (
    <main className="main">
      <div className="gradient" />
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}