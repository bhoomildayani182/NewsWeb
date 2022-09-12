import './App.css';
import NavigationBar from './Component/NavigationBar';
import React, {useState } from 'react'
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App =()=>{
  const apiKey = process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress]=useState(0)
  
  return (
    <div>
      <Router>
      <NavigationBar />
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
      />
      <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="general" />} />
          <Route path="home" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="general" />} />
          <Route path="business" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="business" />} />
          <Route path="entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="entertainment" />} />
          <Route path="general" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="general" />}/>
          <Route path="health" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="health" />} />
          <Route path="science" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="science" />} />
          <Route path="sport" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="sport" />} />
          <Route path="technology" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={6} country="in" category="technology"></News>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;