import React from 'react';
import Home from "./components/Home";
import Loading from './components/Loading';

export default function App() {
  const API_KEY = "e40d07f00b094602953cc3bf8537477e";
  const apiUrl = `https://newsapi.org/v2/everything?q=comics&sortBy=publishedAt&apiKey=${API_KEY}`;

  const [fetchingData, setFetchingDataState] = React.useState(true);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return data.articles;
      })
      .then(articles => {
        setItems(articles);
        setFetchingDataState(false);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);


  if (fetchingData) {
    return <Loading />
  } else {
    return <Home data={items} />
  }
};