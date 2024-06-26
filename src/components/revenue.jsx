import React from 'react';

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon ',
    amt: 2400,
  },
  {
    name: 'Tues ',
    amt: 2210,
  },
  {
    name: 'Wed',
    amt: 2290,
  },
  {
    name: 'Thurs',
    amt: 2000,
  },
  {
    name: 'Fri',
    amt: 2181,
  },
  {
    name: 'Sat ',
    amt: 2500,
  },
  {
    name: 'Sun ',
    amt: 2100,
  },
];





export default function Revenue() {

  // render()
  //  {
    return (
      <ComposedChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amt" barSize={20} fill="#413ea0" />
      </ComposedChart>
    );
  
}
