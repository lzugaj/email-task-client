import React from "react";

import { Button, Col, Layout, List, Menu, Row } from "antd";

import { useNavigate } from "react-router-dom";

import { EmailMessageResponse } from "../../api/types";
import { useEmailMessages } from "../../hooks/useEmailMessages";
import { dateFormatter } from "../../utils/DateUtil";
import { stringFormatter } from "../../utils/StringUtil";

const { Header, Content } = Layout;

export default function EmailHistory() {
  const navigate = useNavigate();
  const emailMessages = useEmailMessages();

  const onClick = (id: string) => {
    navigate(`/history/${id}`);
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
              <List
                itemLayout="horizontal"
                dataSource={emailMessages}
                renderItem={(item: EmailMessageResponse) => (
                  <List.Item>
                    <List.Item.Meta
                      title={`${item.subject} (${dateFormatter(item.sendAt)})`}
                      description={stringFormatter(item?.content)}
                    />
                    <div>
                      <Button size="middle" type="primary" htmlType="button" onClick={() => onClick(item?.id)}>
                        More
                      </Button>
                    </div>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
