import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DashboardOne from './DashbaordOne';
import DashboardTwo from './DashboardTwo';
const { Header, Content, Footer } = Layout;
const App = () => {
  const [tab, setTab] = useState('1');
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[tab]}
          items={[
            {
              key: '1',
              label: <span onClick={() => setTab('1')}>One</span>,
            },
            {
              key: '2',
              label: <span onClick={() => setTab('2')}>Two</span>,
            },
            {
              key: '3',
              label: <span onClick={() => setTab('3')}>Three</span>,            
            }
          ]}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {
            tab === '1' && <DashboardOne/>
          }
          {
            tab === '2' && <DashboardTwo/>
          }
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Posabit Dashboard ©2023 Created by Posabit
      </Footer>
    </Layout>
  );
};
export default App;
