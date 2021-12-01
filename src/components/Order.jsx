import { useState } from "react";
import { Product } from "./Product.jsx";
export function Order(props) {
  //we need to find if an element is duplicated
  
  const listProducts = props.order;
  const copyOfProducts = [...listProducts];
  //const [product, setAmount] = useState([]);
  /* const copyProducts =  listProducts.filter(function(item, pos, self){
    return self.indexOf(item) ==pos;
  }); 
  console.log("copy is "+copyProducts)
  if(listProducts.length > copyProducts.length){

  }*/
  const newArray = listProducts.map((product) => {
    let counter = 0;
    copyOfProducts.map((copy) => {
      if (copy === product) {
        counter++;
      }
    });
    const newBeer = {
      beerName: product,
      amount: counter,
    };
    return { beerName: product, amount: counter };
  });

  console.log(typeof newArray, newArray);

  const filteredProductList = [...new Set(newArray)];
  console.log("last list " + filteredProductList);

  const orderProducts = props.order.map((product, index) => {
    return <li key={index}>{product}</li>;
  });

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
      <td>
        <ul> {orderProducts}</ul>
      </td>
    </tr>
  );
}
