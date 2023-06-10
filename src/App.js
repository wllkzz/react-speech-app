import './App.css';
import Recognition from './components/Recognition';
import Synthesis from './components/Synthesis';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Synthesis />
      <Recognition />
    </div>
  );
}

export default App;
