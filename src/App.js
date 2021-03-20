import React from 'react';
import "./App.css";
import MyHeader from "./components/MyHeader";
import MoviesList from "./components/MoviesList";
import movies from "./movies";

class App extends React.Component {
  
  

  render() {
    return (
      <div className="App">
        <MyHeader></MyHeader>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default App;
