// import logo from './logo.svg';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import React, { Component } from 'react'
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
  return (
    <div>
      <Router>
      <NavigationBar />
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="general" />} />
          <Route path="home" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="general" />} />
          <Route path="business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="business" />} />
          <Route path="entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="entertainment" />} />
          <Route path="general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="general" />}/>
          <Route path="health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="health" />} />
          <Route path="science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="science" />} />
          <Route path="sport" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="sport" />} />
          <Route path="technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={6} country="in" category="technology"></News>} />
        </Routes>
      </Router>
    </div>
  );
}
}
