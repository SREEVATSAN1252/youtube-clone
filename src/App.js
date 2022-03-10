import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app__page">
            <Sidebar />
            <SearchPage />
            </div>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
