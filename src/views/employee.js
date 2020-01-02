import React from 'react'
import locale from 'antd/es/date-picker/locale/zh_CN'
import '../style.css'
import { Card ,Form ,Row ,Col ,Input ,Button ,DatePicker ,Select ,Table } from 'antd'

const { Item } = Form
const { RangePicker } = DatePicker
const { Option } = Select

export default props => {

  const columns = [{
    title: '员工姓名',
    dataIndex: 'employee',
    key: 'employee'
  },{
    title: '证件号码',
    dataIndex: 'card',
    key: 'card'
  },{
    title: '出生日期',
    dataIndex: 'date',
    key: 'date'
  },{
    title: '雇主',
    dataIndex: 'employer',
    key: 'employer'
  },{
    title: '体检有效时间',
    dataIndex: 'actived',
    key: 'actived'
  },{
    title: '体检城市',
    dataIndex: 'city',
    key: 'city'
  },{
    title: '预约日期',
    dataIndex: 'time',
    key: 'time'
  },{
    title: '服务套餐计划',
    dataIndex: 'plan',
    key: 'plan'
  },{
    title: '体检状态',
    dataIndex: 'state',
    key: 'state'
  },{
    title: '支付状态',
    dataIndex: 'pay',
    key: 'pay'
  },{
    title: '支付金额',
    dataIndex: 'money',
    key: 'money'
  },{
    title: '备注',
    dataIndex: 'desc',
    key: 'desc'
  }]

  const data = [{
    employee: '张三',
    card: 'ID39817458',
    date: '1988.12.12',
    employer: '李四',
    actived: '2018.12.12-2019.12.12',
    city: '上海',
    time: '2018.12.12',
    plan: '安泰体检套餐A',
    state: '已预约',
    pay: '已支付',
    money: '￥350.00',
    desc: '测试预约记录',
    key: 1
  },{
    employee: '王五',
    card: 'ID39819527',
    date: '1992.10.25',
    employer: '李四',
    actived: '2018.10.23-2019.12.12',
    city: '北京',
    time: '2018.12.12',
    plan: '安泰体检套餐B',
    state: '已预约',
    pay: '已支付',
    money: '￥460.00',
    desc: '测试预约记录',
    key: 2
  }]

  return(
    <Card style={{ padding: 50,paddingTop: 30 }}>
      <Form layout="horizontal">
        <Row gutter={24}>
          
          <Col span={7}>
            <Item label="部门名称" style={{ display: 'flex' }}>
              <Input />
            </Item>
          </Col>
          
          <Col span={7}>
            <Item label="员工证件" style={{ display: 'flex' }}>
              <Input />
            </Item>
          </Col>
          <Col span={7}>
            <Item label="体检预约日期" style={{ display: 'flex' }}>
              <RangePicker locale={locale}/>
            </Item>
          </Col>
          <Col span={7}>
            <Item label="默认城市" style={{ display: 'flex' }}>
              <Select style={{ width: 161 }}>
                <Option value="1">上海</Option>
                <Option value="2">北京</Option>
              </Select>
            </Item>
          </Col>
          <Col span={7}>
            <Item label="员工姓名" style={{ display: 'flex' }}>
              <Input />
            </Item>
          </Col>
          <Col span={7}>
            <Item label="预约创建日期" style={{ display: 'flex' }}>
              <RangePicker locale={locale}/>
            </Item>
          </Col>
          <Col span={7}>
            <Item label="体检状态" style={{ display: 'flex' }}>
              <Select style={{ width: 161 }}>
                <Option value="1">良好</Option>
                <Option value="2">很好</Option>
              </Select>
            </Item>
          </Col>
          <Col span={7}>
            <Item label="预约城市" style={{ display: 'flex' }}>
              <Select style={{ width: 161 }}>
                <Option value="1">上海</Option>
                <Option value="2">北京</Option>
              </Select>
            </Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right',marginBottom: 20 }}>
            <Button type="primary" style={{ marginLeft: 8 }}>查询</Button>
            <Button style={{ marginLeft: 8 }}>清空</Button>
            <Button type="primary" style={{ marginLeft: 8 }}>导出</Button>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} dataSource={data}/>
    </Card>
  )
}