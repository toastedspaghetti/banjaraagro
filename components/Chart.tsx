"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface DataPoint {
  year: string;
  milkCollected: number;
}

const data: DataPoint[] = [
  { year: "2019", milkCollected: 120 },
  { year: "2020", milkCollected: 150 },
  { year: "2021", milkCollected: 180 },
  { year: "2022", milkCollected: 200 },
  { year: "2023", milkCollected: 230 },
];

const MilkCollectionChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: "Litres (thousands)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="milkCollected" stroke="#29bb89" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MilkCollectionChart;
