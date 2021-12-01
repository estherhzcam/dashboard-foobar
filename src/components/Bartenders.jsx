export function Bartenders(props){
    
    const dannie = props.articles.bartenders[3];
    const jonas = props.articles.bartenders[2];
    const klaus = props.articles.bartenders[1];
    const peter = props.articles.bartenders[0];
    return(
        <section className="card">
            <div className="header">
                <h1>Bartenders</h1>
            </div>
           <table>
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
                  <td><img src="src\assets\bartenders\jonas.png" style={{width:"30px"}} /></td>
                  <td>{jonas.name}</td>
                  <td id="status">{jonas.statusDetail}</td>
                  <td id="ordernumber">{jonas.servingCustomer}</td>
              </tr>
              <tr>
                  <td><img src="src\assets\bartenders\dannie.png" style={{width:"30px"}} /></td>
                  <td>{dannie.name}</td>
                  <td id="status">{dannie.statusDetail}</td>
                  <td id="ordernumber">{dannie.servingCustomer}</td>
              </tr>
              <tr>
                  <td><img src="src\assets\bartenders\klaus.png" style={{width:"30px"}} /></td>
                  <td>{klaus.name}</td>
                  <td id="status">{klaus.statusDetail}</td>
                  <td id="ordernumber">{klaus.servingCustomer}</td>
              </tr>
              <tr>
                  <td><img src="src\assets\bartenders\peter.png" style={{width:"30px"}} /></td>
                  <td>{peter.name}</td>
                  <td id="status">{peter.statusDetail}</td>
                  <td id="ordernumber">{peter.servingCustomer}</td>
              </tr>
              </tbody>
           </table>
            </section>
    )
    }