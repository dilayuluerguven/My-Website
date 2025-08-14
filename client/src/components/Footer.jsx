import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  CodeOutlined, 
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined
} from '@ant-design/icons';

const { Footer } = Layout;

export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Footer style={{ 
      background: '#001529', 
      color: '#fff',
      padding: '40px 20px',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <Row justify="center" gutter={[40, 20]}>
        <Col xs={24} md={8}>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
            Dilay Uluergüven
          </div>
          <p style={{ opacity: 0.8 }}>
            Modern ve kullanıcı dostu web çözümleri sunuyoruz.
          </p>
        </Col>
        
        <Col xs={24} md={8}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
            Hızlı Linkler
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <a href="#home" style={{ color: '#fff', margin: '5px 0', transition: 'color 0.3s' }}>
              <HomeOutlined /> Ana Sayfa
            </a>
            <a href="#about" style={{ color: '#fff', margin: '5px 0', transition: 'color 0.3s' }}>
              <UserOutlined /> Hakkımda
            </a>
            <a href="#projects" style={{ color: '#fff', margin: '5px 0', transition: 'color 0.3s' }}>
              <CodeOutlined /> Projeler
            </a>
            <a href="#contact" style={{ color: '#fff', margin: '5px 0', transition: 'color 0.3s' }}>
              <MailOutlined /> İletişim
            </a>
          </div>
        </Col>
        
        <Col xs={24} md={8}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
            Sosyal Medya
          </div>
          <div style={{ fontSize: '24px' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px', transition: 'color 0.3s' }}>
              <GithubOutlined />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px', transition: 'color 0.3s' }}>
              <LinkedinOutlined />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px', transition: 'color 0.3s' }}>
              <TwitterOutlined />
            </a>
          </div>
        </Col>
      </Row>
      
      <Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '20px 0' }} />
      
      <div style={{ textAlign: 'center', opacity: 0.7 }}>
        &copy; {currentYear} My Website. Tüm hakları saklıdır.
      </div>
    </Footer>
  );
}