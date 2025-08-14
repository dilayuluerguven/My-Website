import React from 'react';
import { Layout, Row, Col, Divider, Typography, Space } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  CodeOutlined, 
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  RocketOutlined
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Footer style={{ 
      background: '#fff',
      color: '#333',
      padding: '60px 20px 30px',
      boxShadow: '0 -5px 30px rgba(0, 0, 0, 0.05)',
      borderTop: '1px solid #f0f0f0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row justify="space-between" gutter={[40, 30]}>
          <Col xs={24} md={8}>
            <Space direction="vertical" size="middle">
              <Space align="center">
                <RocketOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                <Text strong style={{ fontSize: '20px' }}>Dilay Uluergüven</Text>
              </Space>
              <Text type="secondary" style={{ lineHeight: 1.6 }}>
                Modern ve kullanıcı dostu web çözümleri sunuyorum. UI/UX odaklı, performanslı ve ölçeklenebilir projeler geliştiriyorum.
              </Text>
            </Space>
          </Col>
          
          <Col xs={24} md={8}>
            <Space direction="vertical" size="middle">
              <Text strong style={{ fontSize: '18px' }}>Hızlı Linkler</Text>
              <Space direction="vertical" size="small">
                <Link href="#home" style={{ color: '#333', display: 'block', transition: 'all 0.3s' }}>
                  <HomeOutlined style={{ marginRight: '8px' }} /> Ana Sayfa
                </Link>
                <Link href="#about" style={{ color: '#333', display: 'block', transition: 'all 0.3s' }}>
                  <UserOutlined style={{ marginRight: '8px' }} /> Hakkımda
                </Link>
                <Link href="#projects" style={{ color: '#333', display: 'block', transition: 'all 0.3s' }}>
                  <CodeOutlined style={{ marginRight: '8px' }} /> Projeler
                </Link>
                <Link href="#contact" style={{ color: '#333', display: 'block', transition: 'all 0.3s' }}>
                  <MailOutlined style={{ marginRight: '8px' }} /> İletişim
                </Link>
              </Space>
            </Space>
          </Col>
          
          <Col xs={24} md={8}>
            <Space direction="vertical" size="middle">
              <Text strong style={{ fontSize: '18px' }}>Sosyal Medya</Text>
              <Space size="middle">
                <Link href="https://github.com" target="_blank" style={{ color: '#333', fontSize: '22px' }}>
                  <GithubOutlined />
                </Link>
                <Link href="https://linkedin.com" target="_blank" style={{ color: '#333', fontSize: '22px' }}>
                  <LinkedinOutlined />
                </Link>
                <Link href="https://twitter.com" target="_blank" style={{ color: '#333', fontSize: '22px' }}>
                  <TwitterOutlined />
                </Link>
              </Space>
              <Text type="secondary" style={{ lineHeight: 1.6 }}>
                Benimle sosyal medya üzerinden iletişime geçebilir veya projelerimi inceleyebilirsiniz.
              </Text>
            </Space>
          </Col>
        </Row>
        
        <Divider style={{ margin: '40px 0 30px', backgroundColor: '#f0f0f0' }} />
        
        <Row justify="space-between" align="middle">
          <Col>
            <Text type="secondary">
              &copy; {currentYear} Dilay Uluergüven. Tüm hakları saklıdır.
            </Text>
          </Col>
          <Col>
            <Space>
              <Link href="#" style={{ color: '#666' }}>Gizlilik Politikası</Link>
              <Link href="#" style={{ color: '#666' }}>Kullanım Şartları</Link>
            </Space>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}