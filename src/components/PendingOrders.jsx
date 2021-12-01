export function PendingOrders(props) {
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
        <tr>
          <td>
            <div className="circle">
              <p>1</p>
            </div>
          </td>
          <td className="products">
            <ul>
              <li>Row 26</li>
              <li>Row 26</li>
              <li>Row 26</li>
            </ul>
          </td>
          <td className="quantity">
              <ul>
              <li>Row 26</li>
              <li>Row 26</li>
              <li>Row 26</li>
              </ul>
          </td>
          </tr>
          </tbody>
      </table>
    </section>
  );
}
