import React from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

export default function DonutChart(props) {
  let inputObject = props.location.state;
  console.log("Input from host: ", inputObject, JSON.stringify(inputObject));

  inputObject = JSON.parse(JSON.stringify(inputObject));

  var dataDefault = inputObject.data;
  var COLORS = inputObject.fill;

  var renderColorfulLegendText = function (value, entry) {
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {dataDefault[value].label}
      </span>
    );
  };

  return (
    <div>
      <h1 className="text-heading">Donut Chart Using Rechart</h1>
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
        <Tooltip />
        <Pie
          data={dataDefault}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {dataDefault.map((entry, index) => (
            <Cell
              key={`cell-${index}`} //COLORS[index % COLORS.length].label
              fill={COLORS[index % COLORS.length].fill}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
