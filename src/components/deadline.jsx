import { useState } from "react";
import "../App.css";
export default function Deadline() {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [today, setToday] = useState();
  const [resultDate, setResultDate] = useState(0);
  let dateToday = new Date();
  // console.log("start" + start);
  // console.log("end" + end);

  const calculate = () => {
    let dateStart = new Date(start);
    let dateEnd = new Date(end);
    let diffTime = 0;
    let diffTimeToday = 0;
    let result = 0;
    let resultToday = 0;
    diffTime = dateEnd.getTime() - dateStart.getTime();
    result = diffTime / (1000 * 60 * 60 * 24);
    setResultDate(Math.round(result));

    diffTimeToday = dateEnd.getTime() - dateToday.getTime();
    resultToday = diffTimeToday / (1000 * 60 * 60 * 24);
    setToday(Math.round(resultToday));
  };

  return (
    <>
      <h3 className="text-8xl text-rose-500 m-10">Deadline</h3>
      <form>
        <div className="m-4">
          <h3 className="text-amber-500 text-3xl">Enter your Starting Date:</h3>
          <input
            className="text-3xl"
            type="date"
            id="dateInput"
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className="m-4">
          <h3 className="text-amber-500 text-3xl">Enter your Ending Date:</h3>
          <input
            className="text-3xl"
            type="date"
            id="endDateInput"
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
      </form>
      <button
        className=" text-3xl cursor-pointer m-6 hover:bg-rose-500 hover:text-white bg-white text-rose-500 active:text-white active:bg-rose-500 relative overflow-hidden rounded-md   px-5 py-2.5   duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 "
        onClick={calculate}
      >
        Calculate
      </button>
      <h3 className="text-6xl text-rose-500">Total Days:</h3>
      <h3 className="text-6xl" onChange={calculate}>
        {resultDate} days
      </h3>
      <h1 className="text-3xl text-blue-300">67130605 พงศธร พิทักษ์วงศ์</h1>
      <h1 className="text-3xl text-blue-300">67130712 นำดาว ราชเมืองฝาง</h1>
      <h1 className="text-3xl text-blue-300">67230062 พีรวิชญ์ แพงศรี</h1>

      {/* <div  className="w-full m-10 h-10 bg-gray-200 rounded-full dark:bg-gray-700">
        <div style={{width:today}} class=" h-10 bg-blue-600 rounded-full dark:bg-rose-500">{today} days</div>
     </div> */}
    </>
  );
}
