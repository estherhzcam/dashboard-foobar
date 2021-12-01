export function Product(props){
    console.log(props.product);
    const productObject = {...props};
    console.log(productObject)

    return (
        <li>Row 26</li>
    )
}

{/* <td className="products">
        <ul>{orderProducts}</ul>
      </td>

      <td className="quantity">
        <ul>
          <li>Row 26</li>
          <li>Row 26</li>
          <li>Row 26</li>
        </ul>
      </td> */}