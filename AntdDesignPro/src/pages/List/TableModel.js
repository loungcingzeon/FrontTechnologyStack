import React, { PureComponent, Fragment } from 'react';
import { Card, message, Table, Button, Popconfirm, Modal } from 'antd';

class TableModel extends PureComponent{
  constructor(porps){
    super(porps);
    this.state = {
      visible: false,
      selectedRowKeys:[],   // 选中的状态数据
      selectedRows:[],      // 选中的数据列表
      sourcedata:[],        // 重新生成的数据
    }
  }

  // modal start
  showModal = () => {
    this.setState({
      visible: true,
    });

    // 遍历当前删除的剩下的数据，并获取key的值，设置在 selectedRowKeys 中 然后就可以回填数据选择状态
    const sourcedata = [...this.state.sourcedata].map((item, index) => item.key);
    this.setState({
      selectedRowKeys:sourcedata
    });

  }

  // 点击确定时，如果没有选择数据，那么就不能能关闭，如果选择了就可以关闭，并添把数据添加到表格中去
  handleOk = (e) => {
    console.log(e);
    if(this.state.selectedRowKeys.length){
      this.setState({
        sourcedata:this.state.selectedRows,
        visible: false,
      })
      message.success('选择成功');
    }else{
      this.setState({
        visible: true,
      });
      message.error('请选择数据');
    }
  }

  // 关闭
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  // Modal弹出层
  setShowModalTable = () => {
    return (
      <Modal
        title="Basic Modal"
        width={800}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        {this.modalTableData()}
      </Modal>
    );
  }


  // 弹出层的数据表格
  modalTableData = () => {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }];



    const { selectedRowKeys } = this.state;

    // 操作选择的数据
    const rowSelection = {
      selectedRowKeys,  // 重点：这是被赋值的状态选中
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({
          selectedRowKeys,    // 获取设置的状态
          selectedRows        // 获取选择中的数据
        });
      },
      getCheckboxProps: record => ({  // 设置不被选择的数据。并禁止选择
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      <Table rowSelection={rowSelection} rowKey={record => record.key} columns={columns} dataSource={data} />
    )
  }
  // modal end



  // 删除当前要删除的表格
  handleDelete = (key) => {
    const sourcedata = [...this.state.sourcedata];
    this.setState({ sourcedata: sourcedata.filter(item => item.key !== key) });
  }

  // 被添加的数据表内容
  tableData = () => {
    const { sourcedata } = this.state;

    const columns = [{
      title: 'No',
      dataIndex: 'key',
      //render: (text, record, index) => <a href="javascript:;">{record}</a>,
    }, {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }, {
      title: 'action',
      render: (text, record) => {
        return (
          this.state.selectedRows.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                <a href="javascript:;">Delete</a>
              </Popconfirm>
            ) : null
        );
      },
    }];

    return (
      <Table columns={columns} dataSource={sourcedata} rowKey={record => record.key}/>
    )
  }


  // 添加商品
  setBtn = () => {
    return (
      <Button onClick={this.showModal}>添加商品</Button>
    )
  }

  render(){
    return (
      <Fragment>
        <Card
          title={this.setBtn()}
          extra={<a href="#">More</a>}
        >
          {this.tableData()}

          {this.setShowModalTable()}
        </Card>
      </Fragment>
    )
  }
}

export default TableModel;
