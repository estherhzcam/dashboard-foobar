import {useState} from "react";
import { Product } from "./Product.jsx";
export function Order(props) {
  //we need to find if an element is duplicated
  /* const orderProducts = props.order.map((product, index) => {
    return <li key={index}>{product}</li>;
  }); */
  const listProducts = props.order;
  const [uniqueProducts, setProducts] = useState([]);
  const newProducts =  {
    beer: "",
    quantity: 1
  }
  const orderProducts = props.order.map((product, index) => {
    return (<li key={index}>{product}</li>)})
  
  return (
    <tr>
      <td>
        <div
          className="circle"
          style={{
            borderRadius: "50%",
            backgroundColor: "#1C2232",
            height: "30px",
            width: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              margin: "0",
              color: "#F8F9FB",              
              fontWeight: "700",
            }}
          >
            {props.id}
          </p>
        </div>
      </td>
      <td><ul> {orderProducts}</ul></td>     
    </tr>
  ); 
}
