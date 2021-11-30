export function Barrels(props) {
  console.log("barrels", props);
  /* const color = props.articles.forEach((art) => {
    art.amount > 3 ? "red" : "green";
  }); */
  /*   style={{
          backgroundColor: article.amount > 3 ? "red" : "green",
        }} */

  const barrelsCopy = [...props.articles];
  barrelsCopy.sort((a, b) => {
    if (a.amount > b.amount) {
      return 1;
    } else {
      return -1;
    }
  });

  console.log("what is copy", barrelsCopy);
  const mapped = barrelsCopy.map((article) => (
    <article className="beer">
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
      <div className="graph barrels">
        {mapped}
        {/* <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
               */}
      </div>
    </section>
  );
}
/* 
function Barrel() {
  return (
    <article>
      <h2>Product 1</h2>
      <p>lorem</p>
    </article>
  );
}
 */
