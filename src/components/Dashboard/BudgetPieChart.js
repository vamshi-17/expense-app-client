import * as React from "react";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "../../axios";
import config from "../../config.json";

export default function PieActiveArc({ selectedMonth, selectedYear }) {
  const [data, setData] = useState([{ id: 0, value: 0, label: "", color: "grey" }]);

  const fetchData = async () => {
    let res = await axios.get(
      `${config.url}/dashboard/budget?month=${selectedMonth}&year=${selectedYear}`
    );

    if(res.data[0]) {

      //PieChart Colors added manually
      const dataWithColors = res.data.map(item => ({
        ...item,
        color : `hsl(${360 * Math.random()}, 80%, 50%)`
      }));

      // setData(res.data);
      setData(dataWithColors);
    } else {
        // setData([{ id: 0, value: 0, label: "" }]);
        setData([{ id: 0, value: 0, label: "", color: 'grey' }]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedMonth,selectedYear]);

  return (
    <div>
      <h1>Budget</h1>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
            type: 'pie',
            itemStyle: {
              color: (params) => params.data.color, // use the color property from data
            },
          },
        ]}
        height={200}
      />
    </div>
  );
}
