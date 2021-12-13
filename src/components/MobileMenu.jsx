import bartendersUrl from '../assets/bartenders/bartenders_black.svg';
import ordersUrl from '../assets/icons/orders_black.svg';
import stockUrl from '../assets/icons/barrel_black.svg';
import salesUrl from '../assets/icons/sales_black.svg';
import queueUrl from '../assets/icons/queue_black.svg';

export function MobileMenu() {
    return(
        <section className="mobileMenu" >
            <a href="#pendingOrders"><div className="menuOption">
               <img src={ordersUrl} alt="Orders info" />
                <p>Orders</p>
            </div></a>
            <a href="#serving"> <div className="menuOption">
           <img src={bartendersUrl} alt="Bartenders info" />
                <p>Bartenders</p>
            </div></a>
            <a href="#levels"><div className="menuOption">
            <img src={stockUrl} alt="Stock info" />
                <p>Stock</p>
            </div></a>
            <a href="#salesbytype"><div className="menuOption">
           <img src={salesUrl} alt="Sales info" />
                <p>Sales</p>
            </div></a>
            <a href="#queue"><div className="menuOption">
            <img src={queueUrl} alt="Clients in queue info" />
                <p>Queue</p>
            </div></a>

        </section>
    )
}