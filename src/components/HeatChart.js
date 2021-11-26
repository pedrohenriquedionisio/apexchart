import Chart from 'react-apexcharts'
import React from 'react'

export default function HeatChart() {
  const state = {
    options: {
      series: [
        {
          name: "Series 1",
          data: [{
            x: 'W1',
            y: 22
          }, {
            x: 'W2',
            y: 29
          }, {
            x: 'W3',
            y: 13
          }, {
            x: 'W4',
            y: 32
          }]
        },
        {
          name: "Series 2",
          data: [{
            x: 'W1',
            y: 43
          }, {
            x: 'W2',
            y: 43
          }, {
            x: 'W3',
            y: 43
          }, {
            x: 'W4',
            y: 43
          }]
        }
      ]
    }
  }

  return (
    <div>
      <Chart
        options={state.options}
        series={state.options.series}
        type="heatmap"
        width="300"
      />
    </div>
  )
}
