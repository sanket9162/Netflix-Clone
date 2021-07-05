import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./requests";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Weekly Trending" fetchUrl={requests.fetchWeeklyTreanding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romanace Movies" fetchUrl={requests.fetchRomancesMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentsMovies} />
    </div>
  );
}

export default App;
