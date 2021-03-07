/*https://ant.design/components/form/*/

import React, { useState } from 'react';

import { Card, Form, Input } from 'antd';
import Code from '../Code';

const layout = {
  labelCol: { span: 2 },
};

interface IData {
  firstName: string | undefined;
  lastName: string | undefined;
}

function InputChange() {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<IData>({
    firstName: '',
    lastName: '',
  });
  const handleText = (e: any | undefined) => {
    setText(e.target.value);
  };
  const handleObject = (e: any) => {
    const { name, value } = e.target;
    setData((state) => ({ ...state, [name]: value }));
  };
  return (
    <>
      <Card title="Input Text Change" bordered={false}>
        <Form {...layout} name="basic">
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
        <Form {...layout} name="basic">
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
