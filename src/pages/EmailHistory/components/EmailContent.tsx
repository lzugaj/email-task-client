import React from "react";

import { Breadcrumb, Button, Card, Col, Layout, Menu, Row, Typography } from "antd";

import { useNavigate, useParams } from "react-router-dom";

import { useEmailMessageById } from "../../../hooks/useEmailMessageById";
import { dateFormatter } from "../../../utils/DateUtil";

const { Header, Content } = Layout;

export default function EmailContent() {
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const emailMessage = useEmailMessageById(id);

  return (
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
        <Breadcrumb style={{ margin: 20 }}>
          <Breadcrumb.Item onClick={() => navigate("/history")}>
            <Button htmlType="button">Back</Button>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row justify="center" style={{ marginTop: 30 }}>
          <Col xs={22} sm={20} md={18} lg={14} xl={14} xxl={14}>
            <Typography.Text>From: {emailMessage.from}</Typography.Text>
          </Col>
          <Col xs={22} sm={20} md={18} lg={14} xl={14} xxl={14}>
            <Typography.Text>To: {emailMessage.to}</Typography.Text>
          </Col>
          <Col xs={22} sm={20} md={18} lg={14} xl={14} xxl={14}>
            <Typography.Text>Cc: {emailMessage.cc}</Typography.Text>
          </Col>
          <Col xs={22} sm={20} md={18} lg={14} xl={14} xxl={14}>
            <Typography.Text>Importance: {emailMessage.importance}</Typography.Text>
          </Col>
          <Col style={{ marginTop: 20 }} xs={22} sm={20} md={18} lg={14} xl={14} xxl={14}>
            <Card title={emailMessage.subject} bordered={false}>
              <p>{dateFormatter(emailMessage.sendAt)}</p>
              <p style={{ overflowWrap: "break-word" }}>{emailMessage.content}</p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
