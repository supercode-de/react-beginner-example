import React from 'react';
import "./App.css";
import MyHeader from "./components/MyHeader";
import MoviesList from "./components/MoviesList";
import movies from "./movies";

function App() {

  return (
    <div className="App">
      <MyHeader></MyHeader>
      <MoviesList movies={movies} />
    </div>
  );

}

export default App;
