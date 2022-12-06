import logo from './logo.svg';
import './App.css';
import Groups from './components/Groups';
import Discover from './components/Discover';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex">
      <Groups />
      <Discover />
      <MainContent />
      <div className="w-full h-screen bg-[#393943]"></div>
    </div>
  );
}

export default App;
