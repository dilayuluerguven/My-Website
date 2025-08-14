import { Form, Input, Button, Typography, Row, Col, Divider, Space } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined, GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    form.resetFields();
  };

  return (
   <section id="contact" style={{ padding: '80px 20px', background: '#f0f2f5' }}>
  <Title level={2} style={{ fontSize: '36px', marginBottom: '40px', textAlign: 'center' }}>İletişim</Title>
  
  <Row  gutter={[30, 40]} justify="center" align="stretch" >
    <Col xs={24} md={10}>
      <div style={{ 
        background: 'white', 
        padding: '30px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Title level={3} style={{ marginBottom: '20px' }}>İletişim Bilgileri</Title>
        
        <div style={{ marginBottom: '20px' }}>
          <PhoneOutlined style={{ color: '#1890ff', fontSize: '20px', marginRight: '10px' }} />
          <Text strong style={{ fontSize: '16px' }}>Telefon:</Text>
          <Text style={{ display: 'block', marginLeft: '30px' }}>0 (507) 900 2276</Text>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <MailOutlined style={{ color: '#1890ff', fontSize: '20px', marginRight: '10px' }} />
          <Text strong style={{ fontSize: '16px' }}>Email:</Text>
          <Text style={{ display: 'block', marginLeft: '30px' }}>uluerguven245@gmail.com</Text>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <HomeOutlined style={{ color: '#1890ff', fontSize: '20px', marginRight: '10px' }} />
          <Text strong style={{ fontSize: '16px' }}>Adres:</Text>
          <Text style={{ display: 'block', marginLeft: '30px' }}>43030 / Kütahya</Text>
        </div>

        <Divider style={{ margin: '20px 0' }} />

        <div style={{ marginTop: 'auto' }}> 
          <Space direction="vertical" size="middle">
            <Text strong style={{ fontSize: '18px' }}>Sosyal Medya</Text>
            <Space size="middle">
              <Link href="https://github.com/dilayuluerguven" target="_blank" rel="noopener noreferrer" style={{ color: '#333', fontSize: '22px' }}>
                <GithubOutlined />
              </Link>
              <Link href="https://linkedin.com/in/dilay-uluergüven-2b484125b" target="_blank" rel="noopener noreferrer" style={{ color: '#333', fontSize: '22px' }}>
                <LinkedinOutlined />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333', fontSize: '22px' }}>
                <InstagramOutlined />
              </Link> 
            </Space>
            <Text type="secondary" style={{ lineHeight: 1.6 }}>
              Benimle sosyal medya üzerinden iletişime geçebilir veya projelerimi inceleyebilirsiniz.
            </Text>
          </Space>
        </div>
      </div>
    </Col>

    <Col xs={24} md={10}>
      <div style={{ 
        background: 'white', 
        padding: '30px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        height: '100%' 
      }}>
        <Title level={3} style={{ marginBottom: '20px' }}>Bana Ulaşın</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item 
            label="İsim" 
            name="name"
            rules={[{ required: true, message: 'Lütfen adınızı giriniz!' }]}
          >
            <Input placeholder="Adınızı girin" />
          </Form.Item>
          <Form.Item 
            label="Email" 
            name="email"
            rules={[
              { required: true, message: 'Lütfen email adresinizi giriniz!' },
              { type: 'email', message: 'Geçerli bir email adresi giriniz!' }
            ]}
          >
            <Input placeholder="Email adresinizi girin" />
          </Form.Item>
          <Form.Item 
            label="Mesaj" 
            name="message"
            rules={[{ required: true, message: 'Lütfen mesajınızı giriniz!' }]}
          >
            <Input.TextArea rows={4} placeholder="Mesajınızı girin" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Gönder
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Col>
  </Row>
</section>
  );
};

export default Contact;