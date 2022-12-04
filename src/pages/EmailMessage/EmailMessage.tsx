import React, { useState } from "react";

import { Button, Col, Form, Input, Layout, Menu, message, Modal, Row, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";

import { sendEmailMessage } from "../../api/emailMessage";
import { EmailMessageRequest } from "../../api/types";

const { Header, Content } = Layout;

const initialValues: EmailMessageRequest = {
  from: "",
  to: "",
  cc: "",
  subject: "",
  importance: "",
  content: "",
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const options = [
  {
    value: "LOW",
    label: "Low",
  },
  {
    value: "NORMAL",
    label: "Normal",
  },
  {
    value: "HIGH",
    label: "High",
  },
];

export default function EmailMessage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values: EmailMessageRequest) => {
    sendEmailMessage(values)
      .then((isOk: boolean) => {
        if (isOk) form.resetFields();
      })
      .catch((error) => console.log(error));

    message.success("Successfully send an email");
  };

  const onFinishFailed = () => {
    message.error("Submit failed");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home" onClick={() => navigate("/")}>
              Home
            </Menu.Item>
            <Menu.Item key="history" onClick={() => navigate("/history")}>
              History
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ backgroundColor: "white" }}>
          <Row justify="center" style={{ marginTop: 20 }}>
            <Col xs={22} sm={20} md={18} lg={14} xl={12} xxl={10}>
              <Form
                form={form}
                layout="vertical"
                initialValues={initialValues}
                validateMessages={validateMessages}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item label="From" name="from" rules={[{ required: true }, { type: "email" }]}>
                  <Input size="middle" />
                </Form.Item>
                <Form.Item label="To" name="to" rules={[{ required: true }, { type: "email" }]}>
                  <Input size="middle" />
                </Form.Item>
                <Form.Item
                  label="Cc"
                  name="cc"
                  rules={[
                    { required: false },
                    {
                      validator: (_, value) => {
                        if (value.length === 0) return Promise.resolve();
                        if (
                          /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9\\-]+\.)+([a-zA-Z0-9\-\\.]+)+(,([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9\\-]+\.)+([a-zA-Z0-9\-.]+))*$/.test(
                            value
                          )
                        ) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject("Separate emails with comma (,)");
                        }
                      },
                    },
                  ]}
                >
                  <Input size="middle" />
                </Form.Item>
                <Form.Item label="Subject" name="subject" rules={[{ required: true }]}>
                  <Input size="middle" />
                </Form.Item>
                <Form.Item name="importance" label="Complaint type" rules={[{ required: true }]}>
                  <Select options={options} />
                </Form.Item>
                <Form.Item name="content" label="Content" rules={[{ required: false }]}>
                  <Input.TextArea size="middle" />
                </Form.Item>
                <Row justify="center">
                  <Space>
                    <Col>
                      <Form.Item style={{ textAlign: "center" }}>
                        <Button size="middle" type="primary" htmlType="submit">
                          Send
                        </Button>
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item style={{ textAlign: "center" }}>
                        <Button size="middle" type="primary" htmlType="button" onClick={showModal}>
                          Cancel
                        </Button>
                        <Modal title="Cancel sending email" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                          <p>Are you sure you want to cancel this email?</p>
                        </Modal>
                      </Form.Item>
                    </Col>
                  </Space>
                </Row>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
