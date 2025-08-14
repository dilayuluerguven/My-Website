import { Button, Card, Row, Col, Form, Input } from 'antd';
import Contact from '../pages/Contact';

export default function Home() {
  return (
    <div>
      <section id="home" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#001529', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Hoşgeldiniz!</h1>
        <p style={{ fontSize: '20px', maxWidth: '600px', marginBottom: '30px' }}>
          Benim siteme hoşgeldiniz. Burada projelerimi ve bilgilerimi görebilirsiniz.
        </p>
        <Button type="primary" size="large" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          Daha Fazla
        </Button>
      </section>

      <section id="about" style={{ padding: '100px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Hakkımda</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px' }}>
          Ben bir yazılım mühendisiyim. React ve Ant Design ile modern web uygulamaları geliştiriyorum.
          UI/UX ve responsive tasarıma önem veriyorum.
        </p>
      </section>

      <section id="projects" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>Projelerim</h2>
        <Row gutter={[16, 16]} justify="center">
          {['Proje 1', 'Proje 2', 'Proje 3', 'Proje 4'].map((proj, i) => (
            <Col key={i} xs={24} sm={12} md={8} lg={6}>
              <Card title={proj} bordered hoverable>
                Bu proje hakkında kısa bir açıklama.
              </Card>
            </Col>
          ))}
        </Row>
      </section>
          <section>
            <Contact/>
          </section>
      {/* <section id="contact" style={{ padding: '100px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>İletişim</h2>
        <Form layout="vertical" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Form.Item label="İsim" name="name">
            <Input placeholder="Adınızı girin" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email adresinizi girin" />
          </Form.Item>
          <Form.Item label="Mesaj" name="message">
            <Input.TextArea rows={4} placeholder="Mesajınızı girin" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Gönder</Button>
          </Form.Item>
        </Form>
      </section> */}
    </div>
  );
}
