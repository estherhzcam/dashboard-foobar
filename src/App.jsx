import { useState, useEffect } from "react";
import "./App.css";
import { Menu } from "./components/Menu.jsx";
import { PendingOrders } from "./components/PendingOrders.jsx";
import { Bartenders } from "./components/Bartenders.jsx";
import { Levels } from "./components/Levels.jsx";
import { Barrels } from "./components/Barrels.jsx";
import { SoldBeers } from "./components/SoldBeers.jsx";
import { Queue } from "./components/Queue.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const res = await fetch("https://foo-bar-project.herokuapp.com/");
        const data = await res.json();
        setArticles(data);
        setLoading(false);
        /*  console.log("data", data); */
      }
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <Menu articles={articles} />
      <section id="cards-wrapper">
        <PendingOrders articles={articles} />
        <Bartenders articles={articles} />
        <Levels articles={articles.taps} />
        <Barrels articles={articles.storage} />
        <SoldBeers articles={articles} />
        <Queue articles={articles} />
      </section>
    </div>
  );
}

export default App;
