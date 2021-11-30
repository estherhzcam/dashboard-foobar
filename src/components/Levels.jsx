import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function Levels(props) {
  console.log("levels", props);
  const mappedLevels = props.articles.map((article) => (
    <div className="levels">
      <p>{article.beer}</p>
      <div
        className="circlegraph"
        style={{
          width: 60,
          height: 60,
        }}
      >
        <CircularProgressbar
          value={Math.round((article.level / article.capacity) * 100)}
          text={`${Math.round((article.level / article.capacity) * 100)}%`}
          styles={buildStyles({
            textColor: "#1c2232",
            pathColor: "#573254",
            textSize: "30px",
          })}
          counterClockwise={true}
        />
      </div>
    </div>
  ));

  return (
    <section className="card">
      <div className="header">
        <h1>Levels on taps</h1>
      </div>
      <div className="graph levelsgraph">{mappedLevels}</div>
    </section>
  );
}
