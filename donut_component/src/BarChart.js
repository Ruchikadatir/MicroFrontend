import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function BarCharts(props) {
  let inputObject = props.location.state;
  console.log("Bar Chart data from API: ", inputObject);
  // Sample data
  const data = inputObject.data;
  //   [
  //     { name: "A", x: 12, y: 23, z: 122 },
  //     { name: "B", x: 22, y: 3, z: 73 },
  //     { name: "C", x: 13, y: 15, z: 32 },
  //     { name: "D", x: 44, y: 35, z: 23 },
  //     { name: "E", x: 35, y: 45, z: 20 },
  //     { name: "F", x: 62, y: 25, z: 29 },
  //     { name: "G", x: 37, y: 17, z: 61 },
  //     { name: "H", x: 28, y: 32, z: 45 },
  //     { name: "I", x: 19, y: 43, z: 93 },
  //   ];

  return (
    <>
      <h1 className="text-heading">Bar Chart Using Rechart</h1>
      <BarChart width={400} height={500} data={data}>
        <CartesianGrid />
        <XAxis dataKey={inputObject.fill} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pct_X" stackId="a" fill={inputObject.fill[0].fill} />
        <Bar dataKey="pct_Y" stackId="a" fill={inputObject.fill[1].fill} />
      </BarChart>
    </>
  );
}
