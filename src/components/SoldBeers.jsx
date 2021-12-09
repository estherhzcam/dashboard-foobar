import { useState, useEffect } from "react";

export function SoldBeers(props) {
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    async function fetchData2() {
      const options = {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "602e36c15ad3610fb5bb62b8",
          "cache-control": "no-cache",
        },
      };
      const res = await fetch(
        "https://kea21-4d62.restdb.io/rest/foobar",
        options
      );
      const data2 = await res.json();
      setArchive(data2);
    }
    fetchData2();
  }, []);

  const beerAmountCopy = [...archive];
  let beerAmounts = {};

  beerAmountCopy.forEach((e) => {
    for (var key in e.accumulated) {
      if (!(key in beerAmounts)) {
        beerAmounts[key] = e.accumulated[key];
      } else {
        beerAmounts[key].price += e.accumulated[key].price;
        beerAmounts[key].amount += e.accumulated[key].amount;
      }
    }
  });
  console.log("beeramounts", beerAmounts);
  let beerAmountArr = [];
  for (let key in beerAmounts) {
    beerAmountArr.push({
      name: key,
      data: beerAmounts[key],
    });
  }

  console.log("my data", beerAmountArr);

  const mappedBeerAmount = beerAmountArr.map((article) => (
    <article className="beerAmount">
      <p className="beer-name">{article.name}</p>
    </article>
  ));

  return (
    <section className="card">
      <div className="header">
        <h1>Sold beers by type</h1>
      </div>
      {mappedBeerAmount}
      {/*  <div className="bargraph">
        <div className="barelement">
           <p>{mappedBeerAmount}</p>
          <div className="bars">
            <div></div>
            <div></div>
          </div>
        </div> */}
    </section>
  );
}
