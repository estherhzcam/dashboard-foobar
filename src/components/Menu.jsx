export function Menu(props) {
  return (
    <section className="top_menu">
      <div className="logo">
        <h1>FooBar</h1>
      </div>
      <section className="menucardwrapper">
        <div className="menucard" id="time">
          <h1>Time until closure</h1>
          <h1 id="remaining_time">2:00</h1>
        </div>
        <div className="menucard" id="people">
          <h1>People in queue</h1>
          <h1 id="people_queue">{props.articles.queue.length}</h1>
        </div>
        <div className="menucard" id="sales">
          <h1>Sales</h1>
          <h1 id="sales">
            <span>30.000</span>DKK
          </h1>
        </div>
      </section>
    </section>
  );
}
