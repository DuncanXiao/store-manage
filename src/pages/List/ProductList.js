import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './ProductList.less';

@connect(({ product, loading }) => ({
  product,
  loading: loading.models.rule,
}))
@Form.create()
class ProductList extends PureComponent {
  state = {
    selectedRows: [],
  }

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;
  }

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
  }

  renderSearchFrom() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSearch} layout='inline'>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <Form.Item label='产品名字'>
              {getFieldDecorator('name')(<Input placeholder='请输入' />)}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <Form.Item label='产品名字'>
              {getFieldDecorator('name')(<Input placeholder='请输入' />)}
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
    )
  }

  createProduct = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/create',
      payload: {},
    });
  }

  render() {
    console.log(this.props)
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
        <div>hello</div>
      </PageHeaderWrapper>
    )
  }
}

export default ProductList;