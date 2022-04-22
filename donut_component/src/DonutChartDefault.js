import React from "react";
import { PieChart, Pie, Legend } from "recharts";

export default function DonutChartDefault(props) {
  var data = [
    { name: "Group A", value: 700, fill: "#0088FE" },
    { name: "Group B", value: 300, fill: "#00C49F" },
    { name: "Group C", value: 300, fill: "#FFBB28" },
    { name: "Group D", value: 200, fill: "#FF8042" },
  ];
  var renderColorfulLegendText = function (value, entry) {
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {value}
      </span>
    );
  };

  return (
    <div>
      <PieChart width={800} height={400}>
        <Legend
          height={36}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          padding={5}
          formatter={renderColorfulLegendText}
        />
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {/* {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))} */}
        </Pie>
        {/* <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={0}
          endAngle={360}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          blendStroke
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> */}
      </PieChart>
    </div>
  );
}
