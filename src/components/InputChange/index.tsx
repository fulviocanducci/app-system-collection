import React from 'react';
import { Card, Form, Input } from 'antd';
import Code from '../Code';
import { useGlobalText, useGlobalData } from '../../contexts/Global';

function InputChange() {
  const { text, setText } = useGlobalText();
  const { data, setData } = useGlobalData();

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleObject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((state) => ({ ...state, [name]: value }));
  };

  return (
    <>
      <Card title="Input Text Change" bordered={false}>
        <Form
          layout="vertical"
          {...{ labelCol: { span: 3 } }}
          name="basic"
          initialValues={{ text }}
        >
          <Form.Item label="Write Text" name="text">
            <Input
              onChange={handleText}
              autoFocus={true}
              value={text}
              placeholder="Write Text"
            />
          </Form.Item>
        </Form>
        <Code value={{ text }} />
      </Card>
      <Card title="Input Object Change" bordered={false}>
        <Form
          layout="vertical"
          {...{ labelCol: { span: 3 } }}
          name="basic"
          initialValues={{ firstName: data.firstName, lastName: data.lastName }}
        >
          <Form.Item label="First Name" name="firstName">
            <Input
              onChange={handleObject}
              value={data.firstName}
              name="firstName"
              placeholder="Write First Name"
            />
          </Form.Item>

          <Form.Item label="Last Name" name="lastName">
            <Input
              onChange={handleObject}
              value={data.lastName}
              name="lastName"
              placeholder="Write Last Name"
            />
          </Form.Item>
        </Form>
        <Code value={data} />
      </Card>
    </>
  );
}

export default InputChange;

/*https://ant.design/components/form/*/
