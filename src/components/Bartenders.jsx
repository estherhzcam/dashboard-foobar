export function Bartenders(props){
    
    const dannie = props.articles.bartenders[3];
    const jonas = props.articles.bartenders[2];
    const klaus = props.articles.bartenders[1];
    const peter = props.articles.bartenders[0];
    const statusAdjusted = (status)=>{
        if (status === "startServing" || status == "pourBeer" || status == "reserveTap" || status == "releaseTap"){
            return <p style={{
                borderRadius: "13px",
                padding: "0.3em 1em",
                backgroundColor: "yellow",
                width: "max-content",
            }}>Serving</p>
        } else if (status == "receivePayment"){
            return <p style={{
                borderRadius: "13px",
                padding: "0.3em 1em",
                backgroundColor: "green",
                width: "max-content",
            }}>Getting payed</p>
        } else if (status == "waiting"){
            return <p style={{
                borderRadius: "13px",
                padding: "0.3em 1em",
                backgroundColor: "grey",
                width: "max-content",
            }}>Waiting</p>
        } else if (status == "replaceKeg"){
            return <p style={{
                borderRadius: "13px",
                padding: "0.3em 1em",
                backgroundColor: "orange",
                width: "max-content",
            }}>Changing keg</p>
        } else {
            return <p style={{
                borderRadius: "13px",
                padding: "0.3em 1em",
                backgroundColor: "white",
                width: "max-content",
            }}>{status}</p>

        }
    }
    return(
        <section className="card">
            <div className="header">
                <h1>Bartenders</h1>
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
                  <td id="status">{statusAdjusted(jonas.statusDetail)}</td>
                  <td id="ordernumber">{jonas.servingCustomer}</td>
              </tr>
              <tr>
                  <td><img src="src\assets\bartenders\dannie.png" style={{width:"30px"}} /></td>
                  <td>{dannie.name}</td>
                  <td id="status">{statusAdjusted(dannie.statusDetail)}</td>
                  <td id="ordernumber">{dannie.servingCustomer}</td>
              </tr>
              <tr>
                  <td><img src="src\assets\bartenders\klaus.png" style={{width:"30px"}} /></td>
                  <td>{klaus.name}</td>
                  <td id="status">{statusAdjusted(klaus.statusDetail)}</td>
                  <td id="ordernumber">{klaus.servingCustomer}</td>
              </tr>
              <tr>
                  <td><img src="src\assets\bartenders\peter.png" style={{width:"30px"}} /></td>
                  <td>{peter.name}</td>
                  <td id="status">{statusAdjusted(peter.statusDetail)}</td>
                  <td id="ordernumber">{peter.servingCustomer}</td>
              </tr>
              </tbody>
           </table>
            </section>
    )
    }