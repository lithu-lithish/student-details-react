import "./chart.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect } from "react";
import { useState } from "react";
// import { WeekData, MonthData } from ''
import { WeekData, MonthData } from "../../dummyData";
export default function Chart({ title, dataKey }) {
  const [type, setType] = useState("month");

  const [data, setData] = useState([]);
  useEffect(() => {
    if (type === "week") setData(WeekData);
    if (type === "month") setData(MonthData);
  }, [type]);

  return (
    <div className="chart">
      {/* <h3 className="chartTitle">{title}</h3> */}
      {/* <h3 className="">{title}</h3> */}
      <h3
        style={{
          fontWeight: "700",
          fontSize: "34px",
          lineHeight: "42px",
          letterSpacing: "-0.02em",
          color: "#011627",
        }}
      >
        452
      </h3>

      <h3
        style={{
          fontWeight: "580",
          fontSize: "16.7px",
          lineHeight: "24px",

          letterSpacing: "-0.02em",
          color: "#BFC5C9",
        }}
      >
        total count
      </h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#808A93"
            interval={0}
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
          />

          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#6AD2FF"
            strokeWidth="3.3px"
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
