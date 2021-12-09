import { useState, useEffect, memo } from "react";

export const SoldBeers = memo(function SoldBeers() {
  const [archive, setArchive] = useState([]);
  const [loading2, setLoading2] = useState(true);
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
      setLoading2(false);
      console.log(data2);
    }
    fetchData2();
  }, []);
  if (loading2) return <h1></h1>;
  const beerAmountCopy = [...archive];
  let beerAmounts = {};

  beerAmountCopy.forEach((e) => {
    for (var key in e.accumulated) {
      if (!(key in beerAmounts)) {
        beerAmounts[key] = {
          ...e.accumulated[key],
        };

        beerAmounts[key].price =
          e.accumulated[key].price * e.accumulated[key].amount;
      } else {
        beerAmounts[key].price +=
          e.accumulated[key].price * e.accumulated[key].amount;

        beerAmounts[key].amount += e.accumulated[key].amount;
      }
    }
  });

  console.log("beeramounts after", beerAmounts);
  let maxAmount = 0;
  let maxPrice = 0;
  let beerAmountArr = [];
  for (let key in beerAmounts) {
    beerAmountArr.push({
      name: key,
      data: beerAmounts[key],
    });
    maxAmount =
      beerAmounts[key].amount > maxAmount ? beerAmounts[key].amount : maxAmount;
    maxPrice =
      beerAmounts[key].price > maxPrice ? beerAmounts[key].price : maxPrice;
  }

  let totalRevenueArr = [];
  beerAmountArr.forEach((e) => {
    totalRevenueArr.push(e.data.price);
  });
  console.log("total", totalRevenueArr);
  let totalRevenue = 0;
  totalRevenue = totalRevenueArr.reduce((a, b) => a + b);
  console.log("revenue", totalRevenue);

  let pixelWidth = 180;

  console.log("my data", beerAmountArr);
  beerAmountArr.map((e) => (e.id = Math.random()));
  const mappedBeerAmount = beerAmountArr.map((article) => (
    <article className="beerAmount" key={article.id}>
      <p className="beer-name">{article.name}</p>
      <div className="bargraph">
        <div className="bar">
          <div
            className="bar_liters"
            style={{
              width: `${Math.floor(
                (article.data.amount / maxAmount) * pixelWidth
              )}px`,
            }}
          ></div>
          <p>{Math.floor(article.data.amount * 0.5)}</p>
        </div>
        <div className="bar">
          <div
            className="bar_money"
            style={{
              width: `${Math.floor(
                (article.data.price / maxPrice) * pixelWidth
              )}px`,
            }}
          ></div>
          <p>{article.data.price}</p>
        </div>
      </div>
    </article>
  ));

  return (
    <section className="card">
      <div className="header">
        <h1>Sold beers by type</h1>
      </div>
      {mappedBeerAmount}
      <div className="legend">
        <div className="liters">
          <div className="square"></div>
          <p>Liters</p>
        </div>
        <div className="money">
          <div className="square"></div>
          <p>DKK sold</p>
        </div>
      </div>
    </section>
  );
});
