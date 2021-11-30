export function PendingOrders(props) {
  return (
    <section className="card">
  
      <div clasName="header">        
        <h1>Pending orders</h1>
      </div>
      <table>
        <tr>
          <th>Order Nº</th>
          <th>Products</th>
          <th>Quantity</th>
        </tr>
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
         
      </table>
    </section>
  );
}
