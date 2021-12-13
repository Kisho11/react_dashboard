// import React from "react";
// import { Row, Col } from 'antd';
// import Paid from "./PaidToDate/PaidToDate.js"
// import General from "./General/General.js"
// import Payment from "./Payment/Payments.js";
// const Project=()=>{
//     return(

//     <div style={{margin:20}}>
//     <Row><Paid/></Row>
//     <br/>
//    <div  style={{display:"flex",width:"100%",paddingRight:20}}>
//    <General/><div style={{paddingRight:30}}></ div>
//    <Payment/>
//     </div>
//     </div>     
//     );
// }

// export default Project

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Project.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SearchOutlined,
  FileSearchOutlined,
  FileOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import Paid from './PaidToDate/PaidToDate.js';
import General from './General/General.js';
import Payment from './Payment/Payments.js';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider className="site-layout-background" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={this.state.collapsed ? "hide" : MenuFoldOutlined}>
      
          <img src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg" alt="" className="logo" />
          <h1 className="profile_name">My Profile</h1>
          </div>
          <div className={this.state.collapsed ? "show" : "hide"}>

          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<BarChartOutlined />}>
              Scoring
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              Documents
            </Menu.Item>
            <Menu.Item key="4" icon={<SearchOutlined />}>
              Research matrix
            </Menu.Item>
            <Menu.Item key="5" icon={<FileSearchOutlined />}>
              Fact finding
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              Budject
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background"  >
               {/* style={{ padding: 10 }}> */}


            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          <h1 className="TopHeading">My Profile</h1>
          </Header>

          <Content
            // className="site-layout-background"
            style={{
           
              padding: 20,
 
            }}
          >
              <div  style={{display:"flex",width:"100%",paddingRight:20,marginBottom:10}}>
       
              <Paid/>
              </div>
      
            <div  style={{display:"flex",width:"100%",paddingRight:20}}>
            <General/><div style={{paddingRight:10}}></ div>
            <Payment/>
    
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, document.getElementById('container'));
export default SiderDemo
