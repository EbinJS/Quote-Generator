//import logo from './logo.svg';
import React, {useState,useEffect} from 'react';
import './App.css';
import Quotes from './Quotes';
import LoadingScreen from './LoadingScreen';

function App() {
  const [currentPage, setCurrentPage] = useState([]);
  const newQuoteButton = async () => {
    setCurrentPage(await fetchQuote());
  }
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    newQuoteButton();
    setTimeout(() => setLoading(false), 3500)
  }, []);


  return (
    <>
    {loading === false ? (
    <main>
      <div id="box">
        <Quotes content={currentPage.content} author={currentPage.author} />
          <button id="button" onClick={newQuoteButton}>
            Next Quote
          </button>
      </div>
    </main>
    ):(
      <LoadingScreen />
      )}
      </>
  );
}

const fetchQuote = async (callBack) => {
  let res = await (await fetch("https://api.quotable.io/random")).json();
  res.content = res.content.replace(/[;]/g, "");
  if (res.content.length > 240) {
    console.log('Content exceeds character limit');
    fetchQuote();
  }
  else {
    return res;
  }
};

export default App;

