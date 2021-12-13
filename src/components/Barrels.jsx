export function Barrels(props) {
  const barrelsCopy = [...props.articles];
  // sort from lowers to highers number
  barrelsCopy.sort((a, b) => {
    if (a.amount > b.amount) {
      return 1;
    } else {
      return -1;
    }
  });

  // add id
  barrelsCopy.map((beer) => (beer.id = Math.random()));

  // give different color regarding the amount of barrels
  const mappedBeers = barrelsCopy.map((article) => (
    <article className="beer" key={article.id}>
      <div
        className="stockcircle"
        style={{
          backgroundColor:
            article.amount < 5
              ? "#573254"
              : article.amount > 8
              ? "#ffc50d"
              : "#3eb6ff",

          color: article.amount < 5 ? "#FFFFFF" : "#1c2232",
        }}
      >
        <p>{article.amount}</p>
      </div>
      <p className="beer-name">{article.name}</p>
    </article>
  ));

  return (
    <section className="card">
      <div className="header">
        <h1>Barrels in stock</h1>
      </div>
      <div className="graph barrels">{mappedBeers}</div>
    </section>
  );
}
