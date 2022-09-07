// import logo from './logo.svg';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <NavigationBar />
      <Routes>
          <Route path="home" element={<News pageSize={6} country="in" category="general" />} />
          <Route path="business" element={<News pageSize={6} country="in" category="business" />} />
          <Route path="entertainment" element={<News pageSize={6} country="in" category="entertainment" />} />
          <Route path="general" element={<News pageSize={6} country="in" category="general" />}/>
          <Route path="health" element={<News pageSize={6} country="in" category="health" />} />
          <Route path="science" element={<News pageSize={6} country="in" category="science" />} />
          <Route path="sport" element={<News pageSize={6} country="in" category="sport" />} />
          <Route path="technology" element={<News pageSize={6} country="in" category="technology"></News>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
