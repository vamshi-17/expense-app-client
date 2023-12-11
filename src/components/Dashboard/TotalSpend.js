import * as React from "react";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "../../axios";
import config from "../../config.json";

export default function PieActiveArc({ selectedMonth, selectedYear }) {
  const [data, setData] = useState([{ id: 0, value: 0, label: "" }]);

  const fetchData = async () => {
    let res = await axios.get(
      `${config.url}/dashboard/total?month=${selectedMonth}&year=${selectedYear}`
    );

    if(res.data[0]) {

      const dataWithColors = res.data.map(item => ({
        ...item,
        color : `hsl(${360 * Math.random()}, 80%, 50%)`
      }));

      setData(dataWithColors);
      //setData(res.data);
    } else {
        setData([{ id: 0, value: 0, label: "" }]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedMonth, selectedYear]);

  return (
    <div>
      <h1>Total </h1>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
            type: 'pie',
            itemStyle: {
              color: (params) => params.data.color,
            },
          },
        ]}
        height={200}
      />
    </div>
  );
}
