import React, { Component } from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  Tooltip,
  LineSeries
} from 'react-jsx-highcharts'
import {
  createRandomData
  // addDataPoint
} from '../dataHelpers'

class LineChart extends Component {
  constructor(props) {
    super(props)

    const now = Date.now()
    this.state = {
      data1: createRandomData(now),
      data2: createRandomData(now)
    }
  }

  componentDidMount() {
    this.handleStartLiveUpdate()
  }

  updateLiveData = () => {
    // const { data1, data2 } = this.state
    // this.setState({
    //   data1: addDataPoint(data1),
    //   data2: addDataPoint(data2)
    // })
  }

  handleStartLiveUpdate = e => {
    e && e.preventDefault()
    this.setState({
      liveUpdate: window.setInterval(this.updateLiveData, 1000)
    })
  }

  render() {
    const { data1, data2 } = this.state

    return (
      <div className="LineChart">
        <HighchartsChart
          plotOptions={{
            series: {
              lineWidth: 1.5,
              marker: {
                radius: 2
              }
            }
          }}
        >
          <Chart />

          <Title>Dynamically updating data</Title>

          <Legend>
            <Legend.Title>Legend</Legend.Title>
          </Legend>

          <XAxis
            type="datetime"
            labels={{ enabled: false }}
            crosshair={{
              enabled: true
            }}
          />
          <Tooltip shared crosshairs split valueSuffix="°C" />
          <YAxis>
            <LineSeries name="Temperatura" data={data1} />
            <LineSeries name="Humidade" data={data2} />
          </YAxis>
        </HighchartsChart>
      </div>
    )
  }
}

export default withHighcharts(LineChart, Highcharts)
