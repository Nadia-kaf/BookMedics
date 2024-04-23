
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
    number: 50,
  },
  {
    name: 'Tues ',
    number: 30,
  },
  {
    name: 'Wed',
    number: 40,
  },
  {
    name: 'Thurs',
    number: 20,
  },
  {
    name: 'Fri',
    number: 10,
  },
  {
    name: 'Sat ',
    number: 35,
  },
  {
    name: 'Sun ',
    number: 9,
  },
];





export default function AppointmentB() {

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
        <Bar dataKey="number" barSize={20} fill="#FF5A5F" />
      </ComposedChart>
    );
  
}
