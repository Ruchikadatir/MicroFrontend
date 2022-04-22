import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function LineCharts(props) {
  let inputObject = props.location.state;
  console.log("Line Chart data from API: ", inputObject);
  // Sample chart data
  const pdata = inputObject.data;

  return (
    <>
      <h1 className="text-heading">Line Chart Using Rechart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} margin={{ right: 50 }}>
          <CartesianGrid />
          <XAxis dataKey="label" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line
            dataKey="X"
            stroke={inputObject.fill[0].fill}
            activeDot={{ r: 8 }}
          />
          <Line
            dataKey="Y"
            stroke={inputObject.fill[1].fill}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
