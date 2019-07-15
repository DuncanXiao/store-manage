import { Table, Button, Popconfirm, Tag } from 'antd';

const { CheckableTag } = Tag;
const columns = [
  {
    title: '产品名',
    dataIndex: 'productName',
  },
  {
    title: '价格',
    dataIndex: 'price',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    render: (text, record) =>
      this.state.dataSource.length >= 1 ? (
        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
          <a href="javascript:;">Delete</a>
        </Popconfirm>
      ) : null,
  },
];

class ProductTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const { productList } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={productList} />
      </div>
    );
  }
}
export default ProductTable;