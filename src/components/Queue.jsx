import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useState, useEffect, memo } from "react";

//we'll be fetching the data in the app.jsx but for the time being, until we unify, I'll fetch here.

export const QueueArchive = memo(function Queue(props) {
  const queue = props.archive;
  const [data, setData] = useState([])


  //if we had more data we'd have to find out the range of data based on the timestamp of opening and closing time
  const openingTime = new Date(2021, 11, 8, 12).getTime();
  const closingTime = new Date(2021, 11, 8, 22).getTime();
 

  //we need to clean the data
  useEffect(() => {async function cleaning() {
    const dataCleaned = await cleanData(queue, openingTime, closingTime);
    console.log("cleaned", dataCleaned);
    setData(dataCleaned);}
    cleaning()
  }, []);

  return (
    <section id="queue" className="card">
      <div className="header">
        <h1>People in queue by hour</h1>
      </div>
      <div style={{ width: "90%" }}>
        <ResponsiveContainer width="100%" height={250} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <LineChart width={290} height={120} data={data} margin={{ top: 60, right: 3, bottom: 0, left: -20 }}>
            <Line type="monotone" dataKey="queue" stroke="#573254" strokeWidth={3} />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
});

function cleanData(data, opening, closing) {
  console.log("cleaning");
  //we receive a huge array of objects, we need to clean it.
  //1) we'll map through it and get the orders between the 12:00 and 22:00 of December 8th;
  //2) We'll extract the queue at o'clock hours
  //3) We need to recreate the array with correct hour format
  class OrderInQueue {
    constructor(queue, time) {
      this.queue = queue;
      this.time = time;
    }
  }
  const formatedArray = data.map((order) => {
    return new OrderInQueue(order.queue, Date.parse(order.timestamp));
  });
  const filteredArray = formatedArray.filter((order) => parseInt((order.time / (1000 * 60)) % 60) == 0);

  console.log(filteredArray);
  // we need to adapt the hour format

  //we'll need to fix the hour difference
  const lastArray = filteredArray.map((order) => {
    const hour = parseInt((order.time / (1000 * 60 * 60)) % 24) + 1;
    const minutes = parseInt((order.time / (1000 * 60)) % 60);
    const minutesFormated = minutes < 10 ? "0" + minutes : minutes;
    return new OrderInQueue(order.queue, `${hour}:${minutesFormated}`);
  });
  return lastArray;
}

export default QueueArchive;
