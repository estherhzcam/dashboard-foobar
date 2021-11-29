export function Bartenders(props){
    return(
        <section className="card">
            <div clasName="header">
                <h1>Bartenders</h1>
            </div>
           <table>
              <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Order Nº</th>
              </tr>
              <tr>
                  <td><img></img></td>
                  <td>Jonas</td>
                  <td id="status">Pouring beer</td>
                  <td id="ordernumber">123</td>
              </tr>
              <tr>
                  <td><img></img></td>
                  <td>Dannie</td>
                  <td id="status">Pouring beer</td>
                  <td id="ordernumber">123</td>
              </tr>
              <tr>
                  <td><img></img></td>
                  <td>Peter</td>
                  <td id="status">Pouring beer</td>
                  <td id="ordernumber">123</td>
              </tr>
              <tr>
                  <td><img></img></td>
                  <td>Klaus</td>
                  <td id="status">Pouring beer</td>
                  <td id="ordernumber">123</td>
              </tr>
           </table>
            </section>
    )
    }