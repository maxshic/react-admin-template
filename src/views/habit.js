import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card ,Table } from 'antd'

const columns = [{
  title: '日期',
  dataIndex: 'date',
  key: 'date'
},{
  title: '电话预约人数',
  dataIndex: 'phone',
  key: 'phone'
},{
  title: '邮件预约人数',
  dataIndex: 'mail',
  key: 'mail'
},{
  title: '网站预约人数',
  dataIndex: 'site',
  key: 'site'
},{
  title: '已预约人数',
  dataIndex: 'all',
  key: 'all'
},{
  title: '项目人数',
  dataIndex: 'project',
  key: 'project'
},{
  title: '预约率',
  dataIndex: 'rate',
  key: 'rate'
}]

class Habit extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [{
        date: '2018-12-12',
        phone: '335',
        mail: '310',
        site: '234',
        all: '999',
        project: '80%',
        rate: '90%',
        key: 1
      },{
        date: '预约习惯',
        phone: '50%',
        mail: '30%',
        site: '20%',
        all: '999',
        project: '-',
        rate: '-',
        key: 2
      }]
    }
  }

  getOption = () => {
    return {
      title: {
        text: '预约习惯统计表',
        subtext: '2016-05-25',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        bottom: 'bottom',
        data: ['网站预约', '电话预约', '邮件预约']
      },
      series: [
        {
          name: '预约来源',
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '网站预约' },
            { value: 310, name: '电话预约' },
            { value: 234, name: '邮件预约' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

  render() {
    return (
      <Card style={{ padding: 50, paddingTop: 30 }}>
        <ReactEcharts
          style={{ width: 918, height: 400, margin: 'auto' ,marginBottom: 20 }}
          option={this.getOption()}
        />
        <Table columns={columns} dataSource={this.state.data} pagination={false}/>
      </Card>
    )
  }
}

export default Habit