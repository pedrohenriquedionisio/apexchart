import Chart from "react-apexcharts";
import React from 'react'

export default function DonutChart() {
  const state = {
    chartOptions: {
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
    },
    series: [44, 55, 41, 17, 15],
  }

  return (
    <div>
      <Chart
        options={state.chartOptions}
        series={state.series}
        type="donut"
        width="300"
      />
    </div>
  )
}
