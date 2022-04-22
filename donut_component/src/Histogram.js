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

export default function HistogramCharts(props) {
  let inputObject = props.location.state;
  console.log("Histogram Chart data from API: ", inputObject);

  const data = [
    {
      label: "750 - 800",
      freq: 60,
      value: 775.0,
    },
    {
      label: "600 - 650",
      freq: 58,
      value: 625.0,
    },
    {
      label: "450 - 500",
      freq: 54,
      value: 475.0,
    },
    {
      label: "-200 - -150",
      freq: 0,
      value: -175.0,
    },
  ];
  //   [
  //     {
  //       name: 0,
  //       uv: 4000,
  //       pv: 2400,
  //       amt: 2400,
  //     },
  //     {
  //       name: 1,
  //       uv: 3000,
  //       pv: 1398,
  //       amt: 2210,
  //     }
  //   ];

  return (
    <>
      <h1 className="text-heading">Histogram Chart Using Rechart</h1>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="label" scale="band" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </>
  );
}
