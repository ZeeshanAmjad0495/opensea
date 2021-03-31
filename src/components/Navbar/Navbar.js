import {
  Layout as AntLayout,
  Menu,
  Breadcrumb,
  Input,
  Avatar,
  Radio,
} from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  SearchOutlined,
  StarFilled,
  TagFilled,
  TableOutlined,
} from '@ant-design/icons';

import { TabsData } from './TabsData';

import openSealogo from '../../assets/opensea-logo.webp';
import './Navbar.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
const { SubMenu } = Menu;
const { Header, Content, Sider } = AntLayout;

const Layout = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getCards() {
      try {
        const results = await axios.get(
          'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=2000'
        );
        const data = [...results.data.assets];
        setCards(data);
        console.log(data[0].collection.image_url);
        console.log(results.data.assets);
      } catch (error) {
        console.log(error);
      }
    }
    getCards();
  }, []);
  return (
    <AntLayout>
      <Header className="header">
        <div className="logo">
          <img src={openSealogo} alt="logo"></img>
          <div className="title">OpenSea</div>
        </div>
        <div className="search-bar">
          <SearchOutlined />
          <Input placeholder="Search items, collections and accounts" />
        </div>
        <div className="tabs">
          <Menu mode="horizontal">
            {TabsData.map(({ id, title }) => {
              return <Menu.Item key={id}>{title}</Menu.Item>;
            })}
          </Menu>
        </div>
        <Avatar icon={<UserOutlined />} />
      </Header>
      <AntLayout>
        <Sider width={400} className="site-AntLayout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              className="submenu-1"
              key="sub1"
              icon={<StarFilled />}
              title="Status"
            >
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a" className="btn">
                  Buy Now
                </Radio.Button>
              </Radio.Group>
              <Radio.Group defaultValue="b" buttonStyle="solid">
                <Radio.Button value="b" className="btn">
                  On Auction
                </Radio.Button>
              </Radio.Group>
              <Radio.Group defaultValue="c" buttonStyle="solid">
                <Radio.Button value="c" className="btn">
                  New
                </Radio.Button>
              </Radio.Group>
              <Radio.Group defaultValue="d" buttonStyle="solid">
                <Radio.Button value="d" className="btn">
                  Has Offers
                </Radio.Button>
              </Radio.Group>
            </SubMenu>
            <SubMenu key="sub2" icon={<TableOutlined />} title="Collections">
              <div className="sub-search-bar">
                <SearchOutlined />
                <Input placeholder="Search items, collections and accounts" />
              </div>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<TagFilled />} title="On Sale In">
              <div className="sub-search-bar">
                <SearchOutlined />
                <Input placeholder="Search items, collections and accounts" />
              </div>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <AntLayout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-AntLayout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {cards.map(card => {
              return (
                <Card
                  key={card.image_url}
                  imageUrl={card.image_url}
                  name={card.name}
                />
              );
            })}
          </Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
