import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { submissionRows } from "../../datatablesource";

var jan = 0, feb = 0, mar = 0, apr = 0, may = 0, june = 0, july = 0, aug = 0, sept = 0, oct = 0, nov =0, dec =0;
 
  for(var i =0; i<submissionRows.length; i++){
    if(submissionRows[i].last_submission_time.includes("Jan")){
      jan = jan +1;
    }
    if(submissionRows[i].last_submission_time.includes("Feb")){
      feb = feb +1;
    }
    if(submissionRows[i].last_submission_time.includes("Mar")){
      mar++;
    }
    if(submissionRows[i].last_submission_time.includes("Apr")){
      apr++;
    }
    if(submissionRows[i].last_submission_time.includes("May")){
      may++;
    }
    if(submissionRows[i].last_submission_time.includes("June")){
      june++;
    }
    if(submissionRows[i].last_submission_time.includes("Jul")){
      july++;
    }
    if(submissionRows[i].last_submission_time.includes("Aug")){
      aug++;
    }
    if(submissionRows[i].last_submission_time.includes("Sept")){
      sept++;
    }
    if(submissionRows[i].last_submission_time.includes("Oct")){
      oct++;
    }
    if(submissionRows[i].last_submission_time.includes("Nov")){
      nov++;
    }
    if(submissionRows[i].last_submission_time.includes("Dec")){
      dec++;
    }
  } 

const data = [
  { name: 0, Total: 0},
  { name: "Jan", Total: jan},
  { name: "Feb", Total: feb },
  { name: "March", Total: mar },
  { name: "April", Total: apr },
  { name: "May", Total: may },
  { name: "June", Total: june },
  { name: "July", Total: july },
  { name: "Aug", Total: aug},
  { name: "Sept", Total: sept },
  { name: "Oct", Total: oct },
  { name: "Nov", Total: nov },
  { name: "Dec", Total: dec }

];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};


export default Chart;
