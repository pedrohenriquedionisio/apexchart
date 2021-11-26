import Chart from 'react-apexcharts'
import React from 'react'

export default function TreeChart() {
  const state = {
    options: {
      series: [
        {
          data: [
            {
              x: 'New Delhi',
              y: 218,
            },
            {
              x: 'Kolkata',
              y: 149,
            },
            {
              x: 'Mumbai',
              y: 184,
            },
            {
              x: 'Ahmedabad',
              y: 55,
            },
            {
              x: 'Bangaluru',
              y: 84,
            },
            {
              x: 'Pune',
              y: 31,
            },
            {
              x: 'Chennai',
              y: 70,
            },
          ],
        },
      ],
    },
  }

  return (
    <div>
      <Chart
        options={state.options}
        series={state.options.series}
        type="treemap"
        width="300"
      />
    </div>
  )
}
