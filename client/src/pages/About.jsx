import { Typography, Row, Col, Divider, Avatar, Card } from "antd";
import { 
  UserOutlined, 
  CodeOutlined, 
  DatabaseOutlined, 
  RocketOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  CalendarOutlined,
  LinkedinOutlined,
  GithubOutlined,
  BookOutlined,
  LaptopOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <section
      id="about"
      className="py-5 bg-light"
      style={{
        padding: "80px 20px",
        background: "#f0f2f5",
      }}
    >
      <div className="container" style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
      }}>
        <div className="text-center mb-5">
          <Title level={2} className="display-4 mb-3" style={{ fontSize: "36px", marginBottom: "10px" }}>
            Hakkımda
          </Title>
          <Divider className="mx-auto" style={{ 
            maxWidth: "100px", 
            borderColor: "#1890ff",
          }} />
        </div>

        <Row gutter={[40, 40]} align="top">
          <Col xs={24} md={8}>
            <Card
              className="h-100 text-center" 
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Avatar 
                size={150} 
                icon={<UserOutlined />} 
                className="mb-4" 
                style={{ 
                  backgroundColor: '#1890ff',
                  fontSize: '50px',
                }} 
              />
              <Title level={3} className="mb-1">Dilay Uluergüven</Title>
              <Text type="secondary" className="fs-5">Yazılım Mühendisi</Text>
              
              <Divider className="my-4" />
              
              <div className="text-start">
                <Paragraph className="mb-3">
                  <PhoneOutlined className="text-primary me-2" style={{ fontSize: "16px" }} /> 
                  <Text>0 (507) 900 2276</Text>
                </Paragraph>
                
                <Paragraph className="mb-3">
                  <MailOutlined className="text-primary me-2" style={{ fontSize: "16px" }} /> 
                  <Text>uluerguven245@gmail.com</Text>
                </Paragraph>
                
                <Paragraph className="mb-3">
                  <HomeOutlined className="text-primary me-2" style={{ fontSize: "16px" }} /> 
                  <Text>43030 / Kütahya</Text>
                </Paragraph>
                
                <Paragraph className="mb-3">
                  <CalendarOutlined className="text-primary me-2" style={{ fontSize: "16px" }} /> 
                  <Text>28.04.2003</Text>
                </Paragraph>
                
                <Paragraph className="mb-3">
                  <LinkedinOutlined className="text-primary me-2" style={{ fontSize: "16px" }} /> 
                  <a href="www.linkedin.com/in/dilay-uluergüven-2b484125b" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profili
                  </a>
                </Paragraph>
                
                <Paragraph>
                  <GithubOutlined className="text-primary me-2" style={{ fontSize: "16px" }} /> 
                  <a href="https://github.com/dilayulurerguyen" target="_blank" rel="noopener noreferrer">
                    GitHub Profili
                  </a>
                </Paragraph>
              </div>
            </Card>
          </Col>

          <Col xs={24} md={16}>
            <Card
              className="mb-4" 
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                height: "100%"
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Paragraph className="fs-5 lh-lg mb-0 text-start">
                Konya Teknik Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim (Not Ortalaması: 3.38).
                Yazılım yolculuğuma 1. sınıfta algoritma ve C programlama ile başladım.
                2. sınıfta Java ile OOP ve C# ile Tasarım Desenleri (Design Patterns)
                konularında bilgi edindim. 3. sınıfta ise uzmanlaşmak istediğim alan
                olarak web teknolojilerini seçerek, web geliştirme, kullanıcı arayüzü
                tasarımı ve veritabanı yönetimi gibi konulara odaklandım.
              </Paragraph>
            </Card>

            <Card
              className="mb-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Title level={4} className="mb-4">
                <BookOutlined className="text-primary me-2" />
                Eğitim
              </Title>
              
              <div className="ms-4">
                <Paragraph className="mb-3">
                  <Text strong className="fs-5">Konya Teknik Üniversitesi</Text><br />
                  <Text type="secondary">Mühendislik ve Doğa Bilimleri Fakültesi, Yazılım Mühendisliği</Text><br />
                  <Text>Eyl 2022 - Devam ediyor</Text><br />
                  <Text>Not Ortalaması: 3.38</Text>
                </Paragraph>
                
                <Paragraph>
                  <Text strong className="fs-5">Necip Fazıl Kısakürek Anadolu Lisesi</Text><br />
                  <Text type="secondary">Eyl 2017 - Haz 2021</Text>
                </Paragraph>
              </div>
            </Card>

            <Card
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Title level={4} className="mb-4">
                <LaptopOutlined className="text-primary me-2" />
                Teknik Beceriler
              </Title>
              
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <div className="bg-light p-3 rounded h-100"> {/* Bootstrap classes */}
                    <Title level={5} className="text-primary">
                      <CodeOutlined className="me-2" />
                      Frontend
                    </Title>
                    <ul className="ps-3 mb-0">
                      <li><Text>JavaScript</Text></li>
                      <li><Text>ReactJS</Text></li>
                      <li><Text>Qt (C++)</Text></li>
                      <li><Text>HTML/CSS</Text></li>
                      <li><Text>Tailwind CSS</Text></li>
                    </ul>
                  </div>
                </Col>
                
                <Col xs={24} md={12}>
                  <div className="bg-light p-3 rounded h-100">
                    <Title level={5} className="text-primary">
                      <DatabaseOutlined className="me-2" />
                      Backend
                    </Title>
                    <ul className="ps-3 mb-0">
                      <li><Text>Node.js</Text></li>
                      <li><Text>Express.js</Text></li>
                      <li><Text>ASP.NET Core MVC</Text></li>
                      <li><Text>Entity Framework</Text></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Card
          className="mt-4"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
          }}
          bodyStyle={{ padding: "24px" }}
        >
          <Title level={4} className="mb-3">
            <RocketOutlined className="text-primary me-2" />
            İş Deneyimi
          </Title>
          
          <div className="ms-4">
            <Title level={5} className="mb-1">
              TEI TUSAŞ Motor Sanayii A.Ş.
            </Title>
            <Text strong>Stajyer Mühendis</Text><br />
            <Text type="secondary">Haz 2025 - Ağu 2025</Text>
            <Paragraph className="mt-2 mb-0">
              Qt ile manuel test süreçlerini otomatize eden araç geliştirme
            </Paragraph>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;