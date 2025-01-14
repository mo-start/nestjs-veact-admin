import React from 'react'
import { Button, Form, Select, Divider, Space, Radio, FormInstance } from 'antd'
import * as Icon from '@ant-design/icons'
import { publishStates } from '@/constants/publish'
import { articleOrigins } from '@/constants/article/origin'
import { articlePublics } from '@/constants/article/public'
import { articleLanguages } from '@/constants/article/language'
import { StateFormModel } from '.'

const requiredRule = {
  message: '必选',
  required: true
}

export interface StateFormProps {
  form: FormInstance<StateFormModel>
  submitting: boolean
  onSubmit(): void
}
export const StateForm: React.FC<StateFormProps> = (props) => {
  return (
    <Form
      scrollToFirstError={true}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 13, offset: 1 }}
      colon={false}
      form={props.form}
    >
      <Form.Item required={true} name="state" label="发布状态" rules={[requiredRule]}>
        <Select
          placeholder="文章发布状态"
          options={publishStates.map((state) => {
            return {
              value: state.id,
              label: (
                <Space>
                  {state.icon}
                  {state.name}
                </Space>
              )
            }
          })}
        />
      </Form.Item>
      <Form.Item required={true} name="origin" label="文章来源" rules={[requiredRule]}>
        <Select
          placeholder="文章来源"
          options={articleOrigins.map((state) => {
            return {
              value: state.id,
              label: (
                <Space>
                  {state.icon}
                  {state.name}
                </Space>
              )
            }
          })}
        />
      </Form.Item>
      <Form.Item required={true} name="public" label="公开类型" rules={[requiredRule]}>
        <Select
          placeholder="文章公开类型"
          options={articlePublics.map((state) => {
            return {
              value: state.id,
              label: (
                <Space>
                  {state.icon}
                  {state.name}
                </Space>
              )
            }
          })}
        />
      </Form.Item>
      <Form.Item required={true} name="lang" label="内容语言" rules={[requiredRule]}>
        <Select
          placeholder="文章语言"
          options={articleLanguages.map((state) => {
            return {
              value: state.id,
              label: (
                <Space>
                  {state.icon}
                  {state.name}
                </Space>
              )
            }
          })}
        />
      </Form.Item>
      <Form.Item required={true} name="disabled_comments" label="文章评论" rules={[requiredRule]}>
        <Radio.Group style={{ width: '100%' }}>
          <Radio.Button value={false} style={{ width: '50%' }}>
            <Space size="small">
              <Icon.CheckCircleOutlined /> 允许
            </Space>
          </Radio.Button>
          <Radio.Button value={true} style={{ width: '50%' }}>
            <Space size="small">
              <Icon.StopOutlined /> 禁止
            </Space>
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Divider />
      <Button
        type="primary"
        block={true}
        icon={<Icon.CheckOutlined />}
        loading={props.submitting}
        onClick={props.onSubmit}
      >
        提交
      </Button>
    </Form>
  )
}
