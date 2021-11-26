import Chart from 'react-apexcharts'
import React from 'react'

export default function RangeBarChart() {
  const state = {
    options: {
      stroke: {
        curve: 'smooth',
      },
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        data: [
          {
            x: 'TEAM A',
            y: [1358447400000, 1358620200000],
          },
          {
            x: 'TEAM B',
            y: [1358447400000, 1358620200000],
          },
        ],
      },
    ],
  }

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="rangebar"
        width="300"
      />
    </div>
  )
}
