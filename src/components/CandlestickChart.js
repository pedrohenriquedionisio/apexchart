import Chart from 'react-apexcharts'
import React from 'react'

export default function CandlestickChart() {
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
          [1538856000000, 6593.34, 6600, 6582.63, 6600],
          [1538856900000, 6595.16, 6604.76, 6590.73, 6593.86],
        ],
      },
    ],
  }

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="candlestick"
        width="300"
      />
    </div>
  )
}
