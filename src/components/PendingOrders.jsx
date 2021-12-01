import { Order } from "./Order.jsx";
export function PendingOrders(props) {
  //let newOrder;
  const queue = props.articles.queue;
  const newOrder = queue.map((order)=>(<Order key={order.id} {...order}/>))

  if (queue.length > 0)
    return (
      <section className="card">
        <div className="header">
          <h1>Pending orders</h1>
        </div>
        <table style={{
          width: "100%",
          textAlign:"left",
          gap: "1em",
          fontSize: "0.9em",  
          marginLeft: "0",       
        }}>
          <thead>
            <tr>
              <th>Order Nº</th>
              <th>Products</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {newOrder}
          </tbody>
        </table>
      </section>
    );
  else
    return (
      <section className="card">
        <div className="header">
          <h1>Pending orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>No pending orders</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </section>
    );
}

/* 
function GetProducts(order){
return(
  <td className="products">
  <ul>
    <li>Row 26</li>
    <li>Row 26</li>
    <li>Row 26</li>
  </ul>
</td>
)
} */
