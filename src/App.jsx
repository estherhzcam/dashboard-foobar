import { useState, useEffect } from "react";
import "./App.css";
import { Menu } from "./components/Menu.jsx";
import { PendingOrders } from "./components/PendingOrders.jsx";
import { Bartenders } from "./components/Bartenders.jsx";
import { Levels } from "./components/Levels.jsx";
import { Barrels } from "./components/Barrels.jsx";
import { SoldBeers } from "./components/SoldBeers.jsx";
import QueueArchive from "./components/Queue.jsx";
import { SpinnerDotted } from "spinners-react";

function App() {
  const [articles, setArticles] = useState([]);
  const [archive, setArchive] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "602e36c15ad3610fb5bb62b8",
      "cache-control": "no-cache",
    },
  };

  const getArchive = async () => {
    try {
      const response = await fetch(
        "https://kea21-4d62.restdb.io/rest/foobar",
        options
      );
      const json = await response.json();
      setArchive(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  async function fetchData() {
    const res = await fetch("https://foo-bar-project.herokuapp.com/");
    const data = await res.json();
    setArticles(data);
    setLoading(false);
  }

  useEffect(() => {
    getArchive();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading || loading2)
    return (
      <div className="spinner-wrapper">
        <h1>One second, we're changing the keg</h1>
        <SpinnerDotted
          size={71}
          thickness={133}
          speed={100}
          color="rgba(87, 50, 84, 1)"
        />
      </div>
    );

  return (
    <div className="App">
      <Menu articles={articles} archive={archive} />
      <section id="cards-wrapper">
        <PendingOrders articles={articles} />
        <Bartenders articles={articles} />
        <Levels articles={articles.taps} />
        <Barrels articles={articles.storage} />
        <QueueArchive archive={archive} />
        <SoldBeers archive={archive} />
      </section>
    </div>
  );
}

export default App;
