export function Menu(props) {

  // in order to find the remaining time until the bar closes, we'll extract the day, month and year we're in
  let currentTime = props.articles.timestamp;

  const today = new Date(currentTime);
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

// based on that, we'll get the closing time of the bar and we'll be able to substract the closing time from the current time in the same format (milliseconds from the 1st of january 1970 )
  const closingDate = new Date(year, month, day, 22);
  const closingTime = closingDate.getTime();
  const remainingTime = closingTime - currentTime;

  //based on that we'll calculate how many hours and minutes left until the bar closes.
  const timeUntilClosure = hourFromMs(remainingTime);

  //calculate total revenue
  const archive = props.archive;
  const beerAmountCopy = [...archive];
  let beerAmounts = {};

  beerAmountCopy.forEach((e) => {
    for (var key in e.accumulated) {
      if (!(key in beerAmounts)) {
        beerAmounts[key] = {
          ...e.accumulated[key],
        };

        beerAmounts[key].price =
          e.accumulated[key].price * e.accumulated[key].amount;
      } else {
        beerAmounts[key].price +=
          e.accumulated[key].price * e.accumulated[key].amount;

        beerAmounts[key].amount += e.accumulated[key].amount;
      }
    }
  });

  let beerAmountArr = [];
  for (let key in beerAmounts) {
    beerAmountArr.push({
      name: key,
      data: beerAmounts[key],
    });
  }

  let totalRevenueArr = [];
  beerAmountArr.forEach((e) => {
    totalRevenueArr.push(e.data.price);
  });

  let totalRevenue = 0;
  totalRevenue = totalRevenueArr.reduce((a, b) => a + b);

  return (
    <section className="top_menu">
      <div className="logo">
        <img src="src/assets/logo-white.svg" alt="logo"></img>
      </div>
      <section className="menucardwrapper">
        <div className="menucard" id="time">
          <h1>The bar closes in</h1>
          {
            <h1 id="remaining_time">
              {remainingTime > 0 ? timeUntilClosure : "0 h 0 min"}
            </h1>
          }
        </div>
        <div className="menucard" id="people">
          <h1>People in queue</h1>
          <h1 id="people_queue">{props.articles.queue.length}</h1>
        </div>
        <div className="menucard" id="sales">
          <h1>Sales</h1>
          <h1 id="sales">
            <span>{totalRevenue}</span> DKK
          </h1>
        </div>
      </section>
    </section>
  );
}

function hourFromMs(time) {
  let minutes = Math.floor((time / (1000 * 60)) % 60),
    hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  if (hours <= 0 && minutes <= 0) {
    return "0 h 0 m";
  } else {
    return hours + "h " + minutes + "min ";
  }
}
