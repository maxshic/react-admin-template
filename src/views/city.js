import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card, Table } from 'antd'

const columns = [{
  title: '城市',
  dataIndex: 'city',
  key: 'city'
}, {
  title: '员工总数',
  dataIndex: 'stuff',
  key: 'stuff'
}, {
  title: '预约人数',
  dataIndex: 'people',
  key: 'people'
},{
  title: '预约率',
  dataIndex: 'rate',
  key: 'rate'
}]

class City extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        city: '北京',
        stuff: 359,
        people: 224,
        rate: '62%',
        key: 1
      },{
        city: '广州',
        stuff: 1065,
        people: 885,
        rate: '83%',
        key: 2
      }]
    }
  }

  getOption = () => {
    return {
      title: {
        text: '各城市预约统计图表',
        subtext: '2016-05-25',
        x: 'center'
      },
      // legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['city' ,'stuff' ,'people'],
        source: [{
          city: '北京',
          stuff: 359,
          people: 224
        },{
          city: '广州',
          stuff: 1065,
          people: 885
        },{
          city: '上海',
          stuff: 451,
          people: 370
        }]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        { type: 'bar' },
        { type: 'bar' },
      ]
    }
  }

  render() {
    return (
      <Card style={{ padding: 50, paddingTop: 30 }}>
        <ReactEcharts
          style={{ width: 918, height: 400, margin: 'auto', marginBottom: 20 }}
          option={this.getOption()}
        />
        <Table columns={columns} dataSource={this.state.data} pagination={false} />
      </Card>
    )
  }
}

export default City