// import logo from './logo.svg';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import News from './Component/News';

function App() {
  return (
    <div>
      <NavigationBar />
      <News pageSize={6} country="in" category="business" />
    </div>
  );
}

export default App;
