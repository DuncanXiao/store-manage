import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Spin,
} from 'antd';
import styles from './ProductDetail.less';

const FormItem = Form.Item;
const { TextArea } = Input;
// {
//   'uuid|+1': 1,
//   storeUuid: '1',
//   name: 'product-1',
//   description: '好吃',
//   price: '10',
//   description: '那是一种内在的东西，他们到达不了，也无法触及的',
//   type: '香辣',
//   sellOut: false,
//   sale: '100',
//   imageUrl: '',
//   published: true,
// },
@connect(({ project, product, loading }) => {
  return {
  product,
  updateLoading: loading.effects['product/updateSave'],
}})
@Form.create()
class ProductDetail extends PureComponent {

  updateSave = (e) => {
    const { dispatch, form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'product/updateSave',
          payload: e.target.name === 'published' ? { ...values, published: true } : values,
        });
      }
    });
  }

  render() {
    const { updateLoading, form: { getFieldDecorator, getFieldValue } } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    return (
      <Spin spinning={updateLoading === true}>
        <PageHeaderWrapper
          title="产品信息"
          content="编辑当前产品信息，若点击发布按钮则会将当前产品更新客户端"
        >
          <Card bordered={false}>
            <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
              <FormItem {...formItemLayout} label='名字'>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请输入名字',
                    },
                  ],
                })(<Input placeholder='给产品起个名字' />)}
              </FormItem>
              <FormItem {...formItemLayout} label={
                <span>
                  描述
                  <em className={styles.optional}>
                  （选填）
                  </em>
                </span>
                }
              >
                {getFieldDecorator('description')(
                  <TextArea
                    style={{ minHeight: 32 }}
                    placeholder='描述产品信息'
                    rows={4}
                  />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label='价格'
              >
                {getFieldDecorator('price')(
                  <InputNumber
                    placeholder='请输入价格'
                    min={0}
                    max={1000}
                  />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label='是否销售完'
              >
                {getFieldDecorator('sellOut', {
                    initialValue: false,
                  })(
                    <Radio.Group>
                      <Radio value={false}>
                        有库存
                      </Radio>
                      <Radio value={true}>
                        没库存
                      </Radio>
                    </Radio.Group>
                  )}
              </FormItem>
              <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
                <Button type="primary" name='published' onClick={this.updateSave}>
                  发布
                </Button>
                <Button type="primary" htmlType="submit" onClick={this.updateSave}>
                  保存
                </Button>
                <Button style={{ marginLeft: 8 }}>
                  返回
                </Button>
              </FormItem>
            </Form>
          </Card>
        </PageHeaderWrapper>
      </Spin>
    );
  }
}

export default ProductDetail;
