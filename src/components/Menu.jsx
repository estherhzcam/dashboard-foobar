export function Menu(props){
    let currentTime = props.articles.timestamp;
    let myDate = new Date(currentTime);
    let myHour = myDate.getHours();
    let myMinutes = myDate.getMinutes();
    let remainingMinutes = 60-myMinutes
    let remainingHours = 22 - 1 - myHour;
   
    //console.log(remainingMinutes)    

    return(
        <section className="top_menu">
            <div className="logo">
                <h1>FooBar</h1>
            </div>
            <section className="menucardwrapper">
            <div className="menucard" id="time">
                <h1>Time until closure</h1>
                <h1 id="remaining_time">{myMinutes > 0 ? remainingHours : myHour}:{myMinutes > 0 ? remainingMinutes : "00"}</h1>
            </div>
            <div className="menucard" id="people">
            <h1>People in queue</h1>
                <h1 id="people_queue">13</h1>
            </div>
            <div className="menucard" id="sales">
            <h1>Sales</h1>
                <h1 id="sales"><span>30.000</span>DKK</h1>
            </div>
            </section>
        </section>
    )
    }