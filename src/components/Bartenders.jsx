export function Bartenders(props) {
  const dannie = props.articles.bartenders[3];
  const jonas = props.articles.bartenders[2];
  const klaus = props.articles.bartenders[1];
  const peter = props.articles.bartenders[0];

  //based on the status of the bartender, we'll display the element with a different style
  const statusAdjusted = (status) => {
    if (
      status === "startServing" ||
      status == "pourBeer" ||
      status == "reserveTap" ||
      status == "releaseTap"
    ) {
      return (
        <p
          style={{
            borderRadius: "13px",
            padding: "0.3em 1em",
            backgroundColor: "#C5E9FF",
            width: "max-content",
          }}
        >
          Serving
        </p>
      );
    } else if (status == "receivePayment") {
      return (
        <p
          style={{
            borderRadius: "13px",
            padding: "0.3em 1em",
            backgroundColor: "#9EF2B7",
            width: "max-content",
          }}
        >
          Getting paid
        </p>
      );
    } else if (status == "waiting") {
      return (
        <p
          style={{
            borderRadius: "13px",
            padding: "0.3em 1em",
            backgroundColor: "#EEEBEE",
            width: "max-content",
          }}
        >
          Waiting
        </p>
      );
    } else if (status == "replaceKeg") {
      return (
        <p
          style={{
            borderRadius: "13px",
            padding: "0.3em 1em",
            backgroundColor: "#FBA9B2",
            width: "max-content",
          }}
        >
          Changing keg
        </p>
      );
    } else {
      return (
        <p
          style={{
            borderRadius: "13px",
            padding: "0.3em 1em",
            backgroundColor: "white",
            width: "max-content",
          }}
        >
          {status}
        </p>
      );
    }
  };
  return (
    <section id="serving" className="card bartenders">
      <div className="header">
        <h1>Bartenders</h1>
      </div>
      <table
        style={{
          width: "100%",
          textAlign: "left",
          gap: "1em",

          marginLeft: "0",
        }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Status</th>
            <th>Order Nº</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="src\assets\bartenders\jonas.svg"
                alt="jonas-icon"
                style={{ width: "30px", height: "30px" }}
              />
            </td>
            <td>{jonas.name}</td>
            <td id="status">{statusAdjusted(jonas.statusDetail)}</td>
            <td id="ordernumber">{jonas.servingCustomer}</td>
          </tr>
          <tr>
            <td>
              <img
                src="src\assets\bartenders\dannie.svg"
                alt="dannie-icon"
                style={{ width: "30px", height: "30px" }}
              />
            </td>
            <td>{dannie.name}</td>
            <td id="status">{statusAdjusted(dannie.statusDetail)}</td>
            <td id="ordernumber">{dannie.servingCustomer}</td>
          </tr>
          <tr>
            <td>
              <img
                src="src\assets\bartenders\klaus.svg"
                alt="klaus-icon"
                style={{ width: "30px", height: "30px" }}
              />
            </td>
            <td>{klaus.name}</td>
            <td id="status">{statusAdjusted(klaus.statusDetail)}</td>
            <td id="ordernumber">{klaus.servingCustomer}</td>
          </tr>
          <tr>
            <td>
              <img
                src="src\assets\bartenders\peter.svg"
                alt="peter-icon"
                style={{ width: "30px", height: "30px" }}
              />
            </td>
            <td>{peter.name}</td>
            <td id="status">{statusAdjusted(peter.statusDetail)}</td>
            <td id="ordernumber">{peter.servingCustomer}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
