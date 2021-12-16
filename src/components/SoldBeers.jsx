import { memo } from "react";

export const SoldBeers = memo(function SoldBeers(props) {
  const archive = props.archive;

  const beerAmountCopy = [...archive];
  let beerAmounts = {};

  // loops through each property in object
  // if property is not already in the new object beerAmounts, then
  // it copies the property to the new object and calculates the price
  // else adds the prices and amount to already exists property in new object
  // to get the total price and amount of each beer
  beerAmountCopy.forEach((e) => {
    for (let key in e.accumulated) {
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
  let maxAmount = 0;
  let maxPrice = 0;
  let beerAmountArr = [];
  //it converts object into array
  for (let key in beerAmounts) {
    beerAmountArr.push({
      name: key,
      data: beerAmounts[key],
    });
    // find the maximal amount and price
    // if the number is bigger than already existing, then set the maxAmount or maxPrice to it
    // otherwise, stick with the old one
    maxAmount =
      beerAmounts[key].amount > maxAmount ? beerAmounts[key].amount : maxAmount;
    maxPrice =
      beerAmounts[key].price > maxPrice ? beerAmounts[key].price : maxPrice;
  }

  let pixelWidth = 180;
  // sets an id
  beerAmountArr.map((e) => (e.id = Math.random()));
  // mapps through the array
  //calculates the length of the bar
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
    <section id="salesbytype" className="card">
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
