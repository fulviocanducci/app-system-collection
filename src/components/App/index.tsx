import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import About from '../About';
import Home from '../Home';
import InputChange from '../InputChange';

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Layout.Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/input-change">Input Change</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/input-change">
                <InputChange />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          <a
            href="https://ant.design/components/form/"
            target="_blank"
            rel="noreferrer"
            title="Ant Design"
          >
            Ant Design Site
          </a>
        </Layout.Footer>
      </Layout>
    </Router>
  );
};

export default App;
