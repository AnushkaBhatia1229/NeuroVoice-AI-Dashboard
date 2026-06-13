import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import VoiceControl from "./components/VoiceControl";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
      <VoiceControl />
      <Stats />
    </div>
  );
}

export default App;