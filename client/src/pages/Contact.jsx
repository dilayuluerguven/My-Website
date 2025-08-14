import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    form.resetFields();
  };

  return (
    <section id="contact" style={{ padding: '100px 20px', background: '#f0f2f5', textAlign: 'center' }}>
      <Title level={2} style={{ fontSize: '36px', marginBottom: '40px' }}>İletişim</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: '500px', margin: '0 auto' }}
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
          <Button type="primary" htmlType="submit" size="large">
            Gönder
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Contact;