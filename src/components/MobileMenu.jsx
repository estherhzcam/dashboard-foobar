export function MobileMenu() {
    return(
        <section className="mobileMenu" >
            <a href="#pendingOrders"><div className="menuOption">
               <img src="src/assets/icons/orders_black.svg" alt="Orders info" />
                <p>Orders</p>
            </div></a>
            <a href="#serving"> <div className="menuOption">
           <img src="src/assets/icons/bartenders_black.svg" alt="Bartenders info" />
                <p>Bartenders</p>
            </div></a>
            <a href="#levels"><div className="menuOption">
            <img src="src/assets/icons/barrel_black.svg" alt="Stock info" />
                <p>Stock</p>
            </div></a>
            <a href="#salesbytype"><div className="menuOption">
           <img src="src/assets/icons/sales_black.svg" alt="Sales info" />
                <p>Sales</p>
            </div></a>
            <a href="#queue"><div className="menuOption">
            <img src="src\assets\icons\queue_black.svg" alt="Clients in queue info" />
                <p>Queue</p>
            </div></a>

        </section>
    )
}