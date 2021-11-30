export function Order(props){
  
    console.log(props)
    
  
    return (
      <tr>
          <td>
    <div className="circle">
      <p>{props.id}</p>
    </div>
  </td>
  
  
  <td className="quantity">
      <ul>
      <li>Row 26</li>
      <li>Row 26</li>
      <li>Row 26</li>
      </ul>
  </td>
           
            </tr>
    )
  }