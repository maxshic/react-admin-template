import React from 'react'
import locale from 'antd/es/date-picker/locale/zh_CN'
import '../style.css'
import { Card ,Form ,Row ,Col ,Input ,Button ,DatePicker ,Select ,Table } from 'antd'

const { Item } = Form
const { RangePicker } = DatePicker
const { Option } = Select

export default props => {

  const columns = [{
    title: '雇主',
    dataIndex: 'employer',
    key: 'employer'
  },{
    title: '建议类型',
    dataIndex: 'type',
    key: 'type'
  },{
    title: '建议主题',
    dataIndex: 'theme',
    key: 'theme'
  },{
    title: '员工工号',
    dataIndex: 'number',
    key: 'number'
  },{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },{
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone'
  },{
    title: '邮箱地址',
    dataIndex: 'mail',
    key: 'mail'
  },{
    title: '体检状态',
    dataIndex: 'state',
    key: 'state'
  },{
    title: '体检时间',
    dataIndex: 'time',
    key: 'time'
  },{
    title: '体检城市',
    dataIndex: 'city',
    key: 'city'
  },{
    title: '体检中心',
    dataIndex: 'center',
    key: 'center'
  }]

  const data = [{
    employer: '测试机构',
    type: '正面反馈',
    theme: '关于增加体检机构的建议',
    number: 'ET161998',
    name: '张三',
    phone: '1338861237',
    mail: 'david@aetna.com',
    state: '已预约',
    time: '2019-12-12',
    city: '上海',
    center: '慈铭体检长宁店',
    key: 1
  },{
    employer: '测试机构2',
    type: '正面反馈',
    theme: '关于增加体检机构的建议',
    number: 'ET161964',
    name: '李四',
    phone: '1338861285',
    mail: 'david@aetna.com',
    state: '未预约',
    time: '2019-12-12',
    city: '上海',
    center: '慈铭体检长宁店',
    key: 2
  }]

  return(
    <Card style={{ padding: 50,paddingTop: 30 }}>
      <Form layout="horizontal">
        <Row gutter={24}>
          <Col span={7}>
            <Item label="建议类型" style={{ display: 'flex' }}>
              <Select style={{ width: 160 }}>
                <Option value="1">类型1</Option>
                <Option value="2">类型2</Option>
              </Select>
            </Item>
          </Col>
          <Col span={7}>
            <Item label="员工姓名" style={{ display: 'flex' }}>
              <Input />
            </Item>
          </Col>
          <Col span={7}>
            <Item label="建议提交时间" style={{ display: 'flex' }}>
              <RangePicker locale={locale}/>
            </Item>
          </Col>
          
          <Col span={7}>
            <Item label="员工证件号码" style={{ display: 'flex' }}>
              <Input />
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