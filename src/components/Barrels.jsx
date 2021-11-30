export function Barrels(props) {
  return (
    <section className="card">
      <div clasName="header">
        <h1>Barrels in stock</h1>
      </div>
      <div className="graph">
        <ul>
          {props.articles.map((art) => (
            <h2>{art.name}</h2>
          ))}
        </ul>

        {/* <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div>
                <div className="beer">
                    <div className="circle"><p>1</p></div>
                    <p>El Hefe</p>
                </div> */}
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
