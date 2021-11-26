import './App.css'

import AreaChart from "./components/AreaChart"
import BarChart from "./components/BarChart"
import CandlestickChart from './components/CandlestickChart'
import DonutChart from './components/DonutChart'
import HeatChart from './components/HeatChart'
import LineChart from "./components/LineChart"
import RadarChart from './components/RadarChart'
import TreeChart from './components/TreeChart'


function App() {
  return (
    <div className="container">
      <LineChart />
      <BarChart />
      <AreaChart />
      <CandlestickChart />
      <HeatChart />
      <TreeChart />
      <DonutChart />
      <RadarChart />
    </div>
  )
}

export default App
