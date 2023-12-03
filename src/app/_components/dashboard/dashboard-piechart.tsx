"use client";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { type PieChartType } from "~/data/dashboard-typings";


const DashboardPieChart = ( { data }: { data: PieChartType[]}) => {
  const colors = [
    "#8884d8",
    "#FA8072",
    "#AF69EE",
    "#3DED97",
    "#3AC7EB",
    "#F9A603",
  ];
  const renderCustomizedLabel = ({
    percent,
    index,
  }: {
    percent: number;
    index: number;
  }) => {
    const name = data[index]?.name;
    const nameLabel = name ? `${name} : ` : "";
    return (
      `${nameLabel}${(percent * 100).toFixed(0)}%`
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            fill="#8884d8"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default DashboardPieChart;
