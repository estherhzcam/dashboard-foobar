import { Order } from "./Order.jsx";
export function PendingOrders(props) {
  const queue = props.articles.queue;
  //Depending on the length of the queue we'll display diferent content.

  const newOrder = queue.map((order) => <Order key={order.id} {...order} />);
  const slicedOrders = queue.slice(0, 4).map((order) => <Order key={order.id} {...order} />);

  if (queue.length > 0 && queue.length <= 4) {
    return (
      <section id="pendingOrders" className="card orders">
        <div className="header">
          <h1>Pending orders</h1>
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
              <th>Order Nº</th>
              <th>Products</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{newOrder}</tbody>
        </table>
      </section>
    );
  } else if (queue.length > 4) {
    //filter the queue here to avoid displaying more than 4 orders

    return (
      <section className="card">
        <div className="header">
          <h1>Pending orders</h1>
        </div>
        <table
          style={{
            width: "100%",
            textAlign: "left",
            gap: "1em",
            fontSize: "0.9em",
            marginLeft: "0",
          }}
        >
          <thead>
            <tr>
              <th>Order Nº</th>
              <th>Products</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody
            style={{
              gap: "1em",
            }}
          >
            {slicedOrders}
          </tbody>
        </table>
      </section>
    );
  } else if (queue.length === 0) {
    return (
      <section className="card">
        <div className="header">
          <h1>Pending orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th
                style={{
                  fontSize: "0.9em",
                }}
              >
                No pending orders
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </section>
    );
  }
}
