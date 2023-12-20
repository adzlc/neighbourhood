"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { type PieChartType } from "~/data/dashboard-typings";

const defaultColors = [
  "#8BC1F7",
  "#BDE2B9",
  "#A2D9D9",
  "#B2B0EA",
  "#F9E0A2",
  "#F4B678",
  "#C9190B",
  "#B8BBBE",
  "#004B95",
  "#38812F",
  "#005F60",
  "#3C3D99",
  "#F0AB00",
  "#C46100",
  "#470000",
  "#8A8D90",
];

const DashboardPieChart = ({
  data,
  colors,
}: {
  data: PieChartType[];
  colors?: string[];
}) => {
  if (colors == undefined) {
    colors = defaultColors;
  }
  const renderCustomizedLabel = ({
    percent,
    index,
  }: {
    percent: number;
    index: number;
  }) => {
    const name = data[index]?.name;
    const nameLabel = name ? `${name} : ` : "";
    return `${nameLabel}${(percent * 100).toFixed(0)}%`;
  };

  return (
    <>
      <ResponsiveContainer width="90%" height={300} className="overflow-auto">
        <PieChart>
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
              <Cell key={`cell-${index}`} fill={colors![index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default DashboardPieChart;
