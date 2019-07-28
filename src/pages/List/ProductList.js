import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Button, Table } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './ProductList.less';

@connect(({ product, loading }) => ({
  products: product.list,
  loading: loading.models.rule,
}))
@Form.create()
class ProductList extends PureComponent {
  state = {
    selectedRowKeys: [],
  };

  columns = [
    {
      title: '产品名字',
      dataIndex: 'name',
    },
    {
      title: '价格',
      sorter: (a, b) => parseInt(a.price, 2) - parseInt(b.price, 2),
      dataIndex: 'price',
    },
    {
      title: '状态',
      dataIndex: 'published',
      sorter: a => (a.published === true ? -1 : 1),
      render: (published, record) => {
        const button = published ? (
          <Button type="primary" onClick={() => this.handlePublish(record)}>
            发布
          </Button>
        ) : (
          <Button onClick={() => this.handlePublish(record)}>未发布</Button>
        );
        return button;
      },
    },
  ];

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/fetchList',
      payload: {},
    });
  }

  handlePublish = record => {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/updateSave',
      payload: {
        ...record,
      },
    });
  };

  handleSearch = e => {
    e.preventDefault();
  };

  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
  };

  createProduct = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/create',
      payload: {},
    });
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  formateProduct = products => {
    return products.map((p, i) => ({ ...p, key: i }));
  };

  renderSearchFrom() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <Form.Item label="产品名字">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <Form.Item label="产品名字">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderTable = () => {
    const { products } = this.props;
    const { selectedRowKeys } = this.state;
    const formatedProducts = this.formateProduct(products);
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
    };
    return (
      <Table rowSelection={rowSelection} columns={this.columns} dataSource={formatedProducts} />
    );
  };

  render() {
    return (
      <PageHeaderWrapper title="产品列表">
        <Card bordered={false}>
          <div className={styles.productList}>
            <div className={styles.productListSearchFrom}>{this.renderSearchFrom()}</div>
            <div className={styles.productListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.createProduct()}>
                新建
              </Button>
            </div>
          </div>
        </Card>
        <Card bordered={false}>
          <div className={styles.productList}>{this.renderTable()}</div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default ProductList;
