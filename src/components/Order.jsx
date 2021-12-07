export function Order(props) {
  //we need to find if an element is duplicated

  const listProducts = props.order;
  const copyOfProducts = [...listProducts];

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

  const filteredProductList = newArray.filter((elm, index, self) => {
    return index === self.findIndex((e) => e.beerName === elm.beerName && e.amount === elm.amount);
  });

  const orderProducts = filteredProductList.map((product, index) => {
    return <li key={index}>{product.beerName}</li>;
  });
  const amountProducts = filteredProductList.map((product, index) => {
    return <li key={index}>{product.amount}</li>;
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
      <td>
        <ul> {amountProducts}</ul>
      </td>
    </tr>
  );
}
